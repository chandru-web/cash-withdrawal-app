import {Component} from 'react'

import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {balance: 2000}

  debitedAmount = id => {
    const {denominationsList} = this.props

    const enteredAmount = denominationsList.find(
      eachValue => eachValue.id === id,
    )

    if (enteredAmount) {
      this.setState(prevState => ({
        balance: prevState.balance - enteredAmount.value,
      }))
      return enteredAmount.value
    }

    return null
  }

  render() {
    const {denominationsList} = this.props
    const {balance} = this.state
    return (
      <div className="app-container">
        <div className="cash-withdrawal-container">
          <div className="profile-container">
            <p className="profile-initial">S</p>
            <h2 className="profile-name">Sarah Williams</h2>
          </div>
          <div className="balance-container">
            <h2 className="your-balance">Your Balance</h2>

            <h1 className="balance">
              <span>Rs.</span>
              {balance}
            </h1>
          </div>
          <h1 className="withdraw-heading">Withdraw</h1>
          <h2 className="choose-sum">CHOOSE SUM (IN RUPEES)</h2>
          <ul className="list-container">
            {denominationsList.map(eachDenomination => (
              <DenominationItem
                key={eachDenomination.id}
                denominationValues={eachDenomination}
                debitedAmount={this.debitedAmount}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default CashWithdrawal
