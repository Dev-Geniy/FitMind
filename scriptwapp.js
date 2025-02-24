document.addEventListener("DOMContentLoaded", () => {
    const today = new Date();
    document.getElementById('current-date').textContent = today.toLocaleDateString('ru-RU');

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
                description: "Шагайте вперед с гантелями в руках, опускаясь до угла 90 градусов в колене.",
                reps: "12 повторений на каждую ногу",
                sets: "4 подхода",
                image: ""
            },
            {
                name: "Подъемы ног с гантелей между стоп",
                description: "Лягте на спину, положите гантель между стоп и поднимайте ноги, не сгибая колени.",
                reps: "15 повторений",
                sets: "3 подхода",
                image: ""
            },
            {
                name: "Скручивания с гантелей",
                description: "Лежа на спине, держите гантель в руках, поднимайте верхнюю часть туловища к коленям.",
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
                name: "Отжимания",
                description: "Опуститесь до угла 90 градусов в локтях, затем вернитесь в исходное положение.",
                reps: "15-20 повторений",
                sets: "4 подхода",
                image: ""
            },
            {
                name: "Тяга гантелей к поясу",
                description: "Сгибая корпус, тяните гантели к бедрам, удерживая спину прямо.",
                reps: "12 повторений",
                sets: "4 подхода",
                image: ""
            },
            {
                name: "Французский жим с гантелей",
                description: "Поднимите гантели вверх, затем медленно опустите их за голову, сгибая локти.",
                reps: "12 повторений",
                sets: "4 подхода",
                image: ""
            },
            {
                name: "Планка с отжиманиями",
                description: "Удерживайте планку, затем делайте отжимания.",
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
                name: "Жим гантелей",
                description: "Лежа на спине или скамье, жмите гантели вверх.",
                reps: "12 повторений",
                sets: "4 подхода",
                image: ""
            },
            {
                name: "Сгибание рук с гантелями",
                description: "Сгибайте локти, поднимая гантели, затем медленно опускайте.",
                reps: "15 повторений",
                sets: "4 подхода",
                image: ""
            },
            {
                name: "Скручивания",
                description: "Лежа на спине, поднимайте верхнюю часть туловища к коленям.",
                reps: "20 повторений",
                sets: "4 подхода",
                image: ""
            },
            {
                name: "Подъем корпуса",
                description: "Лежа на спине, поднимите верхнюю часть туловища, не используя руки.",
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
                description: "Поднимите гантели в стороны до уровня плеч.",
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
                description: "Бегайте на месте с высокими коленями.",
                reps: "1 минута",
                sets: "3 подхода",
                image: ""
            },
            {
                name: "Берпи",
                description: "Присед, прыжок в планку, затем подпрыгните.",
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
                name: "Планка с вращением",
                description: "Удерживайте планку, затем поочередно поворачивайтесь на бок.",
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


    function updateProgressBar(completed, total) {
        const progress = (completed / total) * 100;
        document.getElementById('progress-bar').style.width = `${progress}%`;
        if (completed === total) {
            document.getElementById('completion-message').classList.remove('hidden');
            saveWorkoutCompletion();
        }
    }

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

// ИМЯ =================
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
