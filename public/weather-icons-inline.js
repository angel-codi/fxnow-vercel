// fxnow 귀여운 날씨 아이콘
// 각 함수는 SVG 문자열을 반환합니다

// 매우 유리 (strong favorable, +2% 이상) - 하트눈 해
const getVeryFavorableIcon = () => `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width: 1em; height: 1em; vertical-align: -0.125em;">
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

// 유리 (mild favorable, 0~2%) - 웃는 해
const getFavorableIcon = () => `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width: 1em; height: 1em; vertical-align: -0.125em;">
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
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width: 1em; height: 1em; vertical-align: -0.125em;">
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

// 불리 (mild unfavorable, 0~-2%) - 귀여운 구름
const getUnfavorableIcon = () => `
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width: 1em; height: 1em; vertical-align: -0.125em;">
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
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" style="width: 1em; height: 1em; vertical-align: -0.125em;">
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

// 사용 예시:
// decisionTitle.innerHTML = `${getVeryFavorableIcon()} 지금 환전하면?`;

// 또는 조건에 따라:
function getWeatherIcon(condition, intensity) {
  if (condition === 'neutral') {
    return getNeutralIcon();
  } else if (condition === 'favorable') {
    return intensity === 'strong' ? getVeryFavorableIcon() : getFavorableIcon();
  } else {
    return intensity === 'strong' ? getVeryUnfavorableIcon() : getUnfavorableIcon();
  }
}

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    getVeryFavorableIcon,
    getFavorableIcon,
    getNeutralIcon,
    getUnfavorableIcon,
    getVeryUnfavorableIcon,
    getWeatherIcon
  };
}
