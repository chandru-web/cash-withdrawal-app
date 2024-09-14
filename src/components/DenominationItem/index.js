import './index.css'

const DenominationItem = props => {
  const {denominationValues, debitedAmount} = props
  const {id, value} = denominationValues

  const withdrawAmount = () => {
    debitedAmount(id)
  }

  return (
    <li className="list-item" onClick={withdrawAmount}>
      <button className="value" type="button">
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
