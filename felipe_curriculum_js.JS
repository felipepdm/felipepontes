// Validação do formulário
const form = document.getElementById('contactForm');
const confirm = document.getElementById('confirm');
const closeBtn = document.getElementById('closeConfirm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
            
// Validar campos
const nome = document.getElementById('nome').value.trim();
const email = document.getElementById('email').value.trim();
const mensagem = document.getElementById('mensagem').value.trim();
            
    let erros = [];
            
    if (!nome) erros.push('Nome é obrigatório');
    if (!email) erros.push('Email é obrigatório');
    if (!mensagem) erros.push('Mensagem é obrigatória');
            
    // Validar formato do email
    if (email && !email.includes('@')) {
        erros.push('Email deve ter formato válido');
    }
            
    if (erros.length > 0) {
        alert('Erros:\n' + erros.join('\n'));
            return;
    }
            
    // Simular envio
        form.reset();
        confirm.style.display = 'flex';
    });

    // Fechar confirmação
    closeBtn.addEventListener('click', () => {
        confirm.style.display = 'none';
    });

    // Fechar confirmação clicando fora
    window.addEventListener('click', (e) => {
        if (e.target === confirm) {
            confirm.style.display = 'none';
        }
    });

// Rolagem suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

const target = document.querySelector(this.getAttribute('href'));
if (target) {
    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
    }
    });
});

// Menu mobile
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Tema claro/escuro
const themeBtn = document.getElementById('themeBtn');
themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    });