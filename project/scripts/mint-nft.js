// NodeJS imports
require("dotenv").config();
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const contract = require("../artifacts/contracts/MyNFT.sol/TorNFT.json");

// logic
const API_URL = process.env.API_URL;
const alchemyWeb3 = createAlchemyWeb3(API_URL);

const contractAddress = "0x7926DfB9d1582751255647a34006Fe2A09513187"; // CONTRACT ADDRESS
const nftContract = new alchemyWeb3.eth.Contract(contract.abi, contractAddress);

const METAMASK_PUBLIC_KEY = process.env.METAMASK_PUBLIC_KEY;
const METAMASK_PRIVATE_KEY = process.env.METAMASK_PRIVATE_KEY;

async function mintNFT(tokenURI) {
	// get the nonce - nonce is needed for security reasons. It keeps track of the number of
	// transactions sent from our address and prevents replay attacks.
	const nonce = await alchemyWeb3.eth.getTransactionCount(
		METAMASK_PUBLIC_KEY,
		"latest"
	);
	const tx = {
		from: METAMASK_PUBLIC_KEY, // our MetaMask public key
		to: contractAddress, // the smart contract address we want to interact with
		nonce: nonce, // nonce with the no of transactions from our account
		gas: 1000000, // fee estimate to complete the transaction
		data: nftContract.methods
			.createNFT("0x21e014639737C2c2Efef228a759c2D3363c5FA42", tokenURI) // account receival
			.encodeABI(), // call the createNFT function from our OsunRiverNFT.sol file and pass the account that should receive the minted NFT.
	};

	const signPromise = alchemyWeb3.eth.accounts.signTransaction(
		tx,
		METAMASK_PRIVATE_KEY
	);
	signPromise
		.then((signedTx) => {
			alchemyWeb3.eth.sendSignedTransaction(
				signedTx.rawTransaction,
				function (err, hash) {
					if (!err) {
						console.log(
							"The hash of our transaction is: ",
							hash,
							"\nCheck Alchemy's Mempool to view the status of our transaction!"
						);
					} else {
						console.log(
							"Something went wrong when submitting our transaction:",
							err
						);
					}
				}
			);
		})
		.catch((err) => {
			console.log(" Promise failed:", err);
		});
}
// https://ipfs.io/ipfs/QmbiE1iQ3448dhmG7ZRXk8BMLUsXTQJBbji2qEZh8EuTTd => IMAGE
// https://ipfs.io/ipfs/QmSxRrg7sccULyNueJLSzS63hhiULgX5be3UidS9vvyZWr => NFT.JSON
mintNFT("https://ipfs.io/ipfs/QmSxRrg7sccULyNueJLSzS63hhiULgX5be3UidS9vvyZWr");
