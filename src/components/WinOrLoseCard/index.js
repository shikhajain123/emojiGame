// Write your code here.
import './index.css'

const LOSE_IMAGE = 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'
const WON_IMAGE = 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'

const WinOrLoseCard = props => {
  const {isWon, score, onClickPlayAgain} = props
  const {clickedEmojisList, isGameInProgress} = onClickPlayAgain

  const imageUrl = isWon ? WON_IMAGE : LOSE_IMAGE

  const gameResultText = isWon ? 'You Won' : 'You Lose'
  const gameScoreLabel = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-lose-container">
      <div className="score-details-container">
        <h1 className="result-text">{gameResultText}</h1>
        <p className="label-text">{gameScoreLabel}</p>
        <p className="your-score">{score}/12</p>
        <button
          type="button"
          onClick={onClickPlayAgain}
          className="play-again-btn"
        >
          Play Again
        </button>
      </div>
      <div className="image-container">
        <img src={imageUrl} className="win-lose-image" alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLoseCard
