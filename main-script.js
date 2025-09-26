document.addEventListener('DOMContentLoaded', function() {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slides img');
    const totalSlides = slides.length;

    function showNextSlide() {
        slides[currentSlide].style.opacity = 0;
        currentSlide = (currentSlide + 1) % totalSlides;
        slides[currentSlide].style.opacity = 1;
    }

    setInterval(showNextSlide, 4000);

    startButtonTimer();
    setupButtonEvents();
});

function startButtonTimer() {
    const startBtn = document.getElementById('startBtn');
    const gameHomeBtn = document.getElementById('gameHomeBtn');
    let timeLeft = 10;

    const timer = setInterval(function() {
        startBtn.textContent = `START (${timeLeft})`;
        gameHomeBtn.textContent = `GO TO GAME HOME (${timeLeft})`;
        
        timeLeft--;

        if (timeLeft < 0) {
            clearInterval(timer);
            startBtn.textContent = 'START';
            gameHomeBtn.textContent = 'GO TO GAME HOME';
            startBtn.disabled = false;
            gameHomeBtn.disabled = false;
        }
    }, 1000);

    startBtn.disabled = true;
    gameHomeBtn.disabled = true;
}

function setupButtonEvents() {
    const startBtn = document.getElementById('startBtn');
    const gameHomeBtn = document.getElementById('gameHomeBtn');

    startBtn.addEventListener('click', function() {
        if (!startBtn.disabled) {
            window.location.href = "earn.html";
        }
    });

    gameHomeBtn.addEventListener('click', function() {
        if (!gameHomeBtn.disabled) {
            // Direct link ads open in new tab
            var adsWindow = window.open('https://caresseashoreunrest.com/mh7249sgv?key=8f9f22201eacc0f5b689668f9ae576c0', '_blank');
            
            // Redirect to game home after 1 second
            setTimeout(function() {
                window.location.href = "gamehome.html";
            }, 1000);
        }
    });
}