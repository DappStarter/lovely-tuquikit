require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife off suggest name riot still concert harvest forget fringe gaze'; 
let testAccounts = [
"0xe95300cd026d05b7b10ba77aa42f9ddc8dcd146b200adb9059e292417d2e03a3",
"0xcc42ff79e3645a8707f146fe00ad5cfabd38ae35462e5750788bc502391aa187",
"0xf2279f54d44714d514e364568322c8ce8feb3d3a26036638a7f30c2b6018f565",
"0x3b19e3bf85adb29e3a709968815308707fbd19ffae3d2ac6c9694c3bb2455370",
"0x822db99e88194ab56592be0922a915a3effd2da2b035dcf4ff133bd5891214f6",
"0x957816f920b30988a5ebae02347b821b1764f53e60a90a0968ddc9aa193712b3",
"0x3f614bdfb329546116ed8650db03f02cf3afa706116e511662716113c9a7dbc9",
"0x6afd1ec06b1f333e5206ff23b4d81ea2b28e35cd966cf53fbb1a15fa6d7dc7e3",
"0x28e5e9470cb89f6fd42da64296abf3dd7d016aede550ab346e2f6e44ddbb420f",
"0x97fcdb628db7947a4f9a3533dd991dd1469d5a231566e055dc1a0caa14916fc0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
