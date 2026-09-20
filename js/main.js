document.addEventListener('DOMContentLoaded', () => {
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === page) link.classList.add('active');
  });
  const form = document.querySelector('#inquiryForm');
  if (form) form.addEventListener('submit', event => {
    event.preventDefault();
    const message = document.querySelector('.form-message');
    message.style.display = 'block';
    message.textContent = 'Thank you! Your inquiry has been recorded for this project demo.';
    form.reset();
  });
});
