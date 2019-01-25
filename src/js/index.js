import React from 'react'
import ReactDOM from 'react-dom'
import Web3 from 'aion-web3'
import casinoJSON from './../../contracts/Casino.json' // import our contract JSON

// Initializing Variables
let web3;
let aiwa;
let aiwaInjected = false;
let myContract;
let contractAddress = "0xYourContractAddressHere";
let account = "Not Detected - Please download AIWA to play this game";

// On load, inject AIWA
window.onload = () => {

}

// Main React App
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      lastLuckyAnimal: "",
      numberOfBets: 0,
      minimumBet: 0,
      maximumBet: 0,
      totalBet: 0,
      totalPaid: 0,
      maxAmountOfBets: 0,
      roundNumber: 0,
      accounts: account,
      doesPlayerExist: false,
    }
    this.updateState = this.updateState.bind(this)
  }

  componentDidMount() {
    console.log('componentDidMount');
    this.initializeContract();
  }

  initializeContract() {

  }

  // Update DOM from Contract information
  updateState() {
    console.log('updateState hit');

  }

  // Listen for user events and executes the voteNumber method
  setupListeners() {
    console.log('setupListeners hit');
    let liNodes = this.refs.numbers.querySelectorAll('li')

    liNodes.forEach(number => {
      number.addEventListener('click', event => {
        event.preventDefault();
        if (this.state.doesPlayerExist) { // If player exists, do not allow voting
          alert("This account has already placed a bet. Wait until next round!")
        } else {
          event.target.className = 'number-selected'
          console.log('number selected', event.target.value);
          this.voteNumber(event.target.value, done => {
            // Remove the other number selected
            for (let i = 0; i < liNodes.length; i++) {
              liNodes[i].className = ''
            }
          })
        }
      })
    })
  }

  // Send Number to Contract
  voteNumber(number, cb) {

  }

  render() {
    return (
    <div className="main-container">
      <h1>Welcome to Aion Roulette🚀</h1>
      <div className="rules">
        <div className="block">
          <b>Round #:</b> &nbsp;
          <span>{this.state.roundNumber}</span>
        </div>
        <div className="block ">
          <b>Number of Bets:</b> &nbsp;
          <span>{this.state.numberOfBets}</span>
          /
          <span>{this.state.maxAmountOfBets}</span>
        </div>
        <div className="block">
          <b>Last Winning Animal:</b> &nbsp;
          <span>{this.state.lastLuckyAnimal}</span>
        </div>
        <div className="block">
          <b>Total AION pool:</b> &nbsp;
          <span>{this.state.totalBet} AION</span>
        </div>
        <div className="block empty"></div>
        <div className="block">
          <b>Min Bet:</b> &nbsp;
          <span>{this.state.minimumBet} AION</span>
        </div>
        <div className="block">
          <b>Max Bet:</b> &nbsp;
          <span>{this.state.maximumBet} AION</span>
        </div>
        <div className="block">
          <b>Total AION paid out:</b> &nbsp;
          <span>{this.state.totalPaid} AION</span>
        </div>
      </div>

      <hr />
      <h2 className="link">
        When {this.state.maxAmountOfBets} bets have been placed - an animal will be randomly selected and a payout will occur.
        <br/>
        Winners who guessed correctly will split the amount in the AION pool!
        <br/>
        If no winner, total AION pool will rollover.
        <br/>
        See the smart contract in action <a href="https://mastery.aion.network/#/account/a0e51f852783e5edd470657e8e3581b091816c37aa783e7e52f3a4638d16349c" target="_blank">here!</a>
        <a href="https://twitter.com/KimCodeashian/status/1086077442026921984" target="_blank" className="info"> &#9432; </a>
      </h2>

      <hr />
      <div className="play">
        <h3>Let's Play!</h3>
        <p>
          <span>1. How much AION do you want to bet? <input className="bet-input" ref="aion-bet" type="number" placeholder="0"/> AION</span>
          <span>2. Now pick an animal!</span>
        </p>
        <ul ref="numbers" className="numbers">
          <li value="1"></li>
          <li value="2"></li>
          <li value="3"></li>
          <li value="4"></li>
          <li value="5"></li>
          <li value="6"></li>
          <li value="7"></li>
          <li value="8"></li>
          <li value="9"></li>
          <li value="10"></li>
        </ul>
      </div>

      <hr />
      <div className="footer">
        <div className="footer-content">
        <p><i>Only working with the Mastery Test Network 📡</i></p>
        <p><i>You can only vote once per account.</i></p>
        <p><i>Your account is: <strong>{this.state.accounts}</strong></i></p>
        <p><i>Your vote will be reflected when the next block is mined.</i></p>
        <p className="link"><i>Don't have AIWA? <a href="https://learn.aion.network/v1.0/docs/aiwa" target="_blank">Start here</a></i></p>
        <p className="link"><i>Need Testnet AION? <a href="https://faucets.blockxlabs.com/aion?utm_source=aionDocs" target="_blank">Faucet</a></i></p>
        </div>
      </div>

      <div className="madeWithLove">
        <p>Made with 🔥 by <a href="https://twitter.com/kimcodeashian" target="_blank">KimCodeashian</a> 🤘</p>
      </div>
    </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)
