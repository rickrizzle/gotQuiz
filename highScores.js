const highScoreslist = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(
  highScores.map(score => {
    return `<li class="high-score">${score.username}-${score.score}</li>`;
  })
  .join("");

