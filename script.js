// Плавний скрол до якорів
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth' });
        // Закрити мобільне меню після вибору
        document.querySelector('.mobile-nav').classList.remove('active');
        document.querySelector('.mobile-menu-toggle').classList.remove('open'); // Закриваємо іконку
        document.body.style.overflow = 'auto';
    });
});

// Обробка мобільного меню
const menuToggle = document.querySelector('.mobile-menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');

menuToggle.addEventListener('click', () => {
    mobileNav.classList.toggle('active');
    menuToggle.classList.toggle('open'); // Додаємо/знімаємо клас для анімації іконки
    document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : 'auto';
});

// Обробка вкладок
document.querySelectorAll('.tab-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.tab-button').forEach(btn => btn.classList.remove('active'));
        document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
        button.classList.add('active');
        document.getElementById(button.dataset.tab).classList.add('active');
    });
});

// Обробка перемикання теми
const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
});

// Завантаження збереженої теми
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-theme');
}

// Обробка форми
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Дякуємо за заявку! Ми зв’яжемося з вами найближчим часом.');
    this.reset();
});