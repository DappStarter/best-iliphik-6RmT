require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give clog tackle food nothing cruise script artwork hen light army giant'; 
let testAccounts = [
"0x68e99a25a63a07a6bc0cd0b8ea6eecbf77b94ada7c576b7539266fcd6ad1d538",
"0x476f0170d9d3151604ae10340423e2892ff978c5e7fef0d9159718ac91c616d2",
"0xb84440b3fcef78dd666315fa9ae161f4b9eddb6adbd9bc0eaf8956cd82cb3ecf",
"0x91ff04fe716ddb30d4ada8c55f3f83a0983b060294a6a398e03a1f0f5af8de05",
"0x4b1b1b9f9e97e163f1243227a518d15f5dd44d6a12257d8b9293ac8353e75aa5",
"0x870c058305ce736f36ac827ca298fa0bfbb59c509ed19ce696372fe7c6bb8bef",
"0xec07ebfda2b5ef1150b10dac83efd36f7564aa2ec76855fde1d99a5ae409e83f",
"0xfcdcbbbe1e1ba88ea771fa2fc7de5f860f202f2328da41435952454505327bc7",
"0x31549ab50d93d99ad85c6d0d8532f3665129fa76dd9252dfc4eb35e1f304e73e",
"0xe1fe0eb6d447c6cf20967590528ac60cf39fa9c0d60bf68e044c9309408579e3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
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
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

