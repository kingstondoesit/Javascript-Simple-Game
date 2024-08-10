// Function to save a new high score
export function saveHighScore(score) {
    let highScores = getHighScores();
    highScores.push(score);
    highScores.sort((a, b) => a - b); // Sort scores in ascending order
    if (highScores.length > 5) {
        highScores = highScores.slice(0, 5); // Keep only the top 5 scores
    }
    localStorage.setItem('highScores', JSON.stringify(highScores));
    
    return highScores.includes(score); // Return true if the score is in the top 5
}

// Function to retrieve high scores from local storage
export function getHighScores() {
    const highScores = localStorage.getItem('highScores');
    return highScores ? JSON.parse(highScores) : [];
}

// Function to display high scores
export function displayHighScores(element, currentScore = null) {
    const highScores = getHighScores();
    element.innerHTML = highScores.map((score, index) => {
        const isCurrentScore = score === currentScore;
        const scoreText = `${index + 1}. ${score/1000} seconds`;
        return `<li style="font-weight: ${isCurrentScore ? 'bolder' : 'normal'};">${scoreText}</li>`;
    }).join('');
}