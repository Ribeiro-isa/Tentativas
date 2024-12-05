let timeLeft = 60;
let score = 0;
let gameInterval;
let circleInterval;

const timeDisplay = document.getElementById("time");
const scoreDisplay = document.getElementById("score");
const playArea = document.getElementById("play-area");
const startButton = document.getElementById("start-button");

function startGame() {
    score = 0;
    timeLeft = 60;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;
    playArea.innerHTML = ""; // Limpa a área de jogo
    startButton.disabled = true; // Desativa o botão de iniciar

    gameInterval = setInterval(updateTime, 1000); // Atualiza o tempo
    circleInterval = setInterval(createCircle, 1000); // Cria círculos aleatórios
}

function updateTime() {
    timeLeft--;
    timeDisplay.textContent = timeLeft;

    if (timeLeft <= 0) {
        endGame();
    }
}

function createCircle() {
    const circle = document.createElement("div");
    circle.classList.add("circle");

    // Posição aleatória
    const x = Math.random() * (playArea.offsetWidth - 40);
    const y = Math.random() * (playArea.offsetHeight - 50);

    circle.style.left = `${x}px`;
    circle.style.top = `${y}px`;

    circle.addEventListener("click", () => {
        score++;
        scoreDisplay.textContent = score;
        circle.remove(); // Remove o círculo clicado
    });

    playArea.appendChild(circle);

    // Remove o círculo automaticamente após 25 segundo
    setTimeout(() => {
        if (circle.parentElement) {
            circle.remove();
        }
    }, 1100);
}

function endGame() {
    clearInterval(gameInterval);
    clearInterval(circleInterval);
    alert(`Fim de jogo! Sua pontuação final é: ${score}`);
    startButton.disabled = false; // Reativa o botão de iniciar
}

// Evento de início do jogo
startButton.addEventListener("click", startGame);
