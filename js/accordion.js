export function accordion() {
    const openEventsButton = document.querySelector('.other-events'),
        eventSection = document.querySelector('.accordion-section'),
        arrow = document.getElementById('arrow-events'),
        buttons = findButtons(),
        contents = findContent();

    // Activate section "all events"
    function activateEventSection() {
        openEventsButton.addEventListener('click', () => {
            eventSection.classList.toggle('active');
            openEventsButton.classList.toggle('activeEvents');
            animateOpenBtn();
        })
    }
    activateEventSection()

    // Arrow rotation animation
    function animateOpenBtn() {
        if (openEventsButton.classList.contains('activeEvents')) {
            arrow.style.transform = "rotate(270deg)";
        } else {
            arrow.style.transform = "rotate(90deg)";
        }
    }

    // Appearance of the content section in the accordion
    function activateAccContent() {
        buttons.forEach(e => {
            e.addEventListener('click', () => {
                removeShow();
                removeActiveBlock();

                e.classList.add('activeBlock');
                buttonsBackgroundImage()
                e.nextElementSibling.classList.add('show');
            })
        })
    }
    activateAccContent();


    function removeActiveBlock() {
        buttons.forEach(e => e.classList.remove('activeBlock'))
    }

    function removeShow() {
        contents.forEach(e => e.classList.remove('show'));
    }

    // find accordion buttons
    function findButtons() {
        return document.querySelectorAll('.accordion-btn');
    }

    // find accordion content-blocks
    function findContent() {
        return document.querySelectorAll('.accordion-content');
    }

    // Adding a design for the accordion sections
    function contentsBackground() {
        for (let i = 0; i < contents.length; i++) {
            contents[i].style.backgroundImage = `url('./assets/img/accordion/accordion${i + 1}.jpg')`;
            contents[i].style.backgroundSize = 'cover';
        }
    }
    contentsBackground();

    // Adding a layout for the accordion buttons
    function buttonsBackgroundImage() {
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].classList.contains('activeBlock')) {
                buttons[i].style.background = `url('./assets/img/accordion/background.png')`;
            } else {
                buttons[i].style.background = `linear-gradient(180deg, rgba(22, 44, 78, 0) 0%, #162C4E 100%), url('./assets/img/accordion/accordion${i + 1}.jpg') 60%`
            }
        }
    }
    buttonsBackgroundImage();

    // Adaptive accordion content
    function editAccordionText() {
        const btnTitles = document.querySelectorAll('.btn-title');
        if (window.innerWidth <= 768) {
            btnTitles[0].innerText = 'Meeting';
            btnTitles[1].innerText = 'Meeting';
        } else {
            btnTitles[0].innerText = 'Hawaiian party';
            btnTitles[1].innerText = 'Мafia party';
        }
    }
    setInterval(editAccordionText, 1000)
}

