import {Component} from 'react'
import CryptocurrenciesList from '../CryptocurrenciesList'
import './index.css'

export default class CryptocurrencyTracker extends Component {
  render() {
    return (
      <div className="bg-container">
        <CryptocurrenciesList />
      </div>
    )
  }
}
