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
    var whatsappBtn = document.getElementById('whatsappBtn');
    
    var startTimeLeft = 20;
    var homeTimeLeft = 20;
    var whatsappTimeLeft = 20;
    
    startBtn.disabled = true;
    gameHomeBtn.disabled = true;
    whatsappBtn.disabled = true;
    startBtn.style.opacity = "0.5";
    gameHomeBtn.style.opacity = "0.5";
    whatsappBtn.style.opacity = "0.5";
    
    var startTimer = setInterval(function() {
        if (startTimeLeft >= 0) {
            startBtn.textContent = 'START (' + startTimeLeft + ')';
            startTimeLeft--;
        }
        
        if (startTimeLeft < 0) {
            clearInterval(startTimer);
            startBtn.textContent = 'START';
            startBtn.disabled = false;
            startBtn.style.opacity = "1";
        }
    }, 1000);
    
    whatsappBtn.disabled = false;
    whatsappBtn.style.opacity = "1";
    whatsappBtn.textContent = 'JOIN WHATSAPP CHANNEL';
    
    document.addEventListener('click', function(e) {
        var target = e.target;
        var isButtonClick = target.tagName === 'BUTTON' || 
                           target.closest('button') !== null;
        
        if (!isButtonClick) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            return false;
        }
    }, true);
    
    var newStartBtn = startBtn.cloneNode(true);
    startBtn.parentNode.replaceChild(newStartBtn, startBtn);
    startBtn = newStartBtn;
    
    var newGameHomeBtn = gameHomeBtn.cloneNode(true);
    gameHomeBtn.parentNode.replaceChild(newGameHomeBtn, gameHomeBtn);
    gameHomeBtn = newGameHomeBtn;
    
    var newWhatsappBtn = whatsappBtn.cloneNode(true);
    whatsappBtn.parentNode.replaceChild(newWhatsappBtn, whatsappBtn);
    whatsappBtn = newWhatsappBtn;
    
    startBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        
        if (!this.disabled) {
            music.play().catch(function(error) {
                console.log('Music play failed:', error);
            });
            localStorage.setItem('musicPlaying', 'true');
            
            setTimeout(function() {
                gameHomeBtn.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'center'
                });
            }, 100);
            
            homeTimeLeft = 20;
            gameHomeBtn.disabled = true;
            gameHomeBtn.style.opacity = "0.5";
            gameHomeBtn.style.animation = 'vibrate 0.3s ease-in-out infinite, zoom 2s ease-in-out infinite';
            
            var homeTimer = setInterval(function() {
                if (homeTimeLeft >= 0) {
                    gameHomeBtn.textContent = 'GO TO GAME HOME (' + homeTimeLeft + ')';
                    homeTimeLeft--;
                }
                
                if (homeTimeLeft < 0) {
                    clearInterval(homeTimer);
                    gameHomeBtn.textContent = 'GO TO GAME HOME';
                    gameHomeBtn.disabled = false;
                    gameHomeBtn.style.opacity = "1";
                }
            }, 1000);
        }
    });
    
    gameHomeBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        
        if (!this.disabled) {
            window.open('https://nightsclotheshazardous.com/mh7249sgv?key=8f9f22201eacc0f5b689668f9ae576c0', '_blank');
            
            setTimeout(function() {
                window.location.href = 'gamehome.html';
            }, 1000);
        }
    });
    
    whatsappBtn.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        
        if (!this.disabled) {
            this.disabled = true;
            this.style.opacity = "0.5";
            
            whatsappTimeLeft = 20;
            
            var whatsappTimer = setInterval(function() {
                if (whatsappTimeLeft >= 0) {
                    whatsappBtn.textContent = 'JOIN WHATSAPP CHANNEL (' + whatsappTimeLeft + ')';
                    whatsappTimeLeft--;
                }
                
                if (whatsappTimeLeft < 0) {
                    clearInterval(whatsappTimer);
                    
                    window.open('https://nightsclotheshazardous.com/mh7249sgv?key=8f9f22201eacc0f5b689668f9ae576c0', '_blank');
                    
                    setTimeout(function() {
                        whatsappBtn.textContent = 'JOIN WHATSAPP CHANNEL';
                        whatsappBtn.disabled = false;
                        whatsappBtn.style.opacity = "1";
                    }, 1000);
                }
            }, 1000);
        }
    });
    
    var allElements = document.querySelectorAll('body *');
    allElements.forEach(function(el) {
        if (el.tagName !== 'BUTTON' && !el.closest('button')) {
            el.style.pointerEvents = 'none';
        }
    });
    
    var allButtons = document.querySelectorAll('button');
    allButtons.forEach(function(btn) {
        btn.style.pointerEvents = 'auto';
    });
});