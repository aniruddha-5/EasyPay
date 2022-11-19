// https://eth-goerli.g.alchemy.com/v2/LyJP9MtkKTNBeMGi-LYyNEiMH5L_YoQA

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/LyJP9MtkKTNBeMGi-LYyNEiMH5L_YoQA',
      accounts: ['c4c049c88cde7ac0d76e654b62675ac2c8b37ae2ec8141c028a19bc4bc81dff3'],
    },
  },
};