// ==================== 설정 ====================
// 한국수출입은행 공식 환율 사용 - 정부 공인 데이터

// ==================== SVG 아이콘 함수 ====================

// 매우 유리 (strong favorable, +2% 이상) - 하트눈 해
const getVeryFavorableIcon = () => `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
  <line x1="50" y1="10" x2="50" y2="20" stroke="#FFB347" stroke-width="3" stroke-linecap="round"/>
  <line x1="50" y1="80" x2="50" y2="90" stroke="#FFB347" stroke-width="3" stroke-linecap="round"/>
  <line x1="10" y1="50" x2="20" y2="50" stroke="#FFB347" stroke-width="3" stroke-linecap="round"/>
  <line x1="80" y1="50" x2="90" y2="50" stroke="#FFB347" stroke-width="3" stroke-linecap="round"/>
  <line x1="20" y1="20" x2="27" y2="27" stroke="#FFB347" stroke-width="3" stroke-linecap="round"/>
  <line x1="73" y1="73" x2="80" y2="80" stroke="#FFB347" stroke-width="3" stroke-linecap="round"/>
  <line x1="80" y1="20" x2="73" y2="27" stroke="#FFB347" stroke-width="3" stroke-linecap="round"/>
  <line x1="27" y1="73" x2="20" y2="80" stroke="#FFB347" stroke-width="3" stroke-linecap="round"/>
  <circle cx="50" cy="50" r="22" fill="#FFD93D"/>
  <path d="M 36 43 C 36 40.5 37.5 39 39.5 39 C 41 39 42 40 42 41.5 C 42 40 43 39 44.5 39 C 46.5 39 48 40.5 48 43 C 48 46 42 50 42 50 C 42 50 36 46 36 43 Z" fill="#FF1493"/>
  <path d="M 52 43 C 52 40.5 53.5 39 55.5 39 C 57 39 58 40 58 41.5 C 58 40 59 39 60.5 39 C 62.5 39 64 40.5 64 43 C 64 46 58 50 58 50 C 58 50 52 46 52 43 Z" fill="#FF1493"/>
  <path d="M 38 54 Q 50 67 62 54" fill="none" stroke="#8B4513" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M 38 54 Q 50 65 62 54" fill="#D84A4A" opacity="0.4"/>
  <circle cx="36" cy="53" r="4" fill="#FFB6C1" opacity="0.6"/>
  <circle cx="64" cy="53" r="4" fill="#FFB6C1" opacity="0.6"/>
</svg>
`;

// 유리 (mild favorable, +1~2%) - 웃는 해
const getFavorableIcon = () => `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
  <line x1="50" y1="15" x2="50" y2="23" stroke="#FFA500" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="50" y1="77" x2="50" y2="85" stroke="#FFA500" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="15" y1="50" x2="23" y2="50" stroke="#FFA500" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="77" y1="50" x2="85" y2="50" stroke="#FFA500" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="25" y1="25" x2="31" y2="31" stroke="#FFA500" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="69" y1="69" x2="75" y2="75" stroke="#FFA500" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="75" y1="25" x2="69" y2="31" stroke="#FFA500" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="31" y1="69" x2="25" y2="75" stroke="#FFA500" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="50" cy="50" r="20" fill="#FFD93D"/>
  <circle cx="43" cy="46" r="2.5" fill="#333"/>
  <circle cx="57" cy="46" r="2.5" fill="#333"/>
  <path d="M 42 54 Q 50 58 58 54" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>
  <circle cx="38" cy="52" r="3" fill="#FFB6C1" opacity="0.4"/>
  <circle cx="62" cy="52" r="3" fill="#FFB6C1" opacity="0.4"/>
</svg>
`;

// 평소 (neutral, ±1%) - 온화한 미소
const getNeutralIcon = () => `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
  <line x1="50" y1="10" x2="50" y2="20" stroke="#FFB347" stroke-width="3" stroke-linecap="round"/>
  <line x1="50" y1="80" x2="50" y2="90" stroke="#FFB347" stroke-width="3" stroke-linecap="round"/>
  <line x1="10" y1="50" x2="20" y2="50" stroke="#FFB347" stroke-width="3" stroke-linecap="round"/>
  <line x1="80" y1="50" x2="90" y2="50" stroke="#FFB347" stroke-width="3" stroke-linecap="round"/>
  <line x1="20" y1="20" x2="27" y2="27" stroke="#FFB347" stroke-width="3" stroke-linecap="round"/>
  <line x1="73" y1="73" x2="80" y2="80" stroke="#FFB347" stroke-width="3" stroke-linecap="round"/>
  <line x1="80" y1="20" x2="73" y2="27" stroke="#FFB347" stroke-width="3" stroke-linecap="round"/>
  <line x1="27" y1="73" x2="20" y2="80" stroke="#FFB347" stroke-width="3" stroke-linecap="round"/>
  <circle cx="50" cy="50" r="22" fill="#FFD93D"/>
  <path d="M 41 46 Q 43 48 45 46" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>
  <path d="M 55 46 Q 57 48 59 46" fill="none" stroke="#333" stroke-width="2" stroke-linecap="round"/>
  <path d="M 43 55 Q 50 57 57 55" fill="none" stroke="#333" stroke-width="1.5" stroke-linecap="round"/>
  <circle cx="39" cy="52" r="2.5" fill="#FFB6C1" opacity="0.3"/>
  <circle cx="61" cy="52" r="2.5" fill="#FFB6C1" opacity="0.3"/>
</svg>
`;

// 불리 (mild unfavorable, -1~-2%) - 귀여운 구름
const getUnfavorableIcon = () => `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
  <ellipse cx="35" cy="55" rx="15" ry="12" fill="#C4C4C4"/>
  <ellipse cx="50" cy="50" rx="18" ry="15" fill="#D3D3D3"/>
  <ellipse cx="65" cy="55" rx="15" ry="12" fill="#C4C4C4"/>
  <rect x="25" y="52" width="50" height="15" fill="#D3D3D3"/>
  <circle cx="45" cy="55" r="2" fill="#666"/>
  <circle cx="55" cy="55" r="2" fill="#666"/>
  <path d="M 43 62 Q 50 60 57 62" fill="none" stroke="#666" stroke-width="1.5" stroke-linecap="round"/>
</svg>
`;

// 매우 불리 (strong unfavorable, -2% 이하) - 우산
const getVeryUnfavorableIcon = () => `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: 100%;">
  <path d="M 30 55 Q 30 35 50 35 Q 70 35 70 55" fill="none" stroke="#667eea" stroke-width="3" stroke-linecap="round"/>
  <path d="M 30 55 Q 30 40 50 35 Q 70 40 70 55" fill="#8B9FEE" opacity="0.3"/>
  <line x1="50" y1="35" x2="50" y2="70" stroke="#667eea" stroke-width="2.5"/>
  <path d="M 50 70 Q 53 73 56 70" fill="none" stroke="#667eea" stroke-width="2.5" stroke-linecap="round"/>
  <ellipse cx="35" cy="65" rx="2" ry="4" fill="#89CFF0" opacity="0.6"/>
  <ellipse cx="45" cy="68" rx="2" ry="4" fill="#89CFF0" opacity="0.6"/>
  <ellipse cx="55" cy="68" rx="2" ry="4" fill="#89CFF0" opacity="0.6"/>
  <ellipse cx="65" cy="65" rx="2" ry="4" fill="#89CFF0" opacity="0.6"/>
  <ellipse cx="40" cy="32" rx="8" ry="6" fill="#D3D3D3" opacity="0.7"/>
  <ellipse cx="60" cy="32" rx="8" ry="6" fill="#D3D3D3" opacity="0.7"/>
</svg>
`;

// 조건에 따라 아이콘 반환
function getWeatherIcon(condition, intensity) {
  if (condition === 'neutral') {
    return getNeutralIcon();
  } else if (condition === 'favorable') {
    return intensity === 'strong' ? getVeryFavorableIcon() : getFavorableIcon();
  } else {
    return intensity === 'strong' ? getVeryUnfavorableIcon() : getUnfavorableIcon();
  }
}

let exchangeRates = {};
let currentRate = 0;

let historicalRates = {
  yesterday: 0,
  week: 0,
  month: 0,
  year: 0
};

const currencySymbols = {
  KRW: '₩',
  USD: '$',
  JPY: '¥',
  EUR: '€',
  GBP: '£',
  CNY: '¥'
};

// ==================== DOM 요소 ====================

const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const fromAmount = document.getElementById('fromAmount');
const toAmount = document.getElementById('toAmount');
const fromSymbol = document.getElementById('fromSymbol');
const toSymbol = document.getElementById('toSymbol');
const statusBar = document.getElementById('statusBar');

const purposeRadios = document.querySelectorAll('input[name="purpose"]');

const decisionCard = document.getElementById('decisionCard');
const decisionIcon = document.getElementById('decisionIcon');
const decisionStatusTitle = document.getElementById('decisionStatusTitle');
const decisionStatusRange = document.getElementById('decisionStatusRange');
const decisionTitle = document.getElementById('decisionTitle');
const decisionText = document.getElementById('decisionText');

const rateInfo = document.getElementById('rateInfo');
const rateValue = document.getElementById('rateValue');
const rateFromCurrency = document.getElementById('rateFromCurrency');
const rateToCurrency = document.getElementById('rateToCurrency');
const rateUpdate = document.getElementById('rateUpdate');

const profitLossSection = document.getElementById('profitLossSection');
const profitYesterday = document.getElementById('profitYesterday');
const profit7days = document.getElementById('profit7days');
const profit1month = document.getElementById('profit1month');

const analysisSection = document.getElementById('analysisSection');
const rate7days = document.getElementById('rate7days');
const rate1month = document.getElementById('rate1month');
const rate1year = document.getElementById('rate1year');
const summary7days = document.getElementById('summary7days');
const summary1month = document.getElementById('summary1month');
const summary1year = document.getElementById('summary1year');

// ==================== 유틸리티 함수 ====================

function getPurpose() {
  const stored = localStorage.getItem('fxnow_purpose');
  return stored || 'traveler';
}

function setPurpose(purpose) {
  localStorage.setItem('fxnow_purpose', purpose);
}

function isSameCurrency() {
  return fromCurrency.value === toCurrency.value;
}

function hasKRW() {
  return fromCurrency.value === 'KRW' || toCurrency.value === 'KRW';
}

function getDateString(daysAgo) {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  let year = date.getFullYear();
  
  // 2026년 이상이면 2025년으로 조정
  if (year >= 2026) {
    year = 2025;
  }
  
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}${month}${day}`;
}

function formatNumber(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function parseNumber(str) {
  return parseFloat(str.replace(/[^\d.]/g, '')) || 0;
}

function formatInput() {
  const amount = parseNumber(fromAmount.value);
  fromAmount.value = formatNumber(amount);
  convert();
  if (!isSameCurrency()) {
    updateProfitLoss();
    updateDecisionCard();
  }
}

function safePercentage(current, historical) {
  if (!historical || historical === 0 || !isFinite(historical)) {
    return 0;
  }
  const diff = ((current - historical) / historical * 100);
  return isFinite(diff) ? diff : 0;
}

function updateCurrencyOptions() {
  const allCurrencies = ['KRW', 'USD', 'JPY', 'EUR', 'GBP', 'CNY'];
  const fromValue = fromCurrency.value;
  const toValue = toCurrency.value;

  toCurrency.innerHTML = '';
  allCurrencies.forEach(currency => {
    if (currency !== fromValue) {
      const option = document.createElement('option');
      option.value = currency;
      option.textContent = currency;
      if (currency === toValue) {
        option.selected = true;
      }
      toCurrency.appendChild(option);
    }
  });

  if (fromValue === toValue) {
    toCurrency.value = allCurrencies.find(c => c !== fromValue);
  }
}

// ==================== API 호출 - 한국수출입은행 ====================

async function fetchCurrentRates() {
  try {
    const response = await fetch('/api/exim-proxy?type=current');

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const result = await response.json();

    if (result.error) {
      throw new Error(result.message || result.error);
    }

    if (result.rates) {
      exchangeRates = {
        KRW: 1,
        USD: result.rates.USD || 1440,
        JPY: result.rates.JPY || 9.74,
        EUR: result.rates.EUR || 1600,
        GBP: result.rates.GBP || 1850,
        CNY: result.rates.CNY || 200
      };

      console.log('✅ 한국수출입은행 현재 환율 로드 완료');
      if (result.daysBack && result.daysBack > 0) {
        console.log(`⚠️ 주말/공휴일로 ${result.daysBack}일 전 영업일 환율 사용`);
        console.log(`환율 기준일: ${result.date}`);
        
        // 상태바에 주말/공휴일 메시지 표시
        if (statusBar) {
          const dateStr = `${result.date.substring(0, 4)}.${result.date.substring(4, 6)}.${result.date.substring(6, 8)}`;
          statusBar.innerHTML = `⚠️ 주말/공휴일로 ${result.daysBack}일 전 영업일(${dateStr}) 환율을 사용 중입니다.`;
          statusBar.style.backgroundColor = '#fff3cd';
          statusBar.style.color = '#856404';
        }
      } else {
        console.log('출처: 한국수출입은행 (매일 11시 고시)');
      }
      console.log('1 USD =', exchangeRates.USD.toFixed(2), 'KRW');

      return true;
    }

    throw new Error('환율 데이터 없음');

  } catch (error) {
    console.error('현재 환율 로드 실패:', error);
    exchangeRates = {
      KRW: 1,
      USD: 1440.41,
      JPY: 9.74,
      EUR: 1604.50,
      GBP: 1847.30,
      CNY: 200.45
    };
    console.warn('⚠️ 기본 환율 사용 중');
    return false;
  }
}

async function fetchHistoricalRate(currency, daysAgo) {
  try {
    // 주말/공휴일 대응: 최대 10일 이전까지 검색
    for (let offset = 0; offset < 10; offset++) {
      const searchDate = getDateString(daysAgo + offset);

      const response = await fetch(`/api/exim-proxy?type=historical&currency=${currency}&date=${searchDate}`);

      if (!response.ok) {
        continue; // 다음 날짜 시도
      }

      const result = await response.json();

      if (result.rate) {
        if (offset > 0) {
          console.log(`✅ ${currency} ${daysAgo}일 전 (실제: ${daysAgo + offset}일 전 영업일): ${result.rate}`);
        } else {
          console.log(`✅ ${currency} ${daysAgo}일 전: ${result.rate}`);
        }
        return result.rate;
      }
    }

    console.warn(`환율 조회 실패 (${currency}, ${daysAgo}일 전): 10일 이내 영업일 데이터 없음`);
    return null;
  } catch (error) {
    console.error(`환율 조회 실패 (${currency}, ${daysAgo}일 전):`, error);
    return null;
  }
}

async function fetchHistoricalRates() {
  try {
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (isSameCurrency()) {
      currentRate = 1;
      historicalRates.yesterday = 1;
      historicalRates.week = 1;
      historicalRates.month = 1;
      historicalRates.year = 1;
      return;
    } else {
      currentRate = exchangeRates[from] / exchangeRates[to];
    }

    console.log('현재 환율:', currentRate);

    // KRW 포함 - 한국수출입은행 사용
    if (hasKRW()) {
      const targetCurrency = from === 'KRW' ? to : from;

      console.log(`한국수출입은행 ${targetCurrency} 과거 환율 조회...`);

      const [yesterdayRate, weekRate, monthRate, yearRate] = await Promise.all([
        fetchHistoricalRate(targetCurrency, 1),
        fetchHistoricalRate(targetCurrency, 7),
        fetchHistoricalRate(targetCurrency, 30),
        fetchHistoricalRate(targetCurrency, 365)
      ]);

      if (yesterdayRate || weekRate || monthRate || yearRate) {
        if (from === 'KRW') {
          historicalRates.yesterday = yesterdayRate ? (1 / yesterdayRate) : 0;
          historicalRates.week = weekRate ? (1 / weekRate) : 0;
          historicalRates.month = monthRate ? (1 / monthRate) : 0;
          historicalRates.year = yearRate ? (1 / yearRate) : 0;
        } else {
          historicalRates.yesterday = yesterdayRate || 0;
          historicalRates.week = weekRate || 0;
          historicalRates.month = monthRate || 0;
          historicalRates.year = yearRate || 0;
        }

        console.log('✅ 과거 환율 로드 완료');
        console.log('1일 전:', historicalRates.yesterday || '없음 (주말/공휴일)');
        console.log('7일 전:', historicalRates.week || '없음');
        console.log('30일 전:', historicalRates.month || '없음');
        console.log('365일 전:', historicalRates.year || '없음');
      } else {
        console.warn('⚠️ 과거 환율 데이터 없음 (주말/공휴일)');
        historicalRates.yesterday = 0;
        historicalRates.week = 0;
        historicalRates.month = 0;
        historicalRates.year = 0;
      }

      return;
    }

    // KRW 없음 - 현재 환율 유지
    historicalRates.yesterday = currentRate;
    historicalRates.week = currentRate;
    historicalRates.month = currentRate;
    historicalRates.year = currentRate;

  } catch (error) {
    console.error('과거 환율 로드 실패:', error);
    historicalRates.yesterday = 0;
    historicalRates.week = 0;
    historicalRates.month = 0;
    historicalRates.year = 0;
  }
}

async function fetchExchangeRates() {
  try {
    statusBar.className = 'status-bar status-loading';
    statusBar.textContent = '한국수출입은행 환율 정보를 불러오는 중...';

    await fetchCurrentRates();

    statusBar.textContent = '과거 환율 데이터를 불러오는 중...';
    await fetchHistoricalRates();

    statusBar.className = 'status-bar status-success';
    statusBar.textContent = '✓ 최신 환율 정보 업데이트 완료 (출처: 한국수출입은행)';

    setTimeout(() => {
      statusBar.style.display = 'none';
    }, 3000);

    updateAll();
  } catch (error) {
    console.error('환율 가져오기 오류:', error);
    statusBar.className = 'status-bar status-error';
    statusBar.textContent = `⚠ 환율 정보를 불러올 수 없습니다`;

    updateAll();
  }
}

// ==================== UI 업데이트 ====================

function updateAll() {
  updateSymbols();
  updateCurrentRate();
  convert();

  if (isSameCurrency()) {
    profitLossSection.style.display = 'none';
    analysisSection.style.display = 'none';
    updateSameCurrencyCard();
  } else if (hasKRW() && historicalRates.month === 0) {
    profitLossSection.style.display = 'none';
    analysisSection.style.display = 'none';
    updateKRWLoadingCard();
  } else {
    updateProfitLoss();
    updateAnalysis();
    updateDecisionCard();
  }
}

function updateSymbols() {
  fromSymbol.textContent = currencySymbols[fromCurrency.value];
  toSymbol.textContent = currencySymbols[toCurrency.value];
}

function updateCurrentRate() {
  const from = fromCurrency.value;
  const to = toCurrency.value;

  if (Object.keys(exchangeRates).length === 0) return;

  if (isSameCurrency()) {
    currentRate = 1;
  } else {
    currentRate = exchangeRates[from] / exchangeRates[to];
  }

  // ✅ 항상 "1 USD = X KRW" 형식으로 표시
  let displayValue, displayFromCurr, displayToCurr;

  if (from === 'KRW') {
    // KRW → USD: 1 USD = X KRW
    displayValue = exchangeRates[to].toFixed(2);
    displayFromCurr = to;
    displayToCurr = from;
  } else if (to === 'KRW') {
    // USD → KRW: 1 USD = X KRW
    displayValue = exchangeRates[from].toFixed(2);
    displayFromCurr = from;
    displayToCurr = to;
  } else {
    // USD → EUR 등
    if (currentRate >= 1) {
      displayValue = currentRate.toFixed(4);
      displayFromCurr = from;
      displayToCurr = to;
    } else {
      displayValue = (1 / currentRate).toFixed(4);
      displayFromCurr = to;
      displayToCurr = from;
    }
  }

  rateValue.textContent = displayValue;
  rateFromCurrency.textContent = displayFromCurr;
  rateToCurrency.textContent = displayToCurr;

  const now = new Date();
  rateUpdate.textContent = `한국수출입은행 · ${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')} 확인`;

  rateInfo.style.display = 'flex';
}

function convert() {
  const from = fromCurrency.value;
  const to = toCurrency.value;
  const amount = parseNumber(fromAmount.value);

  if (Object.keys(exchangeRates).length === 0) return;

  if (isSameCurrency()) {
    toAmount.value = formatNumber(amount.toFixed(2));
  } else {
    const inKRW = amount * exchangeRates[from];
    const result = inKRW / exchangeRates[to];
    toAmount.value = formatNumber(result.toFixed(2));
  }
}

function updateSameCurrencyCard() {
  const currency = fromCurrency.value;
  decisionCard.className = 'decision-card warning';
  decisionIcon.innerHTML = '⚠️';
  decisionStatusTitle.textContent = '경고';
  decisionStatusRange.textContent = '';
  decisionTitle.textContent = '같은 통화입니다';
  decisionText.innerHTML = `동일한 통화(<span class="decision-highlight">${currency}</span>)입니다. 다른 통화를 선택해주세요.`;
  decisionCard.style.display = 'block';
}

function updateKRWLoadingCard() {
  decisionCard.className = 'decision-card';
  decisionIcon.innerHTML = '⏳';
  decisionStatusTitle.textContent = '분석 중';
  decisionStatusRange.textContent = '';
  decisionTitle.textContent = '분석 중...';
  decisionText.innerHTML = `
        <span class="decision-highlight">현재 환율: 1 ${rateToCurrency.textContent} = ${rateValue.textContent} ${rateFromCurrency.textContent}</span>
        <br><br>
        <small>출처: 한국수출입은행 (매일 오전 11시 고시)</small>
        <br><br>
        과거 환율 데이터를 불러오는 중입니다...
        <br><small>※ 주말/공휴일은 데이터가 없을 수 있습니다</small>
    `;
  decisionCard.style.display = 'block';
}

function updateProfitLoss() {
  const amount = parseNumber(fromAmount.value);
  if (amount === 0 || isSameCurrency() || historicalRates.month === 0) {
    profitLossSection.style.display = 'none';
    return;
  }

  const from = fromCurrency.value;
  const to = toCurrency.value;

  const currentResult = (amount * exchangeRates[from]) / exchangeRates[to];

  const yesterdayRate = historicalRates.yesterday || currentRate;
  const yesterdayResult = (amount * exchangeRates[from]) / (exchangeRates[to] * (currentRate / yesterdayRate));
  const yesterdayDiff = currentResult - yesterdayResult;

  const weekRate = historicalRates.week || currentRate;
  const weekResult = (amount * exchangeRates[from]) / (exchangeRates[to] * (currentRate / weekRate));
  const weekDiff = currentResult - weekResult;

  const monthRate = historicalRates.month || currentRate;
  const monthResult = (amount * exchangeRates[from]) / (exchangeRates[to] * (currentRate / monthRate));
  const monthDiff = currentResult - monthResult;

  profitYesterday.innerHTML = formatProfitLoss(yesterdayDiff, to);
  profit7days.innerHTML = formatProfitLoss(weekDiff, to);
  profit1month.innerHTML = formatProfitLoss(monthDiff, to);

  profitLossSection.style.display = 'block';
}

function formatProfitLoss(diff, currency) {
  if (!isFinite(diff)) {
    return `<span class="neutral">계산 중...</span>`;
  }

  const symbol = currencySymbols[currency];
  const absDiff = Math.abs(diff);
  const formattedDiff = formatNumber(absDiff.toFixed(2));

  if (diff > 0.01) {
    return `<span class="profit">▲ ${formattedDiff} ${symbol} 더 받음</span>`;
  } else if (diff < -0.01) {
    return `<span class="loss">▼ ${formattedDiff} ${symbol} 덜 받음</span>`;
  } else {
    return `<span class="neutral">± 비슷함</span>`;
  }
}

function updateAnalysis() {
  if (isSameCurrency() || historicalRates.month === 0) {
    analysisSection.style.display = 'none';
    return;
  }

  const weekDiff = safePercentage(currentRate, historicalRates.week);
  rate7days.textContent = historicalRates.week > 1 ? historicalRates.week.toFixed(2) : historicalRates.week.toFixed(4);
  summary7days.innerHTML = `현재보다 <span class="analysis-diff ${weekDiff > 0 ? 'loss' : 'profit'}">${Math.abs(weekDiff).toFixed(2)}% ${weekDiff > 0 ? '저렴' : '비쌈'}</span>`;

  const monthDiff = safePercentage(currentRate, historicalRates.month);
  rate1month.textContent = historicalRates.month > 1 ? historicalRates.month.toFixed(2) : historicalRates.month.toFixed(4);
  summary1month.innerHTML = `현재보다 <span class="analysis-diff ${monthDiff > 0 ? 'loss' : 'profit'}">${Math.abs(monthDiff).toFixed(2)}% ${monthDiff > 0 ? '저렴' : '비쌈'}</span>`;

  const yearDiff = safePercentage(currentRate, historicalRates.year);
  rate1year.textContent = historicalRates.year > 1 ? historicalRates.year.toFixed(2) : historicalRates.year.toFixed(4);
  summary1year.innerHTML = `현재보다 <span class="analysis-diff ${yearDiff > 0 ? 'loss' : 'profit'}">${Math.abs(yearDiff).toFixed(2)}% ${yearDiff > 0 ? '저렴' : '비쌈'}</span>`;

  analysisSection.style.display = 'block';
}

function updateDecisionCard() {
  if (isSameCurrency()) {
    updateSameCurrencyCard();
    return;
  }

  if (historicalRates.month === 0) {
    updateKRWLoadingCard();
    return;
  }

  const weekDiff = safePercentage(currentRate, historicalRates.week);
  const monthDiff = safePercentage(currentRate, historicalRates.month);
  const purpose = getPurpose();

  const from = fromCurrency.value;
  const to = toCurrency.value;

  let decision = '';

  decisionCard.className = 'decision-card';

  // 유불리 판단
  let condition = 'neutral';
  let intensity = 'mild';

  if (Math.abs(monthDiff) < 1) {
    condition = 'neutral';
  } else if (monthDiff > 0) {
    condition = 'favorable';
    intensity = monthDiff > 2 ? 'strong' : 'mild';
  } else {
    condition = 'unfavorable';
    intensity = monthDiff < -2 ? 'strong' : 'mild';
  }

  // 목적에 따라 메시지 생성
  if (purpose === 'traveler') {
    // 🧳 여행객 버전: 비싸다/싸다 + 상황/비교/느낌만 표현
    const targetCurrency = from === 'KRW' ? to : from;
    
    if (condition === 'neutral') {
      // 평소 수준이지만 약간의 차이 표시
      if (Math.abs(monthDiff) < 0.1) {
        decision = `한 달 전과 거의 동일한 수준입니다.`;
      } else if (monthDiff > 0) {
        decision = `한 달 전과 비슷한 수준입니다. (${monthDiff.toFixed(1)}% 더 저렴)`;
      } else {
        decision = `한 달 전과 비슷한 수준입니다. (${Math.abs(monthDiff).toFixed(1)}% 더 비쌈)`;
      }
    } else if (condition === 'favorable') {
      if (from === 'KRW') {
        // KRW → 외화: 외화가 싸졌다
        if (intensity === 'strong') {
          decision = `${targetCurrency}가 평소보다 ${Math.abs(monthDiff).toFixed(2)}% 싸졌습니다. 과거 평균과 비교하면 유리한 구간입니다.`;
        } else {
          decision = `${targetCurrency}가 평소보다 ${Math.abs(monthDiff).toFixed(2)}% 싸졌습니다.`;
        }
      } else {
        // 외화 → KRW: 외화 팔기 좋다
        if (intensity === 'strong') {
          decision = `${targetCurrency}를 파는 환율로는 과거 평균 대비 유리한 구간입니다.`;
        } else {
          decision = `${targetCurrency}를 파는 환율로는 평균 이상 구간입니다.`;
        }
      }
    } else {
      // unfavorable
      if (from === 'KRW') {
        // KRW → 외화: 외화가 비싸다
        if (intensity === 'strong') {
          decision = `${targetCurrency}가 평소보다 ${Math.abs(monthDiff).toFixed(2)}% 비싸졌습니다. 일정이 임박한 경우 환율 차이가 부담으로 느껴질 수 있습니다.`;
        } else {
          decision = `${targetCurrency}가 평소보다 ${Math.abs(monthDiff).toFixed(2)}% 비싸졌습니다. 출발이 임박했다면 큰 차이로 느껴지지 않을 수 있습니다.`;
        }
      } else {
        // 외화 → KRW: 외화 팔기 아쉽다
        if (intensity === 'strong') {
          decision = `${targetCurrency}를 파는 환율로는 평균보다 낮은 구간입니다.`;
        } else {
          decision = `${targetCurrency}를 파는 환율로는 평균보다 약간 낮은 구간입니다.`;
        }
      }
    }
    
    // 여행객은 7일 추세 제거 (간결함)

  } else {
    // 📊 일반인 버전: 그대로 (7일 추세 포함)
    if (condition === 'neutral') {
      if (Math.abs(monthDiff) < 0.1) {
        decision = `한 달 전과 거의 동일한 수준입니다. 환율 변동성이 크지 않은 구간입니다.`;
      } else if (monthDiff > 0) {
        decision = `한 달 전과 비슷한 수준입니다. (${monthDiff.toFixed(1)}% 더 저렴) 환율 변동성이 크지 않은 구간입니다.`;
      } else {
        decision = `한 달 전과 비슷한 수준입니다. (${Math.abs(monthDiff).toFixed(1)}% 더 비쌈) 환율 변동성이 크지 않은 구간입니다.`;
      }
    } else if (condition === 'favorable') {
      if (intensity === 'strong') {
        decision = `한 달 평균 대비 +${Math.abs(monthDiff).toFixed(2)}% 높은 환율입니다. 단기 추세상 괜찮은 타이밍입니다.`;
      } else {
        decision = `한 달 평균 대비 +${Math.abs(monthDiff).toFixed(2)}% 높은 환율입니다. 평균 이상 구간에 있습니다.`;
      }
    } else {
      // unfavorable
      if (intensity === 'strong') {
        decision = `한 달 평균 대비 ${monthDiff.toFixed(2)}% 낮은 환율입니다. 단기적으로 불리한 시점입니다.`;
      } else {
        decision = `한 달 평균 대비 ${monthDiff.toFixed(2)}% 낮은 환율입니다. 평균 이하 구간에 있습니다.`;
      }
    }

    // 일반인만 7일 추세 추가
    if (Math.abs(weekDiff) > 0.3 && historicalRates.week > 0) {
      const weekTrend = Math.abs(weekDiff).toFixed(2);
      const weekDirection = weekDiff > 0 ? '상승' : '하락';
      decision += ` 최근 7일 ${weekTrend}% ${weekDirection} 추세입니다.`;
    }
  }

  decision += `<br><br><small style="opacity: 0.8;">※ 출처: 한국수출입은행 (정부 공식 고시환율)</small>`;

  // 아이콘 설정
  decisionIcon.innerHTML = getWeatherIcon(condition, intensity);
  
  // 상태 카드 텍스트 설정
  let statusTitle = '';
  let statusRange = '';
  
  if (condition === 'neutral') {
    statusTitle = '평소 수준';
    statusRange = '±1%';
    decisionCard.className = 'decision-card';
  } else if (condition === 'favorable') {
    if (intensity === 'strong') {
      statusTitle = '매우 유리 💰';
      statusRange = '+2% 이상';
    } else {
      statusTitle = '유리 ✨';
      statusRange = '+1~2%';
    }
    decisionCard.className = 'decision-card favorable';
  } else {
    if (intensity === 'strong') {
      statusTitle = '매우 불리 ☔';
      statusRange = '-2% 이하';
    } else {
      statusTitle = '불리';
      statusRange = '-1~-2%';
    }
    decisionCard.className = 'decision-card unfavorable';
  }
  
  // 여행객일 때만 상태 카드 표시
  if (purpose === 'traveler') {
    decisionCard.classList.add('show-status-card');
  } else {
    decisionCard.classList.remove('show-status-card');
  }
  
  // 제목에 들어갈 이모지 선택
  let titleEmoji = '';
  if (condition === 'neutral') {
    titleEmoji = '😌';
  } else if (condition === 'favorable') {
    titleEmoji = intensity === 'strong' ? '🌞' : '😊';
  } else {
    titleEmoji = intensity === 'strong' ? '☔' : '☁️';
  }
  
  decisionStatusTitle.textContent = statusTitle;
  decisionStatusRange.textContent = statusRange;
  decisionTitle.textContent = `${titleEmoji} 지금 환전하면?`;
  decisionText.innerHTML = decision;
  decisionCard.style.display = 'block';
}












// ==================== 이벤트 리스너 ====================

fromAmount.addEventListener('input', () => {
  convert();
  if (!isSameCurrency()) {
    updateProfitLoss();
    updateDecisionCard();
  }
});

fromAmount.addEventListener('blur', formatInput);

fromCurrency.addEventListener('change', async () => {
  fromAmount.value = '1';
  updateCurrencyOptions();
  await fetchHistoricalRates();
  updateAll();
});

toCurrency.addEventListener('change', async () => {
  fromAmount.value = '1';
  await fetchHistoricalRates();
  updateAll();
});

fromAmount.addEventListener('focus', function () {
  this.select();
});

// 목적 선택 변경 시
purposeRadios.forEach(radio => {
  radio.addEventListener('change', (e) => {
    setPurpose(e.target.value);
    updateDecisionCard();
  });
});

// ==================== 초기화 ====================

// 저장된 목적 불러오기
const savedPurpose = getPurpose();
purposeRadios.forEach(radio => {
  if (radio.value === savedPurpose) {
    radio.checked = true;
  }
});

updateCurrencyOptions();
updateSymbols();
fetchExchangeRates();

// 1시간마다 자동 업데이트
setInterval(fetchExchangeRates, 3600000);
