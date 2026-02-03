// ==================== 설정 ====================
// 한국수출입은행 공식 환율 사용 - 정부 공인 데이터

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

const decisionCard = document.getElementById('decisionCard');
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

function isSameCurrency() {
  return fromCurrency.value === toCurrency.value;
}

function hasKRW() {
  return fromCurrency.value === 'KRW' || toCurrency.value === 'KRW';
}

function getDateString(daysAgo) {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  const year = date.getFullYear();
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
      console.log('출처: 한국수출입은행 (매일 11시 고시)');
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

