// Image Slider Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.slider-image');
const totalSlides = slides.length;

function showNextSlide() {
    if (totalSlides === 0) return;
    
    // Hide current slide
    slides[currentSlide].classList.remove('active');
    
    // Move to next slide
    currentSlide = (currentSlide + 1) % totalSlides;
    
    // Show next slide
    slides[currentSlide].classList.add('active');
}

// Start Button Function
function goToNextPage() {
    alert("Next page would open here. In your case, it would redirect to bb.html");
    // window.location.href = 'bb.html';
}

// Music System
let music = null;
let musicStarted = false;

function startMusic() {
    if (musicStarted) return;
    
    musicStarted = true;
    // असली ऑडियो फ़ाइल के लिए नीचे का कोड इस्तेमाल करें
    // music = new Audio('background-music.mp3');
    
    // Demo के लिए हम एक ऑडियो एलिमेंट बनाएंगे
    music = document.createElement('audio');
    music.innerHTML = '<source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg">';
    music.loop = true;
    music.volume = 0.7;
    
    music.play().catch(error => {
        console.log("Music autoplay blocked: " + error);
    });
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Start image slider after 1 second
    setTimeout(() => {
        setInterval(showNextSlide, 3000);
    }, 1000);
    
    // Start music on user interaction
    document.body.addEventListener('click', function() {
        if (!musicStarted) {
            startMusic();
        }
    });
    
    // Continue music if already playing
    if (localStorage.getItem('backgroundMusic') === 'playing') {
        startMusic();
    }
    
    // Save music state when leaving page
    window.addEventListener('beforeunload', function() {
        if (musicStarted && music && !music.paused) {
            localStorage.setItem('backgroundMusic', 'playing');
        }
    });
});