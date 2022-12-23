# LCG_NFT

Project: The NFT of Babel

## Intro:

This is a smart contract that encompasses all possible pictures of a certain dimension. 
We are inspired by Jorge Luis Borges’ short story The Library of Babel, 
an imaginative thought experiment where a heavenly library with infinite hexagonal rooms contains every possible book up to 410 pages. 
Instead of bringing about pious librarians seeking divine truths in infinity, our NFT of babel may present an interesting opportunity for us to explore the idea, 
the absurdity of digital ownership on blockchain.

## How to use it:

First clone this repo:

Then go to the dir and run:

```
npm install
npx hardhat node
```
This will initialize the hardhat Network.

Then we run this command in other terminal to deploy the contracts:

```
npx hardhat --network localhost run scripts/deploy.js
```

Now we can start the react app in a new terminal:

```
cd my-app
npm install
npm run start
```
Open http://localhost:3000/ to see the website. You will need to have Metamask installed and listening to localhost 8545.

After set up the metamask and connect, run this to load assets, you can use the same terminal for deploy step:

```
npx hardhat --network localhost addAssets "assets"  
```

## Tips:

Because each action in this website is directly sending a transaction to the contract. It could be slow because there are many encoding and decoding in the contract to compute the image of NFT. So please wait for the transaction to complete and don't click other pages in this website to cause more transactions waiting.

If there is a problem in transaction, you may restart the hardhat network.


### Please send email to zc2396@nyu.edu for any questions


Scott Chu & Linsong You 2022
