document.addEventListener('DOMContentLoaded', function() {
    var currentSlide = 0;
    var slides = document.querySelectorAll('.slides img');
    var totalSlides = slides.length;
    
    function showNextSlide() {
        slides[currentSlide].style.opacity = 0;
        currentSlide = (currentSlide + 1) % totalSlides;
        slides[currentSlide].style.opacity = 1;
    }
    
    setInterval(showNextSlide, 4000);
    
    var music = document.getElementById('bgMusic');
    
    var startBtn = document.getElementById('startBtn');
    var gameHomeBtn = document.getElementById('gameHomeBtn');
    var timeLeft = 10;
    
    // Start with both buttons disabled
    startBtn.disabled = true;
    gameHomeBtn.disabled = true;
    startBtn.style.opacity = "0.5";
    gameHomeBtn.style.opacity = "0.5";
    
    var timer = setInterval(function() {
        startBtn.textContent = 'START (' + timeLeft + ')';
        timeLeft--;
        
        if (timeLeft < 0) {
            clearInterval(timer);
            startBtn.textContent = 'START';
            startBtn.disabled = false;
            startBtn.style.opacity = "1";
        }
    }, 1000);
    
    startBtn.addEventListener('click', function() {
        if (!startBtn.disabled) {
            music.play().catch(function(error) {
                console.log('Music play failed:', error);
            });
            localStorage.setItem('musicPlaying', 'true');
            
            // Enable home button after start button click
            gameHomeBtn.disabled = false;
            gameHomeBtn.style.opacity = "1";
            gameHomeBtn.textContent = 'GO TO GAME HOME';
        }
    });
    
    gameHomeBtn.addEventListener('click', function() {
        if (!gameHomeBtn.disabled) {
            window.open('https://caresseashoreunrest.com/mh7249sgv?key=8f9f22201eacc0f5b689668f9ae576c0', '_blank');
            setTimeout(function() {
                window.location.href = 'gamehome.html';
            }, 800);
        }
    });
});