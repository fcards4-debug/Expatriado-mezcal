const navToggle = document.querySelector('#navToggle');
const siteNav = document.querySelector('#siteNav');

if (navToggle && siteNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const ageGate = document.querySelector('#ageGate');
const acceptAge = document.querySelector('#acceptAge');

if (ageGate && !localStorage.getItem('expatriado-age-ok')) {
  ageGate.classList.add('is-visible');
}

if (acceptAge) {
  acceptAge.addEventListener('click', () => {
    localStorage.setItem('expatriado-age-ok', 'true');
    ageGate.classList.remove('is-visible');
  });
}

const copyButton = document.querySelector('#copyEmail');
const copyStatus = document.querySelector('#copyStatus');

if (copyButton) {
  copyButton.addEventListener('click', async () => {
    const email = copyButton.dataset.email;
    try {
      await navigator.clipboard.writeText(email);
      copyStatus.textContent = 'Email copiado al portapapeles.';
    } catch (error) {
      copyStatus.textContent = email;
    }
  });
}

const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

reveals.forEach((element) => observer.observe(element));
