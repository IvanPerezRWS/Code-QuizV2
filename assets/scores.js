

const highScores = localStorage.getItem("highScores", JSON.stringify([]))





/*
const hughscores_table = document.getElementById("highscores-table")
const clear_highscore = document.getElementById("clear-highscore")

// Button Event listener
clear_highscore.addEventListener('click', clearHighscores)

// Generate Highscores table
generateHighscoresTable()

function generateHighscoresTable() {
    let highscores = localStorage.getItem("scorelist")
    if(highscores) {
        addHighscoreTableRows(highscores)
    }
}

// Table generation **
function addHighscoreTableRows(highscore) {
    highscore = JSON.parse(highscores)

    highscores.forEach(function(scoreItem, index) {
        const rankCell = createRankCell(index +1)
        const scoreCell = createScoreCell(scoreItem.score)
        const initialsCell = createInitialsCell(scoreItem.initials)
        const highscoreTableRow = createHighscoreTableRow(rankCell, scoreCell, initialsCell)
        highscores_table.appendChild(addHighscoreTableRow)
    })
}

function createCellRank(rank) {
    const rankCell = document.createElement('td')
    rankCell.textContent = `#${rank}`
    return rankCell
}

function createScoreCell(score) {
    const scoreCell = document.createElement('td')
    scoreCell.textContent = score
    return scoreCell
}

function createInitialsCell(initials) {
    const initialsCell = document.getElementById('tr')
    initialsCell.textContent = initials
    return initialsCell
}

function createHighscoreTableRow(rankCell, scoreCell, initialsCell) {
    const tableRow = document.createElement('tr')
    tableRow.appendChild(rankCell)
    tableRow.appendChild(scoreCell)
    tableRow.appendChild(initialsCell)
    return tableRow
}

// clear table 
function clearHighscores() {
    localStorage.setItem('scoreList', [])
    while (highscores_table.children.length > 1) {
        highscores_table.removeChild(highscores_table.lastChild)
    }
}

*/
