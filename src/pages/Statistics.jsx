import { Component } from 'react'
import { Chart } from '../cmps/Chart'
import { bitcoinService } from '../services/bitcoinService.js'

export class Statistics extends Component {
  state = {
    marketPrice: null,
    confirmedTransactions: null,
  }

  async componentDidMount() {
    const marketPrice = await bitcoinService.getBitcoinData('market-price')
    const confirmedTransactions = await bitcoinService.getBitcoinData(
      'n-transactions'
    )
    this.setState({ marketPrice, confirmedTransactions })
  }
  render() {
    const { marketPrice, confirmedTransactions } = this.state
    if ((marketPrice, confirmedTransactions))
      return (
        <section className="statistics">
          <Chart data={marketPrice} />
          <Chart data={confirmedTransactions} />
        </section>
      )
  }
}
