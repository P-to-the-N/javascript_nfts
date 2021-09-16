# QuickNode tutorial

## Create the Javascript Project

- Resource <https://blog.logrocket.com/how-to-create-nfts-with-javascript/>

```!bash
❯ npx hardhat compile
Compiling 13 files with 0.8.0
Warning: Visibility for constructor is ignored. If you want the contract to be non-deployable, making it "abstract" is sufficient.
  --> contracts/MyNFT.sol:20:5:
   |
20 |     constructor() public ERC721("TheOsunRiver", "TOR") {}
   |     ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^


Compilation finished successfully
```

```!bash
❯ npx hardhat run scripts/deploy.js --network ropsten
Deploying contracts with the account: 0x21e014639737C2c2Efef228a759c2D3363c5FA42
Account balance: 300000000000000000
Contract deployed to address: 0x7926DfB9d1582751255647a34006Fe2A09513187
```

- Setup all GEM and NFT.json then:

```!bash
❯ yarn mint                                         188.155.26.115   100% 
yarn run v1.22.5
$ node scripts/mint-nft.js
The hash of our transaction is:  0x44fbf9cd268ace261187c72dff750c29c010e6fd9af33f4f658b75e20f4411e3
Check Alchemy's Mempool to view the status of our transaction!
✨  Done in 36.29s.
```

## Work with ipfs

- Resource <https://www.quicknode.com/guides/solidity/how-to-create-and-deploy-an-erc-721-nft>

## Ifps

1. $ `ipfs init`
2. $ `ipfs daemon`
3. $ `ipfs add art.png`
4. $ `ipfs add nft.json`

```bash
❯ ipfs add art.jpg
added QmQEVVLJUR1WLN15S49rzDJsSP7za9DxeqpUzWuG4aondg art.jpg
 328.26 KiB / 328.26 KiB [=============================================] 100.00%
```

```bash
❯ ipfs add nft.json
added QmbcKfeSC4qNsxMvg24yqKFiJBEzCCHhw5EAW9rKiPmHG3 nft.json
 166 B / 166 B [=======================================================] 100.00%
```
