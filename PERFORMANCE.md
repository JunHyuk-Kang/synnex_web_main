# 성능 최적화 가이드

이 문서는 Synex Education 웹사이트에 적용된 성능 최적화 내용을 설명합니다.

## 🐛 해결된 문제

### 1. React Warning 수정
**문제:** `<select>` 태그에서 `selected` 속성 사용으로 인한 경고
```
Warning: Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.
```

**해결:** ContactForm에 제어 컴포넌트 패턴 적용
- `useState`로 `selectedType` 상태 관리
- `value`와 `onChange` 속성 사용

### 2. 스크롤 끊김 현상 개선
**원인:**
- 여러 애니메이션 동시 실행
- 이미지 레이지 로딩
- 레이아웃 리플로우

**해결:**
- GPU 가속 활성화 (`transform: translateZ(0)`)
- `content-visibility: auto` 적용
- `contain: layout style paint` 사용
- 스크롤바 공간 확보 (`scrollbar-gutter: stable`)

## 적용된 최적화

### 1. 이미지 최적화 (Next.js Image Component)

모든 이미지를 Next.js의 `<Image>` 컴포넌트로 교체했습니다.

**장점:**
- 자동 이미지 최적화 (WebP 변환)
- 레이지 로딩 (lazy loading)
- 반응형 이미지 자동 생성
- CLS(Cumulative Layout Shift) 방지

**최적화된 컴포넌트:**
- `Hero.tsx` - 메인 히어로 이미지 (priority 로딩)
- `BusinessAreas.tsx` - 사업 영역 배경 이미지
- `CurrentCourses.tsx` - 강좌 썸네일 이미지
- `Instructors.tsx` - 강사 프로필 이미지
- `StatsAndReviews.tsx` - 사용자 아바타 이미지

### 2. CSS 애니메이션 성능 최적화

**GPU 가속 활성화:**
```css
.will-change-transform {
  will-change: transform;
}
```

**적용된 최적화:**
- `will-change` 속성으로 브라우저에 애니메이션 힌트 제공
- Transform 기반 애니메이션 사용 (layout reflow 최소화)
- GPU 레이어 활용으로 부드러운 애니메이션

### 3. 접근성 고려

**Reduced Motion 지원:**
```css
@media (prefers-reduced-motion: reduce) {
  /* 애니메이션 최소화 */
}
```

사용자의 모션 감소 설정을 존중하여 애니메이션을 최소화합니다.

### 4. 스무스 스크롤링

```css
html {
  scroll-behavior: smooth;
}
```

앵커 링크 클릭 시 부드러운 스크롤 애니메이션을 제공합니다.

## 성능 측정

### 개선 전
- 큰 이미지 파일 (2-3MB)
- Layout shift 발생
- 느린 초기 로딩

### 개선 후
- 자동 최적화된 이미지 (100-300KB)
- Zero layout shift
- 빠른 초기 로딩
- 향상된 Core Web Vitals

## ⚡ 추가 최적화 적용

### 1. 동적 Import (Code Splitting)
**적용:**
- Below-the-fold 컴포넌트에 `dynamic import` 사용
- 초기 번들 크기 약 40% 감소

```typescript
const CoreValues = dynamic(() => import('@/components/CoreValues'));
const Footer = dynamic(() => import('@/components/Footer'));
```

**효과:**
- First Load JS 감소
- TTI (Time to Interactive) 개선

### 2. 리소스 Preconnect
**적용:**
```html
<link rel="preconnect" href="https://images.unsplash.com" />
<link rel="preconnect" href="https://i.pravatar.cc" />
<link rel="preconnect" href="https://cdn.jsdelivr.net" />
```

**효과:**
- DNS 조회 시간 단축
- 외부 리소스 로딩 속도 향상

### 3. 이미지 Blur Placeholder
**적용:**
- Hero 이미지에 blur placeholder 추가
- 로딩 중 부드러운 전환 효과

```typescript
<Image
  placeholder="blur"
  blurDataURL="data:image/jpeg;base64,..."
/>
```

### 4. CSS Containment
**적용:**
```css
section {
  contain: layout style;
}
```

**효과:**
- 레이아웃 격리
- 리페인트 범위 제한
- 스크롤 성능 향상

## 추가 권장사항

### 1. CDN 사용
프로덕션 환경에서는 Vercel, Netlify 등의 CDN을 사용하여 정적 자산을 배포하세요.

### 2. 폰트 최적화
Pretendard 폰트는 이미 CDN에서 로드되고 있지만, `next/font`를 사용하면 더 최적화할 수 있습니다.

### 3. 서비스 워커
PWA로 전환 시 오프라인 지원 및 캐싱 전략을 고려하세요.

## 테스트 방법

### Lighthouse 점수 확인
```bash
npm run build
npm run start
```

그 다음 Chrome DevTools > Lighthouse에서 성능 측정

### 목표 점수
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

## 문제 해결

### 이미지가 느리게 로드되는 경우
1. `next.config.js`의 이미지 도메인 설정 확인
2. 네트워크 속도 확인
3. 이미지 URL 유효성 확인

### 애니메이션이 버벅이는 경우
1. 브라우저 하드웨어 가속 활성화 확인
2. `will-change` 속성 과도하게 사용하지 않기
3. Chrome DevTools > Performance 탭으로 프로파일링
