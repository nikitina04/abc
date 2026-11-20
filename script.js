// 1. Кнопка "Подробнее" (Практика 1, слайд 11)
const showMoreBtn = document.querySelector('#showMore');
const moreText = document.querySelector('#moreText');

showMoreBtn.addEventListener('click', () => {
    // Переключаем класс d-none (скрыть/показать)
    moreText.classList.toggle('d-none');
    
    // Меняем текст кнопки в зависимости от того, скрыт блок или нет
    showMoreBtn.textContent = moreText.classList.contains('d-none') 
        ? 'Подробнее' 
        : 'Скрыть';
});

// 2. Загрузка карточек из JSON через fetch (Практика 4, слайды 16-17)
const projectsContainer = document.querySelector('#projects');

fetch('./projects.json')
    .then(response => response.json())
    .then(data => {
        // Превращаем массив объектов в HTML-разметку карточек
        projectsContainer.innerHTML = data.map(item => `
            <article class="card">
                <h3>${item.title}</h3>
                <p>${item.description}</p>
            </article>
        `).join('');
    })
    .catch(() => {
        projectsContainer.innerHTML = '<p class="text-danger">Не удалось загрузить данные. Запустите сайт через Live Server или GitHub Pages.</p>';
    });

// 3. Проверка формы обратной связи (Практика 3, слайд 13)
const contactForm = document.querySelector('#contactForm');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const commentInput = document.querySelector('#comment');
const formMessage = document.querySelector('#formMessage');

contactForm.addEventListener('submit', (event) => {
    // Отменяем стандартную перезагрузку страницы при отправке формы
    event.preventDefault();

    // Проверяем, заполнены ли поля и есть ли символ @ в email
    if (!nameInput.value.trim() || !emailInput.value.includes('@') || !commentInput.value.trim()) {
        formMessage.textContent = 'Ошибка: заполните все поля и укажите корректный email!';
        formMessage.className = 'mt-2 fw-bold text-danger';
        return;
    }

    // Если всё верно — выводим сообщение об успехе и очищаем форму
    formMessage.textContent = `Спасибо, ${nameInput.value}! Ваше сообщение отправлено.`;
    formMessage.className = 'mt-2 fw-bold text-success';
    contactForm.reset();
});
// 4. Переключение тёмной темы (Практика 2, слайд 12)
const themeBtn = document.querySelector('#theme');

themeBtn.addEventListener('click', () => {
    // Добавляем или убираем класс dark-theme у тега <body>
    document.body.classList.toggle('dark-theme');
    
    // Меняем текст кнопки в зависимости от активной темы
    const isDark = document.body.classList.contains('dark-theme');
    themeBtn.textContent = isDark ? 'Светлая тема' : 'Тёмная тема';
});

