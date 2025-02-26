document.addEventListener('DOMContentLoaded', function() {
    const totalTrainingDays = JSON.parse(localStorage.getItem('completedDays')) || [];
    const consecutiveDays = calculateConsecutiveDays(totalTrainingDays);
    let achievements = JSON.parse(localStorage.getItem('achievements')) || [];

    document.getElementById('total-training-days').textContent = totalTrainingDays.length;
    document.getElementById('consecutive-days').textContent = consecutiveDays;

    // Обновление достижений
    updateAchievement('first-training', 'first_training');
    updateAchievement('three-days', '3_days');
    updateAchievement('seven-days', '7_days');
    updateAchievement('fourteen-days', '14_days');
    updateAchievement('thirty-days', '30_days');
    updateAchievement('google-calendar', 'google_calendar');
    updateAchievement('shared-social', 'shared_social');

    // Добавляем достижение за добавление в Google Календарь
    checkGoogleCalendarAchievement();

    // Добавляем достижения за 3 дня подряд
    checkThreeConsecutiveDays();

    // Добавляем достижения за 7, 14 и 30 дней подряд
    checkSevenConsecutiveDays();
    checkFourteenConsecutiveDays();
    checkThirtyConsecutiveDays();

    // Добавляем достижение за "Поделиться в соцсетях"
    checkSharedSocialAchievement();

    function updateAchievement(id, key) {
        const card = document.getElementById(id);
        if (!card) return;

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

    // Проверка достижения "Добавление в Google Календарь"
    function checkGoogleCalendarAchievement() {
        const completedDays = JSON.parse(localStorage.getItem('completedDays')) || [];
        const googleCalendarAchieved = completedDays.length > 0; // Проверяем, был ли хотя бы один день добавлен

        if (googleCalendarAchieved && !achievements.includes('google_calendar')) {
            achievements.push('google_calendar');
            localStorage.setItem('achievements', JSON.stringify(achievements));

            // Обновляем достижение на экране
            updateAchievement('google-calendar', 'google_calendar');
        }

        // Проверка первой тренировки
        if (completedDays.length > 0 && !achievements.includes('first_training')) {
            achievements.push('first_training');
            localStorage.setItem('achievements', JSON.stringify(achievements));

            // Обновляем достижение на экране
            updateAchievement('first-training', 'first_training');
        }
    }

    // Проверка достижения за 3 дня подряд
    function checkThreeConsecutiveDays() {
        const completedDays = JSON.parse(localStorage.getItem('completedDays')) || [];
        if (completedDays.length >= 3) {
            // Проверяем, были ли выполнены тренировки 3 дня подряд
            const lastThreeDays = completedDays.slice(-3);
            const diff1 = (new Date(lastThreeDays[1]) - new Date(lastThreeDays[0])) / (1000 * 3600 * 24);
            const diff2 = (new Date(lastThreeDays[2]) - new Date(lastThreeDays[1])) / (1000 * 3600 * 24);

            if (diff1 === 1 && diff2 === 1 && !achievements.includes('3_days')) {
                achievements.push('3_days');
                localStorage.setItem('achievements', JSON.stringify(achievements));

                // Обновляем достижение на экране
                updateAchievement('three-days', '3_days');
            }
        }
    }

    // Проверка достижения за 7 дней подряд
    function checkSevenConsecutiveDays() {
        const completedDays = JSON.parse(localStorage.getItem('completedDays')) || [];
        if (completedDays.length >= 7) {
            // Проверяем, были ли выполнены тренировки 7 дней подряд
            const lastSevenDays = completedDays.slice(-7);
            const isConsecutive = lastSevenDays.every((day, index, arr) => {
                if (index === 0) return true;
                const prevDate = new Date(arr[index - 1]);
                const currentDate = new Date(day);
                const diff = (currentDate - prevDate) / (1000 * 3600 * 24);
                return diff === 1;
            });

            if (isConsecutive && !achievements.includes('7_days')) {
                achievements.push('7_days');
                localStorage.setItem('achievements', JSON.stringify(achievements));

                // Обновляем достижение на экране
                updateAchievement('seven-days', '7_days');
            }
        }
    }

    // Проверка достижения за 14 дней подряд
    function checkFourteenConsecutiveDays() {
        const completedDays = JSON.parse(localStorage.getItem('completedDays')) || [];
        if (completedDays.length >= 14) {
            // Проверяем, были ли выполнены тренировки 14 дней подряд
            const lastFourteenDays = completedDays.slice(-14);
            const isConsecutive = lastFourteenDays.every((day, index, arr) => {
                if (index === 0) return true;
                const prevDate = new Date(arr[index - 1]);
                const currentDate = new Date(day);
                const diff = (currentDate - prevDate) / (1000 * 3600 * 24);
                return diff === 1;
            });

            if (isConsecutive && !achievements.includes('14_days')) {
                achievements.push('14_days');
                localStorage.setItem('achievements', JSON.stringify(achievements));

                // Обновляем достижение на экране
                updateAchievement('fourteen-days', '14_days');
            }
        }
    }

    // Проверка достижения за 30 дней подряд
    function checkThirtyConsecutiveDays() {
        const completedDays = JSON.parse(localStorage.getItem('completedDays')) || [];
        if (completedDays.length >= 30) {
            // Проверяем, были ли выполнены тренировки 30 дней подряд
            const lastThirtyDays = completedDays.slice(-30);
            const isConsecutive = lastThirtyDays.every((day, index, arr) => {
                if (index === 0) return true;
                const prevDate = new Date(arr[index - 1]);
                const currentDate = new Date(day);
                const diff = (currentDate - prevDate) / (1000 * 3600 * 24);
                return diff === 1;
            });

            if (isConsecutive && !achievements.includes('30_days')) {
                achievements.push('30_days');
                localStorage.setItem('achievements', JSON.stringify(achievements));

                // Обновляем достижение на экране
                updateAchievement('thirty-days', '30_days');
            }
        }
    }

    // Проверка достижения за "Поделиться в соцсетях"
    function checkSharedSocialAchievement() {
        const sharedInSocial = JSON.parse(localStorage.getItem('sharedInSocial')) || false;
        if (sharedInSocial && !achievements.includes('shared_social')) {
            achievements.push('shared_social');
            localStorage.setItem('achievements', JSON.stringify(achievements));

            // Обновляем достижение на экране
            updateAchievement('shared-social', 'shared_social');
        }
    }

    function calculateConsecutiveDays(daysArray) {
        if (!daysArray.length) return 0;
        let consecutive = 1;
        let prevDate = new Date(daysArray[daysArray.length - 1]);
        for (let i = daysArray.length - 2; i >= 0; i--) {
            let currentDate = new Date(daysArray[i]);
            let diff = (prevDate - currentDate) / (1000 * 3600 * 24);
            if (diff === 1) {
                consecutive++;
                prevDate = currentDate;
            } else {
                break;
            }
        }
        return consecutive;
    }
});


document.addEventListener('DOMContentLoaded', function() {
    // Кнопка "Назад" - возвращает на главную страницу
    const backButton = document.getElementById('backButton');
    if (backButton) {
        backButton.addEventListener('click', function() {
            window.location.href = 'index.html'; // замените на путь к вашей главной странице
        });
    }

    // Кнопка "Проверить награды" - обновляет текущую страницу
    const checkRewardsButton = document.getElementById('checkRewardsButton');
    if (checkRewardsButton) {
        checkRewardsButton.addEventListener('click', function() {
            // Используем window.location.reload(), чтобы обновить страницу
            window.location.reload(true); // 'true' сбрасывает кэш и гарантирует перезагрузку страницы
        });
    }
});

// ИМЯ
document.addEventListener("DOMContentLoaded", function () {
    // Проверяем, есть ли имя в localStorage
    const storedName = localStorage.getItem("userName");

    // Если имя найдено, отображаем его в элементе с id 'user-name'
    if (storedName) {
        document.getElementById("user-name").textContent = storedName;
    }
});
