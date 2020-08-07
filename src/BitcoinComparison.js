import React, {Component} from 'react';
import {queryCoinBaseBuy, queryCoinBaseSell, queryBlockChain} from './BitcoinApis.js';

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
			var buyPrice = {
				exchange: "Blockchain.com",
				amount: data.buy,
				currency: "Bitcoin"
			};
			var sellPrice = {
				exchange: "Blockchain.com",
				amount: data.sell,
				currency: "Bitcoin"
			}
			this.setState(prevState => ({
				bitcoinBuyPrices: [...prevState.bitcoinBuyPrices, buyPrice],
				bitcoinSellPrices: [...prevState.bitcoinSellPrices, sellPrice]
			}));
		})
		.catch(error => console.log(error.message));

	}



	render(){
		return(
			<div className="xyz">
				<h1>Class</h1>
			</div>
		);
		
	}
}

export default BitcoinComparison;