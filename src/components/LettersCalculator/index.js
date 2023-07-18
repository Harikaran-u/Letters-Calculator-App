// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {inputValue: '', count: 0}

  calculateValue = event => {
    const str = event.target.value
    this.setState({inputValue: str, count: str.length})
  }

  render() {
    const {count} = this.state
    const {inputValue} = this.state

    const calcPage = (
      <div className="home-page">
        <div className="text-cont">
          <h1 className="text">Calculate the letters you enter</h1>
          <label htmlFor="input" className="number">
            Enter the phrase
          </label>
          <input
            className="input-el"
            placeholder="Enter the phrase"
            type="text"
            id="input"
            value={inputValue}
            onChange={this.calculateValue}
          />
          <p className="count">No.of letters: {count}</p>
        </div>
        <div className="calc-img-cont">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="calc-img"
          />
        </div>
      </div>
    )
    return calcPage
  }
}

export default LettersCalculator
