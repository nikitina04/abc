<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Мой первый сайт</title>
    <!-- 1. Подключаем Bootstrap CSS (слайд 14) -->
    <link href="https://jsdelivr.net" rel="stylesheet">
    <!-- Ваши стили -->
    <link rel="stylesheet" href="style.css">
    <!-- 2. Подключаем наш JS с атрибутом defer (слайд 6) -->
    <script src="script.js" defer></script>
</head>
<body>

    <header>
        <h1>Мой первый сайт</h1>
    </header>

    <nav>
        <a href="index.html">Главная</a>
        <a href="about.html">О проекте</a>
        <a href="contacts.html">Контакты</a>
    </nav>

    <main>
        <!-- Приветствие + Практика 1: кнопка «Подробнее» (слайд 11) -->
        <section>
            <h2>Привет!</h2>
            <p>Это мой первый сайт, опубликованный на GitHub Pages.</p>
            
            <button id="showMore" class="button">Подробнее</button>
            <p id="moreText" class="d-none mt-3 p-3 bg-white border rounded">
                Теперь этот сайт стал интерактивным! Я добавил сюда JavaScript, динамическую загрузку карточек и проверку форм без перезагрузки страницы.
            </p>
        </section>

        <!-- Практика 4: Динамический блок для карточек из JSON (слайд 17) -->
        <section>
            <h2>Мои навыки и проекты</h2>
            <div id="projects" class="cards">
                <!-- Сюда JavaScript автоматически подставит карточки из файла projects.json -->
            </div>
        </section>

        <!-- Практика 3: Форма обратной связи (слайд 13) -->
        <section class="mt-5">
            <h2>Написать мне</h2>
            <form id="contactForm" class="card p-4">
                <div class="mb-3">
                    <input id="name" type="text" class="form-control" placeholder="Ваше имя">
                </div>
                <div class="mb-3">
                    <input id="email" type="text" class="form-control" placeholder="Ваш Email">
                </div>
                <div class="mb-3">
                    <textarea id="comment" class="form-control" rows="3" placeholder="Сообщение"></textarea>
                </div>
                <button type="submit" class="button">Отправить</button>
            </form>
            <p id="formMessage" class="mt-2 fw-bold"></p>
        </section>

        <!-- Bootstrap-компонент: Модальное окно (слайд 14) -->
        <section class="mt-4">
            <button class="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#infoModal">
                О технологиях сайта (Modal)
            </button>
        </section>
    </main>

    <!-- Разметка всплывающего окна Bootstrap -->
    <div class="modal fade" id="infoModal" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Стек технологий</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    Сайт использует HTML5, CSS3, Bootstrap 5 и чистый JavaScript (DOM, Events, Fetch API).
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
                </div>
            </div>
        </div>
    </div>

    <footer>
        <p>© 2026 Мой первый сайт. Все права защищены.</p>
    </footer>

    <!-- 3. Подключаем Bootstrap JS Bundle для работы модального окна (слайд 14) -->
    <script src="https://jsdelivr.net"></script>
</body>
</html>
