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
    var startTimeLeft = 10;
    var homeTimeLeft = 10;
    
    // Start with both buttons disabled
    startBtn.disabled = true;
    gameHomeBtn.disabled = true;
    startBtn.style.opacity = "0.5";
    gameHomeBtn.style.opacity = "0.5";
    
    // Start button timer
    var startTimer = setInterval(function() {
        startBtn.textContent = 'START (' + startTimeLeft + ')';
        startTimeLeft--;
        
        if (startTimeLeft < 0) {
            clearInterval(startTimer);
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
            
            // Scroll to home button
            setTimeout(function() {
                gameHomeBtn.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'center'
                });
            }, 100);
            
            // Start home button timer after start button click
            gameHomeBtn.disabled = true;
            gameHomeBtn.style.opacity = "0.5";
            homeTimeLeft = 10;
            
            // Add animation to home button
            gameHomeBtn.style.animation = 'vibrate 0.3s ease-in-out infinite, zoom 2s ease-in-out infinite';
            
            var homeTimer = setInterval(function() {
                gameHomeBtn.textContent = 'GO TO GAME HOME (' + homeTimeLeft + ')';
                homeTimeLeft--;
                
                if (homeTimeLeft < 0) {
                    clearInterval(homeTimer);
                    gameHomeBtn.textContent = 'GO TO GAME HOME';
                    gameHomeBtn.disabled = false;
                    gameHomeBtn.style.opacity = "1";
                    gameHomeBtn.style.animation = 'vibrate 0.3s ease-in-out infinite, zoom 2s ease-in-out infinite';
                }
            }, 1000);
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