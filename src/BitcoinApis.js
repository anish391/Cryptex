const fetch = require('node-fetch');

async function queryCoinBaseBuy(){
	const coinBaseBitcoinUrl = "https://api.coinbase.com/v2/prices/buy?currency=USD"
	const bitCoinResponse = await fetch(coinBaseBitcoinUrl);
	const bitCoinData = await bitCoinResponse.json();
	const coinBaseEthereumUrl = "https://api.coinbase.com/v2/prices/ETH-USD/buy"
	const ethereumResponse = await fetch(coinBaseEthereumUrl);
	const ethereumData = await ethereumResponse.json();
	return {"BitCoin": bitCoinData.data,"Ethereum": ethereumData.data};
}

async function queryCoinBaseSell(){
	const coinBaseBitcoinUrl = "https://api.coinbase.com/v2/prices/sell?currency=USD"
	const bitCoinResponse = await fetch(coinBaseBitcoinUrl);
	const bitCoinData = await bitCoinResponse.json();
	const coinBaseEthereumUrl = "https://api.coinbase.com/v2/prices/ETH-USD/sell"
	const ethereumResponse = await fetch(coinBaseEthereumUrl);
	const ethereumData = await ethereumResponse.json();
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

async function queryKraken(){
	const krakenBitcoinUrl = "https://api.kraken.com/0/public/Ticker?pair=XXBTZUSD";
	const krakenBitcoinResponse = await fetch(krakenBitcoinUrl);
	const krakenBitcoinData = await krakenBitcoinResponse.json();

	const krakenEthereumUrl = "https://api.kraken.com/0/public/Ticker?pair=XETHZUSD";
	const krakenEthereumResponse = await fetch(krakenEthereumUrl);
	const krakenEthereumData = await krakenEthereumResponse.json();

	return {"BitCoin": krakenBitcoinData.result.XXBTZUSD, "Ethereum": krakenEthereumData.result.XETHZUSD};
}

async function queryGemini(){
	const geminiBitcoinUrl = "https://api.gemini.com/v1/pubticker/btcusd";
	const geminiBitcoinResponse = await fetch(geminiBitcoinUrl);
	const geminiBitcoinData = await geminiBitcoinResponse.json();

	const geminiEthereumUrl = "https://api.gemini.com/v1/pubticker/ethusd";
	const geminiEthereumResponse = await fetch(geminiEthereumUrl);
	const geminiEthereumData = await geminiEthereumResponse.json();
	return {"BitCoin": geminiBitcoinData, "Ethereum": geminiEthereumData};
}

export {queryCoinBaseBuy, queryCoinBaseSell, queryBlockChain, queryCoinMarketCap, queryKraken, queryGemini};


