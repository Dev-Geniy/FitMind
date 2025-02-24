document.querySelectorAll('.accordion-header').forEach(item => {
    item.addEventListener('click', function () {
        let content = this.nextElementSibling;
        this.classList.toggle('active');

        if (content.style.height && content.style.height !== '0px') {
            content.style.height = '0';
            content.style.padding = "0 15px";
        } else {
            content.style.height = content.scrollHeight + "px"; // Плавно открывается на высоту контента
            content.style.padding = "15px";
        }
    });
});


// i
document.addEventListener("DOMContentLoaded", function() {
    const infoBtn = document.getElementById("info-btn");
    const modal = document.getElementById("info-modal");
    const closeBtn = modal.querySelector(".close");

    infoBtn.addEventListener("click", () => {
        modal.style.display = "flex";
    });

    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});

//Выбор пола
document.addEventListener("DOMContentLoaded", function () {
    // Проверяем, был ли ранее сделан выбор пола
    const savedGender = localStorage.getItem("userGender");
    
    if (savedGender) {
        // Если выбор есть, перенаправляем пользователя на нужную страницу
        window.location.href = savedGender === "female" ? "https://dev-geniy.github.io/FitMind/indexwapp.html" : "https://dev-geniy.github.io/FitMind/indexmapp.html";
    }

    const startButton = document.getElementById("start-button");
    const genderModal = document.getElementById("gender-modal");
    const closeModal = document.querySelector(".close");
    const femaleBtn = document.getElementById("female-btn");
    const maleBtn = document.getElementById("male-btn");

    // Открытие модального окна при нажатии "Начать"
    startButton.addEventListener("click", function () {
        genderModal.style.display = "flex";
    });

    // Закрытие модального окна
    closeModal.addEventListener("click", function () {
        genderModal.style.display = "none";
    });

    // Выбор пола и сохранение в localStorage
    femaleBtn.addEventListener("click", function () {
        localStorage.setItem("userGender", "female");
        window.location.href = "https://dev-geniy.github.io/FitMind/indexwapp.html";
    });

    maleBtn.addEventListener("click", function () {
        localStorage.setItem("userGender", "male");
        window.location.href = "https://dev-geniy.github.io/FitMind/indexmapp.html";
    });

    // Закрытие окна при клике вне его
    window.addEventListener("click", function (event) {
        if (event.target === genderModal) {
            genderModal.style.display = "none";
        }
    });
});
