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

export {queryCoinBaseBuy, queryCoinBaseSell, queryBlockChain};

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

