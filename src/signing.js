const { BlockChain, Transaction } = require('./blockchain');
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('25aee4596464e07b634878d244f2ac48dd480cefd4b29083e44497cce1621f6b');
const myWalletAddress = myKey.getPublic('hex');

let neguCoin = new BlockChain();

const tx1 = new Transaction(myWalletAddress, 'public key goes here', 10);
tx1.signTransaction(myKey);
neguCoin.addTransaction(tx1);

console.log('\n Starting the miner...');
neguCoin.minePendingTransactions(myWalletAddress);

console.log('\n Balance of Xavier is ' + neguCoin.getBalanceOfAddress(myWalletAddress));

// neguCoin.chain[1].transactions[0].amount = 1;
console.log('Is chain valid? ' + neguCoin.isChainValid());
// console.log(JSON.stringify(neguCoin, null, 4));
