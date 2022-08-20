import axios from 'axios'

export const bitcoinService = {
    getRate,
    getBitcoinData,
}

async function getRate(usd) {
    const { data } = await axios.get(`https://blockchain.info/tobtc?currency=USD&value=${usd}`)
    return data
}

async function getBitcoinData(type) { //'market-price', 'n-transactions'
    const { data } = await axios.get(`https://api.blockchain.info/charts/${type}?timespan=1months&format=json&cors=true`)
    let { name, description, values } = data
    values = values.map(v => v.y)
    return {
        name, description, values
    }
}