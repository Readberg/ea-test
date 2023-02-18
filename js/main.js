"use strict"

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    form.addEventListener('submit', formSend);

    // Send form
    async function formSend(e) {
        e.preventDefault();

        let error = formValidate(form);

        let formData = new FormData(form);

        if (error === 0) {
            let response = await fetch('vendor/index.php', {
                method: 'POST',
                body: formData
            })
            if (response.ok) {
                $('.js-overlay').fadeIn();
                $(this).find('input').val('');
                $('#form').trigger('reset'); // Reset form
            } else {
                $('.js-overlay-error').fadeIn();
            }
        }
    }

    // Validate form
    function formValidate(form) {
        let error = 0;
        let formReq = document.querySelectorAll('.req');

        for (let i = 0; i < formReq.length; i++) {
            const input = formReq[i];
            formRemoveError(input);

            if (input.classList.contains('email')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            } else {
                if (input.value === '') {
                    formAddError(input);
                    error++;
                }
            }
        }
        return error;
    }

    // Add error
    function formAddError(input) {
        input.parentElement.classList.add('error');
        input.classList.add('error')
    }

    // Remove error
    function formRemoveError(input) {
        input.parentElement.classList.remove('error');
        input.classList.remove('error')
    }

    // Email validation
    function emailTest(input) {
        return !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(input.value);
    }

    // Close Popup
    $('.close-popup').click(function () { // by clicking on the cross
        $('.js-overlay').fadeOut();
    });
    $('.close-btn').click(function () { // by clicking on the cross
        $('.js-overlay').fadeOut();
    });

    $(document).mouseup(function (e) { // by clicking outside the popup
        const popup = $('.popup');
        if (e.target != popup[0] && popup.has(e.target).length === 0) {
            $('.js-overlay').fadeOut();
        }
    });


    // Timer

    const days = document.querySelector('.days');
    const hours = document.querySelector('.hours');
    const minutes = document.querySelector('.minutes');
    const seconds = document.querySelector('.seconds');

    const finalTime = new Date(`May 31, 2023 00:00:00`);
    function updateCounter() {
        const currentTime = new Date();

        const diff = finalTime - currentTime;

        // Перевод в дни
        const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);

        // Перевод в часы
        const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;

        // Перевод в минуты
        const minutesLeft = Math.floor(diff / 1000 / 60) % 60;

        // Перевод в секунды
        const secondsLeft = Math.floor(diff / 1000) % 60;

        // Добавление данных на страницу
        days.innerText = daysLeft < 10 ? '0' + daysLeft : daysLeft;
        hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
        minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
        seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
    }
    
    updateCounter();
    // Запуск функции каждую секунду
    setInterval(updateCounter, 1000)
})