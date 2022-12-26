import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import {Component} from 'react'
import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

export default class CryptocurrenciesList extends Component {
  state = {
    currenciesList: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCurrenciesList()
  }

  getCurrenciesList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const backedListsData = await response.json()
    const frontendListsData = backedListsData.map(eachObject => ({
      id: eachObject.id,
      currencyLogo: eachObject.currency_logo,
      currencyName: eachObject.currency_name,
      euroValue: eachObject.euro_value,
      usdValue: eachObject.usd_value,
    }))
    this.setState({
      currenciesList: frontendListsData,
      isLoading: false,
    })
  }

  render() {
    const {currenciesList, isLoading} = this.state
    console.log(currenciesList)
    console.log(isLoading)

    return (
      <>
        {isLoading ? (
          <div testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <div className="cryptocurrencis-list-container">
            <h1 className="main-heading">Cryptocurrency Tracker</h1>
            <img
              alt="cryptocurrency"
              src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
            />
            <div className="currencies-table">
              <div className="table-colomn-container">
                <h1>Coin Type</h1>
                <div className="usd-and-euro">
                  <h1>USD</h1>
                  <h1>EURO</h1>
                </div>
              </div>
              <ul className="un-ordered-list-container">
                {currenciesList.map(eachItem => (
                  <CryptocurrencyItem key={eachItem.id} eachItem={eachItem} />
                ))}
              </ul>
            </div>
          </div>
        )}
      </>
    )
  }
}
