document.addEventListener("DOMContentLoaded", function() {
    let countDownDate = new Date("May 4, 2024 20:00:00").getTime();

    let x = setInterval(function() {
        let now = new Date().getTime();
        let distance = countDownDate - now;
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);

        let timeDisplay = document.querySelector('.box-countdown .box-time');
        if (timeDisplay) {
            timeDisplay.innerHTML = 
                '<li><p class="time">' + days + '</p><p class="separate">:</p></li>' +
                '<li><p class="time">' + hours + '</p><p class="separate">:</p></li>' +
                '<li><p class="time">' + minutes + '</p><p class="separate">:</p></li>' +
                '<li><p class="time">' + seconds + '</p><p class="separate"></p></li>';
        }
        if (distance < 0) {
            clearInterval(x);
            if (timeDisplay) {
                timeDisplay.innerHTML = "EXPIRED";
            }
        }
    }, 1000);
});