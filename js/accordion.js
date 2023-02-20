let openEventsButton = document.querySelector('.other-events');
let eventSection = document.querySelector('.accordion-section');

openEventsButton.addEventListener('click', () => {
    eventSection.classList.toggle('active');
})

const buttons = findButtons();
const contents = findContent();

buttons.forEach(e => {
    e.addEventListener('click', () => {
        removeShow();

        e.nextElementSibling.classList.add('show');
    })
}) 

function removeShow() {
    contents.forEach(e => e.classList.remove('show'));
}

function findButtons() {
    return document.querySelectorAll('.accordion-btn');
}

function findContent() {
    return document.querySelectorAll('.accordion-content');
}

function addBackgroundImage() {
    for(let i = 0; i < contents.length; i++) {
        contents[i].style.backgroundImage = `url('../assets/img/accordion/accordion${i + 1}.jpg')`;
    }
}
addBackgroundImage();