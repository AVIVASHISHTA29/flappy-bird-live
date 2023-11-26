document.addEventListener("DOMContentLoaded", function () {
    let bird = document.getElementById("bird");
    let gameArea = document.getElementById("gameArea");
    let startBtn = document.getElementById("startBtn");
    let restartBtn = document.getElementById("restartBtn");
    let scoreDisplay = document.getElementById("score");
    let dieSound = document.getElementById("dieSound");
    let hitSound = document.getElementById("hitSound");
    let pointSound = document.getElementById("pointSound");
    let wingSound = document.getElementById("wingSound");
    let birdY = 10, birdVelocity = 0;
    let gravity = 0.5;
    let gameInterval, obstacleInterval;
    let score = 0;
    let gameOver = false;

    function startGame() {
        birdY = 200;
        birdVelocity = 0;
        score = 0;
        scoreDisplay.innerText = "Score: " + score;
        gameOver = false;
        startBtn.style.display = "none";
        restartBtn.style.display = "none";
        gameInterval = setInterval(updateGameArea, 20);
        obstacleInterval = setInterval(addObstacle, 2000);
        window.addEventListener("keydown", jump);
        // clearObstacles();
    }

    function jump(e) {
        if (e.code === "Space" && !gameOver) {
            birdVelocity = -10;
        }
    }

    function updateGameArea() {
        birdY += birdVelocity;
        birdVelocity += gravity;
        bird.style.top = birdY + "px";
        // checkGameOver();
    }

    // function checkGameOver() {
    //     if (birdY < 0 || birdY + bird.clientHeight > gameArea.clientHeight) {
    //         endGame();
    //     }
    // }

    // function endGame() {
    //     gameOver = true;
    //     clearInterval(gameInterval);
    //     clearInterval(obstacleInterval);
    //     restartBtn.style.display = "block";
    //     // hitSound.play();
    // }

    startGame()

    function addObstacle() {
        let rightVelocity = 10;
        let obstacle = document.createElement("div");
        obstacle.className = "obstacle";
        obstacle.style.right = "0px";
        obstacle.style.height = "200px";
        obstacle.style.top = "20px";

        gameArea.appendChild(obstacle);

        setInterval(moveObstacle, 20);

        function moveObstacle() {
            rightVelocity += 10;
            obstacle.style.right = rightVelocity + "px"
        }
    }


});