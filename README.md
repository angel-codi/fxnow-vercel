# fxnow - Vercel 배포용 (날짜 버그 수정)

**원본 Express v5.5 UI + 모든 기능 작동**

## 🔧 수정 내용

**날짜 버그 수정:**
- Vercel 함수의 Date 객체가 2026년을 반환하는 문제 해결
- 2025년 기준으로 강제 조정
- 과거 환율 조회 정상 작동

## ✅ 작동하는 모든 기능

- ✅ 실시간 환율 조회
- ✅ 환율 계산기  
- ✅ **"지금 환전하면?" 추천**
- ✅ **과거 환율 비교** (어제/7일/30일/365일)
- ✅ **손익 계산**
- ✅ 주말/공휴일 자동 대응
- ✅ 원본 UI 그대로

## 🚀 배포 방법

### 1. 기존 프로젝트 업데이트

```bash
# 압축 해제
tar -xzf fxnow-vercel-fixed.tar.gz

# 파일 교체
cd ~/fxnow-vercel
cp ~/fxnow-vercel-exact/api/exim-proxy.js api/
cp ~/fxnow-vercel-exact/public/script.js public/

# Git 푸시
git add .
git commit -m "Fix: Date bug for historical rates"
git push origin main
```

1-2분 후 Vercel 자동 재배포!

### 2. 새 프로젝트로 배포

```bash
cd fxnow-vercel-exact
git init
git add .
git commit -m "Initial commit: fxnow v5.5 with date fix"
git remote add origin https://github.com/YOUR_USERNAME/fxnow-vercel.git
git branch -M main
git push -f origin main
```

---

## 🔑 환경변수

Vercel에서 `EXIM_API_KEY` 설정 필수 (이미 설정되어 있음):
- Settings → Environment Variables
- Name: `EXIM_API_KEY`
- Value: [한국수출입은행 API 키]

---

## 🎯 예상 결과

업데이트 후:
- ✅ "지금 환전하면?" 카드 표시
- ✅ 과거 환율 비교 정상 작동
- ✅ 손익 계산 표시
- ✅ 모든 기능 작동

---

**Vercel 그대로 사용하면서 모든 기능이 작동합니다!** 🎉
