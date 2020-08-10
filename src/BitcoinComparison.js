import React, {Component} from 'react';
import {queryCoinBaseBuy, queryCoinBaseSell, queryBlockChain, queryCoinMarketCap, queryKraken, queryGemini} from './BitcoinApis.js';
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
		};
	}

	componentDidMount() {

		queryCoinBaseBuy()
		.then(data => {
			var {BitCoin, Ethereum} = data;
			BitCoin = {
				amount: parseFloat(BitCoin.amount).toFixed(2),
				exchange: "Coinbase",
				currency: "Bitcoin"
			}
			Ethereum = {
				amount: parseFloat(Ethereum.amount).toFixed(2),
				exchange: "Coinbase",
				currency: "Ethereum"
			}
			this.setState(prevState => ({
				bitcoinBuyPrices: [...prevState.bitcoinBuyPrices, BitCoin],
				ethereumBuyPrices: [...prevState.ethereumBuyPrices, Ethereum],
			}));
		})
		.catch(error => console.log(error.message));

		queryCoinBaseSell()
		.then(data => {
			var {BitCoin, Ethereum} = data;
			BitCoin = {
				amount: parseFloat(BitCoin.amount).toFixed(2),
				exchange: "Coinbase",
				currency: "Bitcoin"
			}
			Ethereum = {
				amount: parseFloat(Ethereum.amount).toFixed(2),
				exchange: "Coinbase",
				currency: "Ethereum"
			}
			this.setState(prevState => ({
				bitcoinSellPrices: [...prevState.bitcoinSellPrices, BitCoin],
				ethereumSellPrices: [...prevState.ethereumSellPrices, Ethereum],
			}));
		})
		.catch(error => console.log(error.message));

		queryBlockChain()
		.then(data => {
			var BitCoin = {
				exchange: "Blockchain.com",
				amount: data.buy.toFixed(2),
				currency: "Bitcoin"
			};
			var Ethereum = {
				exchange: "Blockchain.com",
				amount: data.sell.toFixed(2),
				currency: "Bitcoin"
			}
			this.setState(prevState => ({
				bitcoinBuyPrices: [...prevState.bitcoinBuyPrices, BitCoin],
				bitcoinSellPrices: [...prevState.bitcoinSellPrices, Ethereum],
			}));
		})
		.catch(error => console.log(error.message));

		queryCoinMarketCap()
		.then(data => {
			var {BitCoin, Ethereum} = data;
			BitCoin = {
				exchange: "CoinMarketCap",
				amount: BitCoin.price.toFixed(2),
				currency: "Bitcoin"
			}
			Ethereum = {
				exchange: "CoinMarketCap",
				amount: Ethereum.price.toFixed(2),
				currency: "Ethereum"
			}
			this.setState(prevState => ({
				bitcoinBuyPrices: [...prevState.bitcoinBuyPrices, BitCoin],
				bitcoinSellPrices: [...prevState.bitcoinSellPrices, BitCoin],
				ethereumBuyPrices: [...prevState.ethereumBuyPrices, Ethereum],
				ethereumSellPrices: [...prevState.ethereumSellPrices, Ethereum],
			}));
		})
		.catch(error => console.log(error.message));

		queryKraken()
		.then(data => {
			var {BitCoin, Ethereum} = data;
			const BitCoinBuy = {
				exchange: "Kraken",
				amount: parseFloat(BitCoin.b[0]).toFixed(2),
				currency: "Bitcoin"
			}
			const BitCoinSell = {
				exchange: "Kraken",
				amount: parseFloat(BitCoin.a[0]).toFixed(2),
				currency: "Bitcoin"
			}
			const EthereumBuy = {
				exchange: "Kraken",
				amount: parseFloat(Ethereum.b[0]).toFixed(2),
				currency: "Ethereum"
			}
			const EthereumSell = {
				exchange: "Kraken",
				amount: parseFloat(Ethereum.a[0]).toFixed(2),
				currency: "Ethereum"
			}
			this.setState(prevState => ({
				bitcoinBuyPrices: [...prevState.bitcoinBuyPrices, BitCoinBuy],
				bitcoinSellPrices: [...prevState.bitcoinSellPrices, BitCoinSell],
				ethereumBuyPrices: [...prevState.ethereumBuyPrices, EthereumBuy],
				ethereumSellPrices: [...prevState.ethereumSellPrices, EthereumSell],
			}));
		})
		.catch(error => console.log(error.message));

		queryGemini()
		.then(data => {
			var {BitCoin, Ethereum} = data;
			const BitCoinBuy = {
				exchange: "Gemini",
				amount: parseFloat(BitCoin.bid).toFixed(2),
				currency: "Bitcoin"
			}
			const BitCoinSell = {
				exchange: "Gemini",
				amount: parseFloat(BitCoin.ask).toFixed(2),
				currency: "Bitcoin"
			}
			const EthereumBuy = {
				exchange: "Gemini",
				amount: parseFloat(Ethereum.bid).toFixed(2),
				currency: "Ethereum"
			}
			const EthereumSell = {
				exchange: "Gemini",
				amount: parseFloat(Ethereum.ask).toFixed(2),
				currency: "Ethereum"
			}
			this.setState(prevState => ({
				bitcoinBuyPrices: [...prevState.bitcoinBuyPrices, BitCoinBuy],
				bitcoinSellPrices: [...prevState.bitcoinSellPrices, BitCoinSell],
				ethereumBuyPrices: [...prevState.ethereumBuyPrices, EthereumBuy],
				ethereumSellPrices: [...prevState.ethereumSellPrices, EthereumSell],
			}));
		})

	}

	render(){
		var { 
			bitcoinBuyPrices, 
			bitcoinSellPrices, 
			ethereumBuyPrices, 
			ethereumSellPrices
		}	 = this.state;
		bitcoinBuyPrices = [].concat(bitcoinBuyPrices).sort((a,b) => a.amount > b.amount ? 1:-1);
		ethereumBuyPrices = [].concat(ethereumBuyPrices).sort((a,b) => a.amount > b.amount ? 1:-1);
		bitcoinSellPrices = [].concat(bitcoinSellPrices).sort((a,b)=> a.amount < b.amount ? 1:-1);
		ethereumSellPrices = [].concat(ethereumSellPrices).sort((a,b)=> a.amount < b.amount ? 1:-1);

		var canRecommend = bitcoinBuyPrices.length!==0 && bitcoinSellPrices.length!==0 && ethereumBuyPrices.length!==0 && ethereumSellPrices.length!==0;

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
						<CurrencyTable prices={bitcoinBuyPrices} currency="Bitcoin" type={PriceType.BUY} /><br/>
					</Grid>
					<Grid item xs={12} md={6}>
						<CurrencyTable prices={bitcoinSellPrices} currency="Bitcoin" type={PriceType.SELL}/><br/>
					</Grid>
				</Grid>
				<Grid container spacing={5}>
					<Grid item xs={12} md={6} >
						<CurrencyTable prices={ethereumBuyPrices} currency="Ethereum" type={PriceType.BUY}/><br/>
					</Grid>
					<Grid item xs={12} md={6}>
						<CurrencyTable prices={ethereumSellPrices} currency="Ethereum" type={PriceType.SELL}/><br/>
					</Grid>
				</Grid>
		  </div>
		)
		
	}
}

export default BitcoinComparison;