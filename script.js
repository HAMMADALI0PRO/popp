document.addEventListener('DOMContentLoaded', function() {
    var splashScreen = document.getElementById('splashScreen');
    
    setTimeout(function() {
        splashScreen.style.opacity = '0';
        
        setTimeout(function() {
            window.location.href = "main.html";
        }, 500);
        
    }, 5000);
});