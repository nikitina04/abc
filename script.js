// 1. Кнопка "Подробнее"
const showMoreBtn = document.querySelector('#showMore');
const moreText = document.querySelector('#moreText');

showMoreBtn.addEventListener('click', () => {
    moreText.classList.toggle('d-none');
    showMoreBtn.textContent = moreText.classList.contains('d-none') 
        ? 'Подробнее' 
        : 'Скрыть';
});

// 2. Загрузка карточек из JSON через fetch
const projectsContainer = document.querySelector('#projects');

fetch('./projects.json')
    .then(response => response.json())
    .then(data => {
        projectsContainer.innerHTML = data.map(item => `
            <article class="card">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </article>
        `).join('');
    })
    .catch(() => {
        projectsContainer.innerHTML = '<p class="text-danger">Не удалось загрузить данные.</p>';
    });

// 3. Проверка формы обратной связи
const contactForm = document.querySelector('#contactForm');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const commentInput = document.querySelector('#comment');
const formMessage = document.querySelector('#formMessage');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!nameInput.value.trim() || !emailInput.value.includes('@') || !commentInput.value.trim()) {
        formMessage.textContent = 'Ошибка: заполните все поля и укажите корректный email!';
        formMessage.className = 'mt-2 fw-bold text-danger';
        return;
    }

    formMessage.textContent = `Спасибо, ${nameInput.value}! Ваше сообщение отправлено.`;
    formMessage.className = 'mt-2 fw-bold text-success';
    contactForm.reset();
});

// 4. Переключение тёмной темы
const themeBtn = document.querySelector('#theme');

themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    themeBtn.textContent = isDark ? 'Светлая тема' : 'Тёмная тема';
});
