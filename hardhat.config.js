require('dotenv').config()

require("@nomicfoundation/hardhat-toolbox");
require('hardhat-abi-exporter');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  networks: {
    test: {
      url: "http://127.0.0.1:8545",
    },
    klaytn: {
      chainId: 8217,
      url: "https://klaytn02.fandom.finance",
      accounts: [process.env.PRIVATE_KEY]
    },
    klaytnTest: {
      chainId: 1001,
      url: "https://api.baobab.klaytn.net:8651",
      accounts: [process.env.PRIVATE_KEY]
    },
    polygonTest: {
      chainId: 80001,
      url: "https://matic-mumbai.chainstacklabs.com",
      accounts: [process.env.PRIVATE_KEY]
    },
  },
  abiExporter: {
    path: './app/abi',
    runOnCompile: true,
    clear: true,
    flat: true,
    spacing: 2,
  }
};
