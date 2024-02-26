let attempts = 0;
let wins = 0;

document.getElementById('rock').addEventListener('click', function() {
    playRound('rock');
});

document.getElementById('paper').addEventListener('click', function() {
    playRound('paper');
});

document.getElementById('scissors').addEventListener('click', function() {
    playRound('scissors');
});

function playRound(playerSelection) {
    attempts++;
    const choices = ['rock', 'paper', 'scissors'];
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];

    let result;

    if (playerSelection === computerSelection) {
        result = "¡Es un empate!";
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
               (playerSelection === 'paper' && computerSelection === 'rock') ||
               (playerSelection === 'scissors' && computerSelection === 'paper')) {
        result = "¡Ganaste! 🎉";
        wins++;
    } else {
        result = "¡Perdiste! 😢";
    }

    document.getElementById('result').textContent = result;
    document.getElementById('attempts').textContent = attempts;
    document.getElementById('wins').textContent = wins;
}

document.getElementById('backBtn').addEventListener('click', function() {
    window.location.href = 'index.html';
});
