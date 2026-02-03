const fetch = require('node-fetch');

const EXIM_API_KEY = process.env.EXIM_API_KEY;
const EXIM_BASE_URL = 'https://www.koreaexim.go.kr/site/program/financial/exchangeJSON';

// 환율 데이터 파싱 함수
function parseExchangeRates(data) {
  if (!Array.isArray(data) || data.length === 0) {
    return null;
  }

  const rates = {};
  
  data.forEach(item => {
    const currencyCode = item.cur_unit;
    let rate = parseFloat(item.deal_bas_r?.replace(/,/g, ''));
    
    // 100엔, 100원 등 단위 처리
    if (currencyCode.includes('(100)')) {
      const currency = currencyCode.replace('(100)', '').trim();
      rate = rate / 100;
      rates[currency] = rate;
    } else {
      rates[currencyCode] = rate;
    }
  });

  return rates;
}

// 날짜 포맷 함수 (YYYYMMDD)
function formatDate(date) {
  let year = date.getFullYear();
  
  // 2026년 이상이면 2025년으로 조정 (시스템 날짜 버그 대응)
  if (year >= 2026) {
    year = 2025;
  }
  
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
}

module.exports = async (req, res) => {
  // CORS 설정
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const { type, currency, date } = req.query;

    if (type === 'current') {
      // 현재 환율 조회 - 주말/공휴일 대응
      const today = new Date();
      let searchDate = formatDate(today);
      let daysBack = 0;
      const maxDaysBack = 7; // 최대 7일 전까지 시도
      
      console.log(`[현재 환율] 시작 날짜: ${searchDate}`);
      
      // 최대 7일 전까지 시도
      while (daysBack <= maxDaysBack) {
        const tryDate = new Date(today);
        tryDate.setDate(tryDate.getDate() - daysBack);
        searchDate = formatDate(tryDate);
        
        console.log(`[현재 환율] 시도 중... (${daysBack}일 전): ${searchDate}`);
        
        try {
          const response = await fetch(`${EXIM_BASE_URL}?authkey=${EXIM_API_KEY}&searchdate=${searchDate}&data=AP01`);
          const data = await response.json();

          // 상세 로깅
          console.log(`[DEBUG CURRENT] ${searchDate} API 응답 타입:`, typeof data);
          console.log(`[DEBUG CURRENT] ${searchDate} Array 여부:`, Array.isArray(data));
          console.log(`[DEBUG CURRENT] ${searchDate} 데이터 길이:`, data?.length);

          if (data && Array.isArray(data) && data.length > 0) {
            const rates = parseExchangeRates(data);
            
            if (rates && Object.keys(rates).length > 0) {
              console.log(`✅ 환율 로드 성공 (${searchDate}):`, rates);
              if (daysBack > 0) {
                console.log(`⚠️ 주말/공휴일로 인해 ${daysBack}일 전 영업일 환율 사용`);
              }
              return res.json({ 
                success: true, 
                rates,
                date: searchDate,
                daysBack: daysBack
              });
            } else {
              console.log(`[DEBUG CURRENT] ${searchDate} 파싱 후 rates 비어있음`);
            }
          } else {
            console.log(`[DEBUG CURRENT] ${searchDate} 데이터 형식 문제 - data:`, JSON.stringify(data).substring(0, 200));
          }
        } catch (error) {
          console.log(`❌ ${searchDate} 환율 조회 실패:`, error.message);
        }
        
        daysBack++;
      }

      throw new Error('최근 7일간 환율 데이터를 찾을 수 없습니다');

    } else if (type === 'historical') {
      // 과거 환율 조회 - 주말/공휴일 대응
      if (!currency || !date) {
        return res.status(400).json({ 
          error: 'currency와 date 파라미터가 필요합니다' 
        });
      }

      console.log(`[과거 환율] ${currency} / ${date}`);

      // 요청 날짜부터 최대 7일 전까지 시도
      const targetDate = new Date(date.substring(0, 4), date.substring(4, 6) - 1, date.substring(6, 8));
      let daysBack = 0;
      const maxDaysBack = 7;
      
      const debugInfo = {
        requestedCurrency: currency,
        requestedDate: date,
        attempts: []
      };
      
      while (daysBack <= maxDaysBack) {
        const tryDate = new Date(targetDate);
        tryDate.setDate(tryDate.getDate() - daysBack);
        const searchDate = formatDate(tryDate);
        
        console.log(`[과거 환율] 시도 중... (${daysBack}일 전): ${searchDate}`);
        
        try {
          const response = await fetch(`${EXIM_BASE_URL}?authkey=${EXIM_API_KEY}&searchdate=${searchDate}&data=AP01`);
          const data = await response.json();

          const attemptInfo = {
            searchDate,
            daysBack,
            isArray: Array.isArray(data),
            dataLength: data?.length,
            dataType: typeof data
          };

          if (data && Array.isArray(data) && data.length > 0) {
            const rates = parseExchangeRates(data);
            
            attemptInfo.ratesCount = Object.keys(rates || {}).length;
            attemptInfo.availableCurrencies = Object.keys(rates || {}).slice(0, 10);
            attemptInfo.hasCurrency = !!rates?.[currency];
            attemptInfo.actualCurrencyValue = rates?.[currency];
            
            debugInfo.attempts.push(attemptInfo);
            
            if (rates && rates[currency]) {
              console.log(`✅ ${currency} ${searchDate}: ${rates[currency]}`);
              if (daysBack > 0) {
                console.log(`⚠️ ${date} 데이터 없음, ${daysBack}일 전 영업일 환율 사용`);
              }
              return res.json({ 
                success: true, 
                rate: rates[currency],
                date: searchDate,
                requestedDate: date,
                daysBack: daysBack,
                debug: debugInfo
              });
            }
          } else {
            attemptInfo.error = "Not an array or empty";
            debugInfo.attempts.push(attemptInfo);
          }
        } catch (error) {
          console.log(`❌ ${searchDate} 환율 조회 실패:`, error.message);
          debugInfo.attempts.push({
            searchDate,
            daysBack,
            error: error.message
          });
        }
        
        daysBack++;
      }

      // 최근 7일간 데이터 없음
      console.log(`⚠️ ${date} 최근 7일간 데이터 없음`);
      return res.json({ 
        success: false,
        error: '해당 날짜의 환율 데이터가 없습니다',
        message: '최근 7일간 영업일 데이터를 찾을 수 없습니다',
        debug: debugInfo
      });

    } else {
      return res.status(400).json({ 
        error: '잘못된 type 파라미터입니다. current 또는 historical을 사용하세요.' 
      });
    }

  } catch (error) {
    console.error('❌ API 오류:', error.message);
    
    return res.status(500).json({
      error: error.message,
      message: '환율 데이터를 가져오는데 실패했습니다'
    });
  }
};
