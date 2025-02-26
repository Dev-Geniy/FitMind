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
