import React, {Component} from 'react';
import {queryCoinBaseBuy, queryCoinBaseSell, queryBlockChain, queryCoinMarketCap} from './BitcoinApis.js';
import './BitcoinComparison.css';
import CurrencyTable from './CurrencyTable';

const PriceType = {
	BUY: 0,
	SELL: 1
};

class BitcoinComparison extends Component {
	constructor(props){
		super(props);
		this.state = {
			bitcoinBuyPrices: [],
			bitcoinSellPrices: [],
			ethereumBuyPrices: [],
			ethereumSellPrices: []
		};
	}

	componentDidMount() {

		queryCoinBaseBuy()
		.then(data => {
			console.log("Coinbase buy");
			var {BitCoin, Ethereum} = data;
			BitCoin = {
				amount: BitCoin.amount,
				exchange: "Coinbase",
				currency: "Bitcoin"
			}
			Ethereum = {
				amount: Ethereum.amount,
				exchange: "Coinbase",
				currency: "Ethereum"
			}
			this.setState(prevState => ({
				bitcoinBuyPrices: [...prevState.bitcoinBuyPrices, BitCoin],
				ethereumBuyPrices: [...prevState.ethereumBuyPrices, Ethereum]
			}));
		})
		.catch(error => console.log(error.message));

		queryCoinBaseSell()
		.then(data => {
			console.log("Coinbase sell");
			var {BitCoin, Ethereum} = data;
			BitCoin = {
				amount: BitCoin.amount,
				exchange: "Coinbase",
				currency: "Bitcoin"
			}
			Ethereum = {
				amount: Ethereum.amount,
				exchange: "Coinbase",
				currency: "Ethereum"
			}
			this.setState(prevState => ({
				bitcoinSellPrices: [...prevState.bitcoinSellPrices, BitCoin],
				ethereumSellPrices: [...prevState.ethereumSellPrices, Ethereum]
			}));
		})
		.catch(error => console.log(error.message));

		queryBlockChain()
		.then(data => {
			console.log("Blockchain.com");
			var BitCoin = {
				exchange: "Blockchain.com",
				amount: data.buy,
				currency: "BitCoin"
			};
			var Ethereum = {
				exchange: "Blockchain.com",
				amount: data.sell,
				currency: "BitCoin"
			}
			this.setState(prevState => ({
				bitcoinBuyPrices: [...prevState.bitcoinBuyPrices, BitCoin],
				bitcoinSellPrices: [...prevState.bitcoinSellPrices, Ethereum]
			}));
		})
		.catch(error => console.log(error.message));

		queryCoinMarketCap()
		.then(data => {
			console.log("CoinMarketCap");
			var {BitCoin, Ethereum} = data;
			BitCoin = {
				exchange: "CoinMarketCap",
				amount: BitCoin.price,
				currency: "BitCoin"
			}
			Ethereum = {
				exchange: "CoinMarketCap",
				amount: Ethereum.price,
				currency: "Ethereum"
			}
			this.setState(prevState => ({
				bitcoinBuyPrices: [...prevState.bitcoinBuyPrices, BitCoin],
				bitcoinSellPrices: [...prevState.bitcoinSellPrices, BitCoin],
				ethereumBuyPrices: [...prevState.ethereumBuyPrices, Ethereum],
				ethereumSellPrices: [...prevState.ethereumSellPrices, Ethereum]
			}));
		})
		.catch(error => console.log(error.message));

	}




	render(){
		var { bitcoinBuyPrices, bitcoinSellPrices, ethereumBuyPrices, ethereumSellPrices} = this.state;
		bitcoinBuyPrices = [].concat(bitcoinBuyPrices).sort((a,b) => a.amount > b.amount ? 1:-1);
		ethereumBuyPrices = [].concat(ethereumBuyPrices).sort((a,b) => a.amount > b.amount ? 1:-1);
		bitcoinSellPrices = [].concat(bitcoinSellPrices).sort((a,b)=> a.amount < b.amount ? 1:-1);
		ethereumSellPrices = [].concat(ethereumSellPrices).sort((a,b)=> a.amount < b.amount ? 1:-1);
		console.log(ethereumSellPrices);
		

		return(
			<div>
				<div className="rowC">
			    <CurrencyTable prices={bitcoinBuyPrices}/><br/>
			    <CurrencyTable prices={bitcoinSellPrices}/><br/>
			  </div>
			  <br/><br/>
			  <div className="rowC">
			    <CurrencyTable prices={ethereumBuyPrices}/><br/>
			    <CurrencyTable prices={ethereumSellPrices}/><br/>
			  </div>
		  </div>
		)
		
	}
}

export default BitcoinComparison;