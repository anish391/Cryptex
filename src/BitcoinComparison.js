import React, {Component} from 'react';
import {queryCoinBaseBuy, queryCoinBaseSell, queryBlockChain, queryCoinMarketCap, queryKraken, queryGemini} from './BitcoinApis.js';
import './BitcoinComparison.css';
import Grid from '@material-ui/core/Grid';
import CurrencyTable from './CurrencyTable';
import PriceType from './PriceType';


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

		queryKraken()
		.then(data => {
			console.log("Kraken");
			var {BitCoin, Ethereum} = data;
			const BitCoinBuy = {
				exchange: "Kraken",
				amount: BitCoin.b[0],
				currency: "BitCoin"
			}
			const BitCoinSell = {
				exchange: "Kraken",
				amount: BitCoin.a[0],
				currency: "BitCoin"
			}
			const EthereumBuy = {
				exchange: "Kraken",
				amount: Ethereum.b[0],
				currency: "Ethereum"
			}
			const EthereumSell = {
				exchange: "Kraken",
				amount: Ethereum.a[0],
				currency: "Ethereum"
			}
			this.setState(prevState => ({
				bitcoinBuyPrices: [...prevState.bitcoinBuyPrices, BitCoinBuy],
				bitcoinSellPrices: [...prevState.bitcoinSellPrices, BitCoinSell],
				ethereumBuyPrices: [...prevState.ethereumBuyPrices, EthereumBuy],
				ethereumSellPrices: [...prevState.ethereumSellPrices, EthereumSell]
			}));
		})
		.catch(error => console.log(error.message));

		queryGemini()
		.then(data => {
			console.log("Gemini");
			var {BitCoin, Ethereum} = data;
			console.log(data);
			const BitCoinBuy = {
				exchange: "Gemini",
				amount: BitCoin.bid,
				currency: "BitCoin"
			}
			const BitCoinSell = {
				exchange: "Gemini",
				amount: BitCoin.ask,
				currency: "BitCoin"
			}
			const EthereumBuy = {
				exchange: "Gemini",
				amount: Ethereum.bid,
				currency: "Ethereum"
			}
			const EthereumSell = {
				exchange: "Gemini",
				amount: Ethereum.ask,
				currency: "Ethereum"
			}
			this.setState(prevState => ({
				bitcoinBuyPrices: [...prevState.bitcoinBuyPrices, BitCoinBuy],
				bitcoinSellPrices: [...prevState.bitcoinSellPrices, BitCoinSell],
				ethereumBuyPrices: [...prevState.ethereumBuyPrices, EthereumBuy],
				ethereumSellPrices: [...prevState.ethereumSellPrices, EthereumSell]
			}));
		})

	}

	// <div className="rowC">
	// 		    <CurrencyTable prices={bitcoinBuyPrices}/><br/>
	// 		    <CurrencyTable prices={bitcoinSellPrices}/><br/>
	// 		  </div>
	// 		  <br/><br/>
	// 		  <div className="rowC">
	// 		    <CurrencyTable prices={ethereumBuyPrices}/><br/>
	// 		    <CurrencyTable prices={ethereumSellPrices}/><br/>
	// 		  </div>



	render(){
		var { bitcoinBuyPrices, bitcoinSellPrices, ethereumBuyPrices, ethereumSellPrices} = this.state;
		bitcoinBuyPrices = [].concat(bitcoinBuyPrices).sort((a,b) => a.amount > b.amount ? 1:-1);
		ethereumBuyPrices = [].concat(ethereumBuyPrices).sort((a,b) => a.amount > b.amount ? 1:-1);
		bitcoinSellPrices = [].concat(bitcoinSellPrices).sort((a,b)=> a.amount < b.amount ? 1:-1);
		ethereumSellPrices = [].concat(ethereumSellPrices).sort((a,b)=> a.amount < b.amount ? 1:-1);
		
		return(
			<div className="grid">
				<Grid container spacing={5} style={{ marginTop: '1px' }}>
					<Grid item lg={6} >
						<CurrencyTable prices={bitcoinBuyPrices} type={PriceType.BUY} /><br/>
					</Grid>
					<Grid item lg={6}>
						<CurrencyTable prices={bitcoinSellPrices} type={PriceType.SELL}/><br/>
					</Grid>
				</Grid>
				<Grid container spacing={5}>
					<Grid item lg={6} >
						<CurrencyTable prices={ethereumBuyPrices} type={PriceType.BUY}/><br/>
					</Grid>
					<Grid item lg={6}>
						<CurrencyTable prices={ethereumSellPrices} type={PriceType.SELL}/><br/>
					</Grid>
				</Grid>
		  </div>
		)
		
	}
}

export default BitcoinComparison;