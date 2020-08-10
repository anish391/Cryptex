import React, {Component} from 'react';
import {queryCoinBaseBuy, queryCoinBaseSell, queryBlockChain, queryCoinMarketCap, queryKraken, queryGemini} from './BitcoinApis.js';
import './BitcoinComparison.css';
import Grid from '@material-ui/core/Grid';
import CurrencyTable from './CurrencyTable';
import RecommendedTable from './RecommendedTable';
import PriceType from './PriceType';


class BitcoinComparison extends Component {
	constructor(props){
		super(props);
		this.state = {
			bitcoinBuyPrices: [],
			bitcoinSellPrices: [],
			ethereumBuyPrices: [],
			ethereumSellPrices: [],
			bestBitcoinBuyingPrice: null,
			bestBitcoinSellingPrice: null,
			bestEthereumBuyingPrice: null,
			bestEthereumSellingPrice: null
		};
	}

	componentDidMount() {

		queryCoinBaseBuy()
		.then(data => {
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
				ethereumBuyPrices: [...prevState.ethereumBuyPrices, Ethereum],
				bestBitcoinBuyingPrice: this.state.bitcoinBuyPrices[0],
				bestEthereumBuyingPrice: this.state.ethereumBuyPrices[0]
			}));
		})
		.catch(error => console.log(error.message));

		queryCoinBaseSell()
		.then(data => {
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
				ethereumSellPrices: [...prevState.ethereumSellPrices, Ethereum],
				bestBitcoinSellingPrice: this.state.bitcoinSellPrices[0],
				bestEthereumSellingPrice: this.state.ethereumSellPrices[0]
			}));
		})
		.catch(error => console.log(error.message));

		queryBlockChain()
		.then(data => {
			var BitCoin = {
				exchange: "Blockchain.com",
				amount: data.buy,
				currency: "Bitcoin"
			};
			var Ethereum = {
				exchange: "Blockchain.com",
				amount: data.sell,
				currency: "Bitcoin"
			}
			this.setState(prevState => ({
				bitcoinBuyPrices: [...prevState.bitcoinBuyPrices, BitCoin],
				bitcoinSellPrices: [...prevState.bitcoinSellPrices, Ethereum],
				bestBitcoinBuyingPrice: this.state.bitcoinBuyPrices[0],
				bestBitcoinSellingPrice: this.state.bitcoinSellPrices[0]
			}));
		})
		.catch(error => console.log(error.message));

		queryCoinMarketCap()
		.then(data => {
			var {BitCoin, Ethereum} = data;
			BitCoin = {
				exchange: "CoinMarketCap",
				amount: BitCoin.price,
				currency: "Bitcoin"
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
				ethereumSellPrices: [...prevState.ethereumSellPrices, Ethereum],
				bestBitcoinBuyingPrice: this.state.bitcoinBuyPrices[0],
				bestBitcoinSellingPrice: this.state.bitcoinSellPrices[0],
				bestEthereumBuyingPrice: this.state.ethereumBuyPrices[0],
				bestEthereumSellingPrice: this.state.ethereumSellPrices[0]
			}));
		})
		.catch(error => console.log(error.message));

		queryKraken()
		.then(data => {
			var {BitCoin, Ethereum} = data;
			const BitCoinBuy = {
				exchange: "Kraken",
				amount: BitCoin.b[0],
				currency: "Bitcoin"
			}
			const BitCoinSell = {
				exchange: "Kraken",
				amount: BitCoin.a[0],
				currency: "Bitcoin"
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
				ethereumSellPrices: [...prevState.ethereumSellPrices, EthereumSell],
				bestBitcoinBuyingPrice: this.state.bitcoinBuyPrices[0],
				bestBitcoinSellingPrice: this.state.bitcoinSellPrices[0],
				bestEthereumBuyingPrice: this.state.ethereumBuyPrices[0],
				bestEthereumSellingPrice: this.state.ethereumSellPrices[0]
			}));
		})
		.catch(error => console.log(error.message));

		queryGemini()
		.then(data => {
			var {BitCoin, Ethereum} = data;
			const BitCoinBuy = {
				exchange: "Gemini",
				amount: BitCoin.bid,
				currency: "Bitcoin"
			}
			const BitCoinSell = {
				exchange: "Gemini",
				amount: BitCoin.ask,
				currency: "Bitcoin"
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
				ethereumSellPrices: [...prevState.ethereumSellPrices, EthereumSell],
				bestBitcoinBuyingPrice: this.state.bitcoinBuyPrices[0],
				bestBitcoinSellingPrice: this.state.bitcoinSellPrices[0],
				bestEthereumBuyingPrice: this.state.ethereumBuyPrices[0],
				bestEthereumSellingPrice: this.state.ethereumSellPrices[0]
			}));
		})

	}

	render(){
		var { 
			bitcoinBuyPrices, 
			bitcoinSellPrices, 
			ethereumBuyPrices, 
			ethereumSellPrices, 
			bestBitcoinBuyingPrice,
			bestBitcoinSellingPrice,
			bestEthereumBuyingPrice,
			bestEthereumSellingPrice
		}	 = this.state;
		bitcoinBuyPrices = [].concat(bitcoinBuyPrices).sort((a,b) => a.amount > b.amount ? 1:-1);
		ethereumBuyPrices = [].concat(ethereumBuyPrices).sort((a,b) => a.amount > b.amount ? 1:-1);
		bitcoinSellPrices = [].concat(bitcoinSellPrices).sort((a,b)=> a.amount < b.amount ? 1:-1);
		ethereumSellPrices = [].concat(ethereumSellPrices).sort((a,b)=> a.amount < b.amount ? 1:-1);

		var canRecommend = bitcoinBuyPrices.length!=0 && bitcoinSellPrices!=0 && ethereumBuyPrices!=0 && ethereumSellPrices!=0;

		var bestPrices = {
			bitcoin: [bitcoinBuyPrices[0], bitcoinSellPrices[0]],
			ethereum: [ethereumBuyPrices[0], ethereumSellPrices[0]]
		}
		return(
			<div>
				<Grid container spacing={5} style={{ marginTop: '1px'}}>
					
					{(canRecommend) && <Grid item xs={12} md={12} >
						<RecommendedTable prices={bestPrices} /><br/>
					</Grid>}
					<Grid item xs={12} md={6} >
						<CurrencyTable prices={bitcoinBuyPrices} type={PriceType.BUY} /><br/>
					</Grid>
					<Grid item xs={12} md={6}>
						<CurrencyTable prices={bitcoinSellPrices} type={PriceType.SELL}/><br/>
					</Grid>
				</Grid>
				<Grid container spacing={5}>
					<Grid item xs={12} md={6} >
						<CurrencyTable prices={ethereumBuyPrices} type={PriceType.BUY}/><br/>
					</Grid>
					<Grid item xs={12} md={6}>
						<CurrencyTable prices={ethereumSellPrices} type={PriceType.SELL}/><br/>
					</Grid>
				</Grid>
		  </div>
		)
		
	}
}

export default BitcoinComparison;