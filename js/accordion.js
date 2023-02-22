const openEventsButton = document.querySelector('.other-events'),
      eventSection = document.querySelector('.accordion-section');

// Activate section "all events"
function activateEventSection() {
    openEventsButton.addEventListener('click', () => {
        eventSection.classList.toggle('active');
        openEventsButton.classList.toggle('activeEvents');
        animateOpenBtn();
    })
}
activateEventSection()

const arrow = document.getElementById('arrow-events');

function animateOpenBtn() {
    if (openEventsButton.classList.contains('activeEvents')) {
        arrow.style.transform = "rotate(270deg)";
    } else {
        arrow.style.transform = "rotate(90deg)";
    }
}

// Accordion

const buttons = findButtons();
const contents = findContent();

buttons.forEach(e => {
    e.addEventListener('click', () => {
        removeShow();
        removeActiveBlock();

        e.classList.add('activeBlock');
        buttonsBackgroundImage()
        e.nextElementSibling.classList.add('show');
    })
})

function removeActiveBlock() {
    buttons.forEach(e => e.classList.remove('activeBlock'))
}
function removeShow() {
    contents.forEach(e => e.classList.remove('show'));
}

function findButtons() {
    return document.querySelectorAll('.accordion-btn');
}

function findContent() {
    return document.querySelectorAll('.accordion-content');
}

function contentsBackground() {
    for (let i = 0; i < contents.length; i++) {
        contents[i].style.backgroundImage = `url('../assets/img/accordion/accordion${i + 1}.jpg')`;
        contents[i].style.backgroundSize = 'cover';
    }
}
contentsBackground();

function buttonsBackgroundImage() {
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].classList.contains('activeBlock')) {
            buttons[i].style.background = `url('../assets/img/accordion/background.png')`;
        } else {
            buttons[i].style.background = `linear-gradient(180deg, rgba(22, 44, 78, 0) 0%, #162C4E 100%), url('../assets/img/accordion/accordion${i + 1}.jpg') 60%`
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
        btnTitles[2].innerText = 'Party'; 
        btnTitles[3].innerText = 'Party on the beach'; 
    }
}
setInterval(editAccordionText, 1000)