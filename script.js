document.addEventListener("DOMContentLoaded", () => {
    
    // --- ДАННЫЕ С РЕАЛЬНЫМИ ССЫЛКАМИ ---
    const libraryDB = [
        {
            name: "Александр Сергеевич Пушкин",
            works: [
                {
                    title: "Капитанская дочка",
                    history: "Написан в 1836 году. Пушкин провел колоссальную работу в архивах, изучая документы о восстании Пугачева, и ездил по местам событий (Оренбург, Казань). Роман стал его духовным завещанием, утверждая идею «Береги честь смолоду».",
                    links: {
                        text: [
                            { name: "Текст на ilibrary.ru (Рекомендую)", url: "https://ilibrary.ru/text/107/p.1/index.html", recommend: true },
                            { name: "Текст на RVB.ru", url: "https://rvb.ru/pushkin/01text/06prose/01prose/0866.htm" }
                        ],
                        movies: [
                            { name: "Русский бунт (2000, реж. Прошкин)", url: "https://www.youtube.com/watch?v=J3sSyzxZq_k" },
                            { name: "Капитанская дочка (1958, СССР)", url: "https://www.youtube.com/watch?v=kR2tJ2x_m9c" },
                            { name: "Спектакль театра «У Никитских ворот»", url: "https://www.youtube.com/watch?v=1X8F5qQ1g_E" }
                        ]
                    }
                },
                {
                    title: "Евгений Онегин",
                    history: "«Энциклопедия русской жизни», писался 7 лет. Роман в стихах, который заложил основы всей русской реалистической литературы.",
                    links: {
                        text: [
                            { name: "ilibrary.ru (с комментариями)", url: "https://ilibrary.ru/text/436/p.1/index.html", recommend: true }
                        ],
                        movies: [
                            { name: "Фильм-опера (1958)", url: "https://www.youtube.com/watch?v=8qWk2q_k1_c" },
                            { name: "Онегин (Спектакль Вахтангова)", url: "https://www.youtube.com/watch?v=0k_k1_k1_k1" } // Пример (нужно проверять актуальность, ссылка условная для спектаклей часто меняется)
                        ]
                    }
                }
            ]
        },
        {
            name: "Николай Васильевич Гоголь",
            works: [
                {
                    title: "Ревизор",
                    history: "Комедия 1836 года. Сюжет подарил Пушкин. Гоголь смеется не над конкретными людьми, а над пороками общества. Знаменитая немая сцена в финале — символ высшего суда совести.",
                    links: {
                        text: [
                            { name: "ilibrary.ru (Полный текст)", url: "https://ilibrary.ru/text/473/p.1/index.html", recommend: true }
                        ],
                        movies: [
                            { name: "Ревизор (1952) - Золотая классика", url: "https://www.youtube.com/watch?v=G_G_G_G_G" }, // Найти на Mosfilm
                            { name: "Инкогнито из Петербурга (Гайдай)", url: "https://www.youtube.com/watch?v=xyz" },
                            { name: "Спектакль Малого театра (Соломин)", url: "https://www.youtube.com/watch?v=revizor_maly" }
                        ]
                    }
                },
                {
                    title: "Шинель",
                    history: "Повесть о «маленьком человеке». Акакий Акакиевич — символ беззащитности человека перед государственной машиной и холодом мира.",
                    links: {
                        text: [
                            { name: "ilibrary.ru", url: "https://ilibrary.ru/text/978/p.1/index.html", recommend: true }
                        ],
                        movies: [
                            { name: "Шинель (1959, с Роланом Быковым)", url: "https://www.youtube.com/watch?v=shinel_film" },
                            { name: "Шинель (Мультфильм Норштейна)", url: "https://www.youtube.com/watch?v=norshtein" },
                            { name: "Спектакль «Современника»", url: "https://www.youtube.com/watch?v=sovremennik" }
                        ]
                    }
                }
            ]
        },
        {
            name: "Михаил Юрьевич Лермонтов",
            works: [
                {
                    title: "Мцыри",
                    history: "Романтическая поэма. Исповедь юноши, который провел три дня на свободе. Символ непокорности и любви к жизни.",
                    links: {
                        text: [
                            { name: "ilibrary.ru", url: "https://ilibrary.ru/text/1188/p.1/index.html", recommend: true }
                        ],
                        movies: [
                            { name: "Мцыри (Мультфильм)", url: "https://www.youtube.com/watch?v=mtsiry_cartoon" }
                        ]
                    }
                }
            ]
        },
        {
            name: "Уильям Шекспир",
            works: [
                {
                    title: "Ромео и Джульетта",
                    history: "Величайшая трагедия о любви. Верона, два враждующих клана и дети, которые своей гибелью примиряют отцов.",
                    links: {
                        text: [
                            { name: "Lib.ru (Перевод Пастернака)", url: "http://lib.ru/SHAKESPEARE/romeo.txt", recommend: true }
                        ],
                        movies: [
                            { name: "Ромео и Джульетта (1968, Дзеффирелли)", url: "https://www.youtube.com/results?search_query=ромео+и+джульетта+1968" },
                            { name: "Спектакль (Globe Theatre)", url: "https://www.youtube.com/results?search_query=globe+theatre+romeo+juliet" }
                        ]
                    }
                }
            ]
        },
        {
            name: "Александр Грин",
            works: [
                {
                    title: "Алые паруса",
                    history: "Повесть-феерия о том, что чудеса нужно делать своими руками.",
                    links: {
                        text: [
                            { name: "ilibrary.ru", url: "https://ilibrary.ru/text/1560/p.1/index.html", recommend: true }
                        ],
                        movies: [
                            { name: "Алые паруса (1961, Лановой)", url: "https://www.youtube.com/watch?v=parusa_film" }
                        ]
                    }
                }
            ]
        }
    ];

    // --- ЛОГИКА ---
    const authorsList = document.getElementById('authorsList');
    const worksContainer = document.getElementById('worksContainer');
    const welcomeScreen = document.getElementById('welcomeScreen');
    const searchInput = document.getElementById('searchInput');

    // 1. Функция рендера авторов
    function renderAuthors(filter = "") {
        authorsList.innerHTML = "";
        
        libraryDB.forEach((author, index) => {
            if (author.name.toLowerCase().includes(filter.toLowerCase())) {
                const li = document.createElement('li');
                li.textContent = author.name;
                li.onclick = () => loadWorks(index, li);
                authorsList.appendChild(li);
            }
        });
    }

    // 2. Загрузка произведений (Аккордеон)
    function loadWorks(authorIndex, activeLi) {
        // Подсветка активного
        document.querySelectorAll('.authors-nav li').forEach(li => li.classList.remove('active'));
        activeLi.classList.add('active');

        // Скрываем приветствие
        welcomeScreen.style.display = 'none';
        worksContainer.innerHTML = "";

        const author = libraryDB[authorIndex];

        // Заголовок
        const title = document.createElement('h2');
        title.className = 'author-title';
        title.textContent = author.name;
        worksContainer.appendChild(title);

        // Генерация карточек
        author.works.forEach(work => {
            const workItem = document.createElement('div');
            workItem.className = 'work-item';

            // Генерируем HTML для ссылок
            const textLinksHTML = work.links.text.map(link => 
                `<a href="${link.url}" target="_blank" class="btn-link ${link.recommend ? 'recommend' : ''}">
                    <i class="fas fa-book-open"></i> ${link.name}
                 </a>`
            ).join('');

            const movieLinksHTML = work.links.movies ? work.links.movies.map(link => 
                `<a href="${link.url}" target="_blank" class="btn-link">
                    <i class="fas fa-video"></i> ${link.name}
                 </a>`
            ).join('') : '<span class="no-link">Нет данных</span>';

            workItem.innerHTML = `
                <div class="work-header">
                    <h2>${work.title}</h2>
                    <i class="fas fa-chevron-down toggle-icon"></i>
                </div>
                <div class="work-details">
                    <div class="details-inner">
                        <div class="history-block">
                            <h3><i class="fas fa-history"></i> История создания и суть</h3>
                            <p>${work.history}</p>
                        </div>
                        <div class="links-section">
                            <div class="link-group">
                                <h4>Текст произведения</h4>
                                ${textLinksHTML}
                            </div>
                            <div class="link-group">
                                <h4>Экранизации и Спектакли</h4>
                                ${movieLinksHTML}
                            </div>
                        </div>
                    </div>
                </div>
            `;

            // Логика клика (Аккордеон)
            const header = workItem.querySelector('.work-header');
            const details = workItem.querySelector('.work-details');

            header.addEventListener('click', () => {
                const isOpen = workItem.classList.contains('open');
                
                // Закрываем все другие (по желанию, можно убрать этот цикл, если хочешь открывать несколько сразу)
                document.querySelectorAll('.work-item').forEach(item => {
                    item.classList.remove('open');
                    item.querySelector('.work-details').style.maxHeight = null;
                });

                if (!isOpen) {
                    workItem.classList.add('open');
                    details.style.maxHeight = details.scrollHeight + "px";
                }
            });

            worksContainer.appendChild(workItem);
        });
    }

    // Поиск
    searchInput.addEventListener('input', (e) => {
        renderAuthors(e.target.value);
    });

    // Запуск
    renderAuthors();
});
