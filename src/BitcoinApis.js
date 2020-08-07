const fetch = require('node-fetch');

async function queryCoinBaseBuy(){
	const coinBaseBitcoinUrl = "https://api.coinbase.com/v2/prices/buy?currency=USD"
	const bitCoinResponse = await fetch(coinBaseBitcoinUrl);
	const bitCoinData = await bitCoinResponse.json();
	const coinBaseEthereumUrl = "https://api.coinbase.com/v2/prices/ETH-USD/buy"
	const ethereumResponse = await fetch(coinBaseEthereumUrl);
	const ethereumData = await ethereumResponse.json();

	// console.log(bitCoinData.data);
	// console.log(ethereumData.data);

	return {"BitCoin": bitCoinData.data,"Ethereum": ethereumData.data};
}

async function queryCoinBaseSell(){
	const coinBaseBitcoinUrl = "https://api.coinbase.com/v2/prices/sell?currency=USD"
	const bitCoinResponse = await fetch(coinBaseBitcoinUrl);
	const bitCoinData = await bitCoinResponse.json();
	const coinBaseEthereumUrl = "https://api.coinbase.com/v2/prices/ETH-USD/sell"
	const ethereumResponse = await fetch(coinBaseEthereumUrl);
	const ethereumData = await ethereumResponse.json();

	// console.log(bitCoinData.data);
	// console.log(ethereumData.data);

	return {"BitCoin": bitCoinData.data,"Ethereum": ethereumData.data};
}

async function queryBlockChain(){
	const blockchainUrl = "https://blockchain.info/ticker"

	const response = await fetch(blockchainUrl);
	const data = await response.json();
	return data.USD;
}

async function queryCoinMarketCap(){
	const apiKey = 'aa0694ed-cd02-4021-ae44-dda39ee52268';
	const coinMarketCapBitcoinUrl = "https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest";
	const queryStringBTC = "?CMC_PRO_API_KEY="+apiKey+"&symbol=BTC";
	const bitCoinResponse = await fetch(coinMarketCapBitcoinUrl+queryStringBTC);
	const bitCoinData = await bitCoinResponse.json();

	const coinMarketCapEthereumUrl = "https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest";
	const queryStringETH = "?CMC_PRO_API_KEY="+apiKey+"&symbol=ETH";
	const ethereumResponse = await fetch(coinMarketCapEthereumUrl+queryStringETH);
	const ethereumData = await ethereumResponse.json();

	return {"BitCoin": bitCoinData.data.BTC.quote.USD, "Ethereum": ethereumData.data.ETH.quote.USD};
}

export {queryCoinBaseBuy, queryCoinBaseSell, queryBlockChain, queryCoinMarketCap};

// queryCoinBaseBuy()
// .then(data => {
// 	console.log("Coinbase buy");
// 	console.log(data);	
// })
// .catch(error => console.log(error.message));

// queryCoinBaseSell()
// .then(data => {
// 	console.log("Coinbase sell");
// 	console.log(data);	
// })
// .catch(error => console.log(error.message));

// queryBlockChain()
// .then(data => {
// 	console.log("Blockchain.com API Buy");
// 	console.log(data.buy);
// 	console.log("Blockchain.com API Sell");
// 	console.log(data.sell);
// })
// .catch(error => console.log(error.message));

