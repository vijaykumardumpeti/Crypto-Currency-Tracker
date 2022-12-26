import {Component} from 'react'

import './index.css'

export default class CryptocurrencyItem extends Component {
  render() {
    const {key, eachItem} = this.props
    const {currencyLogo, currencyName, euroValue, usdValue} = eachItem
    return (
      <li key={key} className="currency-item-container">
        <div className="currency-image-and-text-container">
          <img
            className="currency-image"
            alt={currencyName}
            src={currencyLogo}
          />
          <p>{currencyName}</p>
        </div>
        <div className="currency-values-container">
          <p>{usdValue}</p>
          <p>{euroValue}</p>
        </div>
      </li>
    )
  }
}
