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
                image: ""
            },
            {
                name: "Выпады с гантелями",
                description: "Шагайте вперед с гантелями в руках, опускаясь до угла 90 градусов в колене, удерживайте спину прямой.",
                reps: "12 повторений на каждую ногу",
                sets: "4 подхода",
                image: ""
            },
            {
                name: "Мостик на одном ноге",
                description: "Лежа на спине, одна нога на коврике, другую поднять вверх. Поднимайте бедра, используя одну ногу.",
                reps: "12 повторений на каждую ногу",
                sets: "4 подхода",
                image: ""
            },
            {
                name: "Косые скручивания",
                description: "Лежа на спине, согните колени, поднимайте плечи к коленям, скручивая корпус в сторону.",
                reps: "20 повторений",
                sets: "3 подхода",
                image: ""
            }
        ]
    },
    2: {
        title: "Спина + Трицепс",
        exercises: [
            {
                name: "Отжимания с колен",
                description: "Опуститесь до угла 90 градусов в локтях, затем вернитесь в исходное положение, опираясь на колени.",
                reps: "15-20 повторений",
                sets: "4 подхода",
                image: ""
            },
            {
                name: "Тяга гантелей к поясу сидя",
                description: "Сидя на коврике, наклонитесь немного вперед, держа гантели, тяните их к поясу, держа спину прямой.",
                reps: "12 повторений",
                sets: "4 подхода",
                image: ""
            },
            {
                name: "Французский жим с одной гантелей",
                description: "Сидя на табуретке, держите одну гантель двумя руками, опускайте её за голову, сгибая локти.",
                reps: "12 повторений",
                sets: "4 подхода",
                image: ""
            },
            {
                name: "Планка с отжиманиями на коленях",
                description: "Удерживайте планку с колен, затем делайте отжимания, сгибая локти до угла 90 градусов.",
                reps: "10 отжиманий",
                sets: "3 подхода",
                image: ""
            }
        ]
    },
    3: {
        title: "Грудь + Бицепс + Пресс",
        exercises: [
            {
                name: "Жим гантелей лёжа",
                description: "Лежа на спине, держите гантели в руках, поднимите их вверх, затем медленно опустите.",
                reps: "12 повторений",
                sets: "4 подхода",
                image: ""
            },
            {
                name: "Сгибание рук с гантелями сидя",
                description: "Сидя на табуретке, сгибайте локти, поднимая гантели, затем медленно опускайте.",
                reps: "15 повторений",
                sets: "4 подхода",
                image: ""
            },
            {
                name: "Скручивания на коврике",
                description: "Лежа на спине, поднимайте верхнюю часть туловища к коленям, скручивая корпус.",
                reps: "20 повторений",
                sets: "4 подхода",
                image: ""
            },
            {
                name: "Подъемы корпуса с наклоном",
                description: "Лежа на спине, поднимайте верхнюю часть туловища, фокусируясь на работе пресса.",
                reps: "15 повторений",
                sets: "4 подхода",
                image: ""
            }
        ]
    },
    4: {
        title: "Плечи + Кардио",
        exercises: [
            {
                name: "Махи гантелями в стороны",
                description: "Поднимите гантели в стороны до уровня плеч, удерживайте спину прямо.",
                reps: "15 повторений",
                sets: "4 подхода",
                image: ""
            },
            {
                name: "Жим гантелей стоя",
                description: "Поднимите гантели вверх от груди, затем медленно опустите их обратно.",
                reps: "12 повторений",
                sets: "4 подхода",
                image: ""
            },
            {
                name: "Бег на месте с высоким поднятием колен",
                description: "Бегайте на месте, поднимая колени высоко к груди.",
                reps: "1 минута",
                sets: "3 подхода",
                image: ""
            },
            {
                name: "Берпи с коленями на пол",
                description: "Присед, прыжок в планку с колен, затем подпрыгните, не отрывая колен от пола.",
                reps: "10 повторений",
                sets: "3 подхода",
                image: ""
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
                image: ""
            },
            {
                name: "Подъемы ног с гантелей",
                description: "Лежа на спине, держите гантель между ног и поднимайте их вверх.",
                reps: "15 повторений",
                sets: "4 подхода",
                image: ""
            },
            {
                name: "Планка с вращением на бок",
                description: "Удерживайте планку, затем поворачивайтесь на бок, работая корпусом.",
                reps: "30 секунд на каждую сторону",
                sets: "3 подхода",
                image: ""
            },
            {
                name: "Скручивания с утяжелением",
                description: "Лежа на спине, держите утяжеление в руках и поднимайте верхнюю часть туловища к коленям.",
                reps: "20 повторений",
                sets: "3 подхода",
                image: ""
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
                image: ""
            },
            {
                name: "Растяжка спины",
                description: "Сидя на полу, наклоняйтесь вперед, растягивая спину.",
                reps: "20 секунд",
                sets: "3 подхода",
                image: ""
            },
            {
                name: "Растяжка ног с утяжелением",
                description: "Лежа на спине, подтяните одну ногу к груди с гантелей.",
                reps: "20 секунд на каждую ногу",
                sets: "3 подхода",
                image: ""
            },
            {
                name: "Растяжка рук",
                description: "Поднимите руку и потяните за локоть другую.",
                reps: "20 секунд на каждую руку",
                sets: "3 подхода",
                image: ""
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
