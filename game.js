// Get elements from the HTML DOM
const gameArea = document.getElementById('game-area');
const ball = document.getElementById('ball');
const leftPaddle = document.getElementById('paddle-left');
const rightPaddle = document.getElementById('paddle-right');

// Set initial ball position and velocity
let ballX = 200;
let ballY = 200;
let ballSpeedX = 5;
let ballSpeedY = 5;

// Set initial paddle positions
let leftPaddleY = 160;
let rightPaddleY = 160;

// Game loop
function gameLoop() {
    // Update ball position
    ballX += ballSpeedX;
    ballY += ballSpeedY;

    // Check for collision with top or bottom of game area
    if (ballY <= 0 || ballY >= 380) {
        ballSpeedY = -ballSpeedY;
    }

    // Check for collision with left paddle
    if (ballX <= 20 && ballY >= leftPaddleY && ballY <= leftPaddleY + 80) {
        ballSpeedX = -ballSpeedX;
    }

    // Check for collision with right paddle
    if (ballX >= 370 && ballY >= rightPaddleY && ballY <= rightPaddleY + 80) {
        ballSpeedX = -ballSpeedX;
    }

    // Update ball position in the HTML DOM
    ball.style.left = ballX + 'px';
    ball.style.top = ballY + 'px';

    // Update paddle positions in the HTML DOM
    leftPaddle.style.top = leftPaddleY + 'px';
    rightPaddle.style.top = rightPaddleY + 'px';

    // Request next animation frame
    window.requestAnimationFrame(gameLoop);
}

// Keyboard event listeners
document.addEventListener('keydown', event => {
    if (event.code === 'ArrowUp') {
        rightPaddleY -= 10;
    }
    if (event.code === 'ArrowDown') {
        rightPaddleY += 10;
    }
});

document.addEventListener('keyup', event => {
   
    if (event.code === 'ArrowUp' || event.code === 'ArrowDown') {
        rightPaddleY += 0;
        }
        if (event.code === 'KeyW') {
        leftPaddleY -= 10;
        }
        if (event.code === 'KeyS') {
        leftPaddleY += 10;
        }
        });
        
        // Start the game loop
        window.requestAnimationFrame(gameLoop);


    