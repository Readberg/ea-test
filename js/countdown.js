export function countdown() {
    let days = document.querySelector('.days'),
        hours = document.querySelector('.hours'),
        minutes = document.querySelector('.minutes'),
        seconds = document.querySelector('.seconds');

    let textDays = document.querySelector('.days-text'),
        textHours = document.querySelector('.hours-text'),
        textMinutes = document.querySelector('.minutes-text'),
        textSeconds = document.querySelector('.seconds-text');


    // Date to which the countdown goes
    const finalTime = new Date(`May 31, 2023 00:00:00`);

    function updateCounter() {
        const currentTime = new Date(),
            diff = finalTime - currentTime;

        // Transfer in days
        const daysLeft = Math.floor(diff / 1000 / 60 / 60 / 24);

        // Translation to hours
        const hoursLeft = Math.floor(diff / 1000 / 60 / 60) % 24;

        // Translation into minutes
        const minutesLeft = Math.floor(diff / 1000 / 60) % 60;

        // Conversion to seconds
        const secondsLeft = Math.floor(diff / 1000) % 60;

        // Adding data to the page
        days.innerText = daysLeft < 10 ? '0' + daysLeft : daysLeft;
        hours.innerText = hoursLeft < 10 ? '0' + hoursLeft : hoursLeft;
        minutes.innerText = minutesLeft < 10 ? '0' + minutesLeft : minutesLeft;
        seconds.innerText = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;

        editCountdownText();
    }
    updateCounter();

    // Running the function every second
    setInterval(updateCounter, 1000);

    // Change the text in the countdown when adapting
    function editCountdownText() {
        if (window.innerWidth <= 768) {
            textDays.innerText = 'DD';
            textHours.innerText = 'HH';
            textMinutes.innerText = 'MM';
            textSeconds.innerText = 'SS';
        } else {
            textDays.innerText = 'Days';
            textHours.innerText = 'Hours';
            textMinutes.innerText = 'Minutes';
            textSeconds.innerText = 'Seconds';
        }
    }
}
