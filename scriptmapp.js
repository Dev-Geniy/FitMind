document.addEventListener("DOMContentLoaded", () => {
    const today = new Date();
    const todayStr = today.toDateString();
    
    document.getElementById('current-date').textContent = today.toLocaleDateString('ru-RU');
 
    // Проверяем, был ли уже сброс выполненных упражнений для нового дня
    if (localStorage.getItem('lastWorkoutDate') !== todayStr) {
        localStorage.setItem('lastWorkoutDate', todayStr);
        localStorage.removeItem('completedExercises'); // Очищаем список выполненных упражнений
    }

  const workouts = {
    0: { title: "Выходной 🌿", exercises: [] },
    1: {
        title: "Ноги + Пресс",
        exercises: [
            {
                name: "Приседания с гантелями",
                description: "Держите гантели в руках, ноги на ширине плеч. Опускайтесь вниз, сгибая колени, спина прямая.",
                reps: "12-15 повторений",
                sets: "4 подхода",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2Ek5Vy9dYXYmPrF_VLZaB9RO41WlDosy3ZQ&s"
            },
            {
                name: "Выпады с гантелями",
                description: "Шагайте вперед с гантелями в руках, опускаясь до угла 90 градусов в колене.",
                reps: "12 повторений на каждую ногу",
                sets: "4 подхода",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTg3bvNcNuzVgUpXflRz47jMf0HHe6gOX1lvE8Wf-bkZkMIoqQMVjSF7089W6Ply-eyRU&usqp=CAU"
            },
            {
                name: "Подъемы ног с гантелей между стоп",
                description: "Лягте на спину, положите гантель между стоп и поднимайте ноги, не сгибая колени.",
                reps: "15 повторений",
                sets: "3 подхода",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3JxmKewSQJuWXhDJ4unj_gXnF_lJsmWvriA&s"
            },
            {
                name: "Скручивания с гантелей",
                description: "Лежа на спине, держите гантель в руках, поднимайте верхнюю часть туловища к коленям.",
                reps: "20 повторений",
                sets: "3 подхода",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjPTCPpccAEg2ixakIUcv8xtcvyR9FQk3dgQ&s"
            }
        ]
    },
    2: {
        title: "Спина + Трицепс",
        exercises: [
            {
                name: "Отжимания",
                description: "Опуститесь до угла 90 градусов в локтях, затем вернитесь в исходное положение.",
                reps: "15-20 повторений",
                sets: "4 подхода",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjFsQe-5oXTI7soLBKrMv_qyHsIg2as6_vng&s"
            },
            {
                name: "Тяга гантелей к поясу",
                description: "Сгибая корпус, тяните гантели к бедрам, удерживая спину прямо.",
                reps: "12 повторений",
                sets: "4 подхода",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwYU1K3X1uXAuitM2lKr8LJckaxzxH4kfeIw&s"
            },
            {
                name: "Французский жим с гантелей",
                description: "Поднимите гантели вверх, затем медленно опустите их за голову, сгибая локти.",
                reps: "12 повторений",
                sets: "4 подхода",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAYKS2Q73r3VjFftngXIJF_qd6p6jQ_tF0SQ&s"
            },
            {
                name: "Планка с отжиманиями",
                description: "Удерживайте планку, затем делайте отжимания.",
                reps: "10 отжиманий",
                sets: "3 подхода",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXkA6IzhYjTnOIiulT3rEn0JMnWU14wmjs-A&s"
            }
        ]
    },
    3: {
        title: "Грудь + Бицепс + Пресс",
        exercises: [
            {
                name: "Жим гантелей",
                description: "Лежа на спине или скамье, жмите гантели вверх.",
                reps: "12 повторений",
                sets: "4 подхода",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvf1LAEYUbYdqO_SwyGmJ6K85gCtjYm9mISg&s"
            },
            {
                name: "Сгибание рук с гантелями",
                description: "Сгибайте локти, поднимая гантели, затем медленно опускайте.",
                reps: "15 повторений",
                sets: "4 подхода",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_JeUpr8LNcac_YOeidkqrSkmJpng_vxqyLjU7xG2IiqDwA9Vt-ji4J_EQOez7Aa6sk3Y&usqp=CAU"
            },
            {
                name: "Скручивания",
                description: "Лежа на спине, поднимайте верхнюю часть туловища к коленям.",
                reps: "20 повторений",
                sets: "4 подхода",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUf7ImGyTLu0yL_khpyQTMyeJ-gAxTLlEz8jwqev3cf8aQLcPgU8NK4mDLVm0TGSmI0pE&usqp=CAU"
            },
            {
                name: "Подъем корпуса",
                description: "Лежа на спине, поднимите верхнюю часть туловища, не используя руки.",
                reps: "15 повторений",
                sets: "4 подхода",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzo96DkR7rHOu1qDcvkHbltQXQoml0gufLTnkaxGnZjTVU1WSbJZTEBayclvypWuKmD7A&usqp=CAU"
            }
        ]
    },
    4: {
        title: "Плечи + Кардио",
        exercises: [
            {
                name: "Махи гантелями в стороны",
                description: "Поднимите гантели в стороны до уровня плеч.",
                reps: "15 повторений",
                sets: "4 подхода",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoMtHDU6UXXjXHcEKnEwk2YaE3JsV0QcHOxg&s"
            },
            {
                name: "Жим гантелей стоя «Жим арнольда»",
                description: "Поднимите гантели вверх от груди, затем медленно опустите их обратно.",
                reps: "12 повторений",
                sets: "4 подхода",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmzRun4xAPMCtoYxNasTS-2F2jX42QNFsuNw&s"
            },
            {
                name: "Бег на месте с высоким поднятием колен",
                description: "Бегайте на месте с высокими коленями.",
                reps: "1 минута",
                sets: "3 подхода",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTumbn0VKN0HnGENZF4Li-1yfPKRncl7PJUGg&s"
            },
            {
                name: "Берпи",
                description: "Присед, прыжок в планку, затем подпрыгните.",
                reps: "10 повторений",
                sets: "3 подхода",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH8z4qt9KclL3NKEWaYEuWn4u3hrvG7Oapeaio0M0zWE89IC61Ehi_xkevombuItT6Uzk&usqp=CAU"
            }
        ]
    },
    5: {
        title: "Ягодицы + Пресс",
        exercises: [
            {
                name: "Мостик с гантелей",
                description: "Лежа на спине, поднимите бедра вверх, удерживая гантель на животе.",
                reps: "15 повторений",
                sets: "4 подхода",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLusiyiuo3T1UqeZkbXvl6qdsbonCdA01TRyqbeDPRac8pJcvLmmSzUljOA0p4C3OFU40&usqp=CAU"
            },
            {
                name: "Подъемы ног с гантелей",
                description: "Лежа на спине, держите гантель между ног и поднимайте их вверх.",
                reps: "15 повторений",
                sets: "4 подхода",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3JxmKewSQJuWXhDJ4unj_gXnF_lJsmWvriA&s"
            },
            {
                name: "Планка с вращением",
                description: "Удерживайте планку, затем поочередно поворачивайтесь на бок.",
                reps: "30 секунд на каждую сторону",
                sets: "3 подхода",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnJRSE6Z0pn65pzUil42XZBV3g04E5NGxTpw&s"
            },
            {
                name: "Скручивания с утяжелением",
                description: "Лежа на спине, держите утяжеление в руках и поднимайте верхнюю часть туловища к коленям.",
                reps: "20 повторений",
                sets: "3 подхода",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT93N8NAH6OI1hjXfIHwS_0O0Lon_O-e64JQB7gMJaEp98W4WDIyVFQrZ_g8RklLw0k-e8&usqp=CAU"
            }
        ]
    },
    6: {
        title: "Растяжка",
        exercises: [
            {
                name: "Наклоны к ногам",
                description: "Наклоняйтесь к ногам, пытаясь достать руками до пальцев.",
                reps: "20 секунд",
                sets: "3 подхода",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThMAv5fy0HCoU5JttwCueK93527pjXFLpkxuIP0smn5nc-oyrShjMNyJLmBlAjGoBrnT4&usqp=CAU"
            },
            {
                name: "Растяжка спины",
                description: "Сидя на полу, наклоняйтесь вперед, растягивая спину.",
                reps: "20 секунд",
                sets: "3 подхода",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSo6g494Hd7OrpaBtVsOsf4nhCiFlxlzhEIuQ&s"
            },
            {
                name: "Растяжка ног",
                description: "Лежа на спине, подтяните одну ногу.",
                reps: "20 секунд на каждую ногу",
                sets: "3 подхода",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh3CFVy3ty9O0eQ-DCl48fKAsiYOyPBRcQnw&s"
            },
            {
                name: "Растяжка рук",
                description: "Поднимите руку и потяните за локоть другую.",
                reps: "20 секунд на каждую руку",
                sets: "3 подхода",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv0JBlXQYS_aQF9lBFNsRS8BB15n28EdIfKA&s"
            }
        ]
    }
};

    const todayKey = today.getDay();
    const todayWorkout = workouts[todayKey];

    document.getElementById('workout-title').textContent = todayWorkout.title;

    // Скрыть прогресс-бар на главной странице
    document.getElementById('progress-container').style.display = 'none';
    document.getElementById('workout-screen').style.display = 'none';

    document.getElementById('start-btn').addEventListener('click', () => {
        document.getElementById('main-screen').style.display = 'none';
        document.getElementById('workout-screen').style.display = 'block';
        document.getElementById('progress-container').style.display = 'block'; // Показать прогресс-бар на экране с тренировкой
        loadWorkout(todayWorkout);
    });

    document.getElementById('back-btn').addEventListener('click', () => {
        document.getElementById('workout-screen').style.display = 'none';
        document.getElementById('main-screen').style.display = 'block';
        document.getElementById('progress-container').style.display = 'none'; // Скрыть прогресс-бар при возврате на главную страницу
    });

    document.getElementById('reset-btn').addEventListener('click', () => {
        localStorage.clear();
        updateCalendar();
    });

    function loadWorkout(workout) {
        const container = document.querySelector('.exercises');
        container.innerHTML = "";

        if (workout.exercises.length === 0) {
            container.innerHTML = "<p>Сегодня отдых! 😊</p>";
            return;
        }

        let completedExercises = 0;
        workout.exercises.forEach((exercise, index) => {
            const card = document.createElement('div');
            card.classList.add('exercise-card');

            // Добавляем изображение, название, описание, повторения и подходы
            card.innerHTML = `
                <img src="${exercise.image}" alt="${exercise.name}" class="exercise-image" />
                <h3>${exercise.name}</h3>
                <p>${exercise.description}</p>
                <p><strong>Повторения:</strong> ${exercise.reps}</p>
                <p><strong>Подходы:</strong> ${exercise.sets}</p>
                <button class="complete-btn" data-index="${index}">Выполнено</button>
            `;
            container.appendChild(card);

            // Проверяем, было ли упражнение выполнено сегодня
            const completedExercisesToday = JSON.parse(localStorage.getItem('completedExercises')) || [];
            if (completedExercisesToday.includes(index)) {
                card.classList.add('completed');
                card.querySelector('.complete-btn').disabled = true;
            }

            card.querySelector('.complete-btn').addEventListener('click', () => {
                if (!card.classList.contains('completed')) {
                    card.classList.add('completed');
                    completedExercises++;
                    updateProgressBar(completedExercises, workout.exercises.length);

                    const completedExercisesToday = JSON.parse(localStorage.getItem('completedExercises')) || [];
                    completedExercisesToday.push(index);
                    localStorage.setItem('completedExercises', JSON.stringify(completedExercisesToday));

                    card.querySelector('.complete-btn').disabled = true; // Делаем кнопку недоступной
                }
            });
        });
    }

    // Функция обновления прогресс-бара
    function updateProgressBar(completed, total) {
        const progress = Math.round((completed / total) * 100);
        const progressBar = document.getElementById('progress-bar');
        const progressText = document.getElementById('progress-text');

        progressBar.style.width = `${progress}%`;
        progressText.textContent = `${progress}%`; // Обновляем текст внутри прогресс-бара

        if (completed === total) {
            document.getElementById('completion-message').classList.remove('hidden');
            saveWorkoutCompletion();
        }

        // Сохранение прогресса в localStorage
        localStorage.setItem('workoutProgress', JSON.stringify({ completed, total }));
    }

    // Функция для восстановления прогресса из localStorage
    function loadProgress() {
        const savedProgress = localStorage.getItem('workoutProgress');
        
        if (savedProgress) {
            const { completed, total } = JSON.parse(savedProgress);
            updateProgressBar(completed, total);
        }
    }

    // Сброс прогресса при нажатии на кнопку
    document.getElementById('reset-btn').addEventListener('click', function() {
        const progressBar = document.getElementById('progress-bar');
        const progressText = document.getElementById('progress-text');
        const completionMessage = document.getElementById('completion-message');

        // Сброс значений прогресса
        progressBar.style.width = '0%';
        progressText.textContent = '0%';
        
        // Скрытие сообщения о завершении
        completionMessage.classList.add('hidden');
        
        // Очистка сохранённого состояния
        localStorage.removeItem('workoutProgress');
    });

    // Функция для сброса состояния тренировки (если нужно)
    function resetWorkoutState() {
        // Очистить сохранённое состояние, например, сбросить счётчик выполненных шагов
        // Пример:
        // localStorage.removeItem('workoutState');
    }

    // Вызов функции для загрузки прогресса при старте страницы
    loadProgress();

    function saveWorkoutCompletion() {
        const completedDays = JSON.parse(localStorage.getItem('completedDays')) || [];
        const todayStr = today.toDateString();
        if (!completedDays.includes(todayStr)) {
            completedDays.push(todayStr);
            localStorage.setItem('completedDays', JSON.stringify(completedDays));
        }
        updateCalendar();
        updateTotalWorkouts();
    }

    function updateCalendar() {
        const calendar = document.getElementById('calendar');
        calendar.innerHTML = "";
        const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
        const completedDays = JSON.parse(localStorage.getItem('completedDays')) || [];

        for (let i = 1; i <= daysInMonth; i++) {
            const day = document.createElement('div');
            day.classList.add('day');
            day.textContent = i;
            if (completedDays.includes(new Date(today.getFullYear(), today.getMonth(), i).toDateString())) {
                day.classList.add('completed');
            }
            calendar.appendChild(day);
        }
    }

    function updateTotalWorkouts() {
        const completedDays = JSON.parse(localStorage.getItem('completedDays')) || [];
        document.getElementById('total-completed').textContent = completedDays.length;
    }

    updateCalendar();
    updateTotalWorkouts();
});

// ИМЯ
document.addEventListener("DOMContentLoaded", function () {
    const namePopup = document.getElementById("name-popup");
    const nameInput = document.getElementById("name-input");
    const saveNameBtn = document.getElementById("save-name-btn");
    const userNameSpan = document.getElementById("user-name");
    const greeting = document.getElementById("greeting");

    if (!namePopup) {
        console.error("Элемент #name-popup не найден в HTML!");
        return;
    }

    // Проверка, есть ли имя в LocalStorage
    const storedName = localStorage.getItem("userName");

    if (storedName) {
        userNameSpan.textContent = storedName;
        greeting.style.display = "block";
        namePopup.style.display = "none";
    } else {
        namePopup.style.display = "flex";
    }

    // Сохранение имени при нажатии
    saveNameBtn.addEventListener("click", function () {
        const name = nameInput.value.trim();
        if (name) {
            localStorage.setItem("userName", name);
            userNameSpan.textContent = name;
            greeting.style.display = "block";
            namePopup.style.display = "none";
        }
    });
}); 

// Модальное окно для рекомендаций
var modal = document.getElementById("recommendationsModal");
var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.getElementById("closeModalBtn");

// Открытие модального окна
openModalBtn.onclick = function() {
    modal.style.display = "flex"; // Модальное окно отображается как flex
}

// Закрытие модального окна
closeModalBtn.onclick = function() {
    modal.style.display = "none"; // Модальное окно скрывается
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// КАЛЕНДАРЬ ГУГЛ
document.addEventListener('DOMContentLoaded', function () {
    const today = new Date();

    // Функция для обновления календаря
    function updateCalendar() {
        const calendar = document.getElementById('calendar');
        calendar.innerHTML = "";
        const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
        const completedDays = JSON.parse(localStorage.getItem('completedDays')) || [];

        for (let i = 1; i <= daysInMonth; i++) {
            const day = document.createElement('div');
            day.classList.add('day');
            day.textContent = i;

            // Если день завершён (есть в localStorage), добавляем класс 'completed'
            if (completedDays.includes(new Date(today.getFullYear(), today.getMonth(), i).toDateString())) {
                day.classList.add('completed');
            }

            // Добавляем обработчик клика на каждый день
            day.addEventListener('click', function () {
                const day = this.textContent;
                const month = today.getMonth() + 1; // Месяц (в JS месяцы с 0)
                const year = today.getFullYear();

                // Формируем ссылку для добавления события в Google Календарь
                const eventTitle = 'Тренировка';  // Заголовок события
                const eventDescription = 'Завершение тренировки';  // Описание события
                const eventLocation = 'Онлайн';  // Местоположение (можно изменить)
                const eventStartTime = new Date(year, month - 1, day, 10, 0);  // Начало события (10:00)
                const eventEndTime = new Date(year, month - 1, day, 11, 0);  // Конец события (11:00)

                // Преобразуем время в формат, который нужен для Google Календаря
                const startTime = eventStartTime.toISOString().replace(/-|:|\.\d+/g, '');
                const endTime = eventEndTime.toISOString().replace(/-|:|\.\d+/g, '');

                const googleCalendarUrl = `https://www.google.com/calendar/render?action=TEMPLATE&text=${eventTitle}&dates=${startTime}/${endTime}&details=${eventDescription}&location=${eventLocation}&sf=true&output=xml`;

                // Открываем Google Календарь в новом окне с предзаполненными данными
                window.open(googleCalendarUrl, '_blank');

                // Сохраняем день как завершённый в localStorage
                const completedDays = JSON.parse(localStorage.getItem('completedDays')) || [];
                completedDays.push(new Date(today.getFullYear(), today.getMonth(), day).toDateString());
                localStorage.setItem('completedDays', JSON.stringify(completedDays));

                // Обновляем календарь
                updateCalendar();
            });

            // Добавляем день в календарь
            calendar.appendChild(day);
        }
    } 
 
    // Инициализация календаря
    updateCalendar();
});

// Д О С Т И Ж Е Н И Я
document.getElementById('rewards-btn').addEventListener('click', function() {
    window.location.href = 'statm.html'; // Переход на страницу наград
});

    document.addEventListener('DOMContentLoaded', function() {
        // Получаем достижения из localStorage
        let achievements = JSON.parse(localStorage.getItem('achievements')) || [];

        // Функция для разблокировки достижений
        function unlockAchievement(key) {
            // Проверяем, есть ли уже это достижение
            if (!achievements.includes(key)) {
                achievements.push(key);
                // Сохраняем обновленный список достижений
                localStorage.setItem('achievements', JSON.stringify(achievements));
                // Обновляем достижения на странице наград
                updateAchievementsOnAwardsPage();
            }
        }

        // Обработчик клика на календарь
        const calendarElement = document.getElementById('calendar');
        if (calendarElement) {
            calendarElement.addEventListener('click', function() {
                unlockAchievement('google_calendar');
            });
        }

        // Обработчики кликов по кнопкам социальных сетей
        const socialButtons = document.querySelectorAll('.social-icon');
        socialButtons.forEach(function(button) {
            button.addEventListener('click', function() {
                unlockAchievement('shared_social');
            });
        });
    });

    // Функция для обновления достижений на странице наград
    function updateAchievementsOnAwardsPage() {
        const achievements = JSON.parse(localStorage.getItem('achievements')) || [];
        achievements.forEach(function(key) {
            updateAchievement(key);
        });
    }

    // Функция для обновления блока достижения
    function updateAchievement(key) {
        const card = document.getElementById(key);
        if (card) {
            const button = card.querySelector('.complete-btn');
            if (!achievements.includes(key)) {
                card.classList.add('locked');
                if (button) {
                    button.textContent = 'НЕ ПОЛУЧЕНО';
                    button.classList.add('locked');
                }
            } else {
                card.classList.remove('locked');
                card.classList.add('completed');
                if (button) {
                    button.textContent = 'ПОЛУЧЕНО';
                    button.classList.remove('locked');
                }
            }
        }
    }
