document.addEventListener('DOMContentLoaded', function() {
    console.log('Game Home page loaded');
    
    var music = document.getElementById('bgMusic');
    if (localStorage.getItem('musicPlaying') === 'true') {
        music.play().catch(function(error) {
            console.log('Music auto-play failed:', error);
        });
    }
});