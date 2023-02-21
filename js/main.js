"use strict"

document.addEventListener('DOMContentLoaded', () => {
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
    $('.close-popup').click(() => { // by clicking on the cross
        $('.js-overlay').fadeOut();
    });
    $('.close-btn').click(() => { // by clicking on the cross
        $('.js-overlay').fadeOut();
    });

    $(document).mouseup((e) => { // by clicking outside the popup
        const popup = $('.popup');
        if (e.target != popup[0] && popup.has(e.target).length === 0) {
            $('.js-overlay').fadeOut();
        }
    });
})

