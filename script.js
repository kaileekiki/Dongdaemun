/* ===== DDM Market Connect - script.js ===== */

// ===== 햄버거 메뉴 =====
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

hamburger?.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileNav.classList.toggle('open');
  document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
});

mobileNavLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  });
});

// ===== 부드러운 스크롤 =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ===== 스크롤 시 Header 스타일 변경 =====
const header = document.getElementById('header');
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    header?.classList.add('scrolled');
    scrollTopBtn?.classList.add('visible');
  } else {
    header?.classList.remove('scrolled');
    scrollTopBtn?.classList.remove('visible');
  }
});

// ===== 맨 위로 버튼 =====
scrollTopBtn?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== 상가 등록 폼 제출 =====
const registerForm = document.getElementById('registerForm');
registerForm?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('상가 등록 신청이 완료되었습니다.\n빠른 시일 내에 연락드리겠습니다. 감사합니다!');
  this.reset();
});

// ===== 문의 폼 제출 =====
const inquiryForm = document.getElementById('inquiryForm');
inquiryForm?.addEventListener('submit', function (e) {
  e.preventDefault();
  alert('문의가 접수되었습니다.\n1-2 영업일 내에 답변드리겠습니다. 감사합니다!');
  this.reset();
});

// ===== 상품 문의하기 버튼 =====
document.querySelectorAll('.product-inquiry-btn').forEach(btn => {
  btn.addEventListener('click', function () {
    const productName = this.dataset.product;
    alert(`"${productName}"에 대한 문의를 시작합니다.\n연락처: contact@ddmconnect.kr`);
  });
});

// ===== Intersection Observer - 카드 애니메이션 =====
const observerOptions = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

const animateCards = document.querySelectorAll(
  '.problem-card, .feature-card, .product-card, .step-card'
);
animateCards.forEach((card, i) => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(30px)';
  card.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
  observer.observe(card);
});
