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
			buyPrices: [],
			sellPrices: []
		};
	}

	componentDidMount() {
		queryCoinBaseBuy()
		.then(data => {
			console.log("Coinbase buy");
			var buyPrice = {
				exchange: "Coinbase",
				price: data.amount
			}
			console.log(buyPrice);
			this.setState(prevState => ({
				buyPrices: [...prevState.buyPrices, buyPrice]
			}));
		})
		.catch(error => console.log(error.message));

		queryCoinBaseSell()
		.then(data => {
			console.log("Coinbase sell");
			var sellPrice = {
				exchange: "Coinbase",
				price: data.amount
			}
			let {sellPrices} = this.state;
			this.setState(prevState => ({
				sellPrices: [...prevState.sellPrices, sellPrice]
			}));
		})
		.catch(error => console.log(error.message));

		queryBlockChain()
		.then(data => {
			console.log("Blockchain buy");
			var buyPrice = {
				exchange: "Blockchain.com",
				price: data.buy
			};
			var sellPrice = {
				exchange: "Blockchain.com",
				price: data.sell
			}
			this.setState(prevState => ({
				buyPrices: [...prevState.buyPrices, buyPrice],
				sellPrices: [...prevState.sellPrices, sellPrice]
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