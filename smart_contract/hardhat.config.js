require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/eSbBzWSkvnFCkLfnjiMelhEk-06Ilidm",
      accounts: [
        "c5bb312bd366035dac56b355eb880eca8855d29760d38f640132d7d6c08a8a9a",
      ],
    },
  },
};
