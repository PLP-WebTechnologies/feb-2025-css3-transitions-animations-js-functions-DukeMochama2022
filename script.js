
// Get DOM elements
const ball = document.getElementById('animatedBall');
const contentBox = document.getElementById('contentBox');
const animateBtn = document.getElementById('animateBtn');
const resetBtn = document.getElementById('resetBtn');
const clickCount = document.getElementById('clickCount');

// Initialize click count from localStorage or set to 0
let clicks = parseInt(localStorage.getItem('clickCount')) || 0;
clickCount.textContent = `Clicks: ${clicks}`;

// Add click event to the ball
ball.addEventListener('click', () => {
    clicks++;
    localStorage.setItem('clickCount', clicks);
    clickCount.textContent = `Clicks: ${clicks}`;
    
    // Add animation class
    ball.classList.add('animate');
    
    // Remove animation class after 1 second
    setTimeout(() => {
        ball.classList.remove('animate');
    }, 2000);
});

// Add click event to the content box
contentBox.addEventListener('click', () => {
    contentBox.style.transform = 'scale(1.1)';
    setTimeout(() => {
        contentBox.style.transform = 'scale(1)';
    }, 300);
});

// Add click event to the animate button
animateBtn.addEventListener('click', () => {
    ball.classList.add('animate');
    setTimeout(() => {
        ball.classList.remove('animate');
    }, 2000);
});

// Add click event to the reset button
resetBtn.addEventListener('click', () => {
    clicks = clicks - 1;
    if(clicks < 0){
        clicks = 0;
    }
    localStorage.setItem('clickCount', clicks);
    clickCount.textContent = `Clicks: ${clicks}`;
});

