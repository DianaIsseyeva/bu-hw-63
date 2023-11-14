require('@nomicfoundation/hardhat-toolbox');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    compilers: [{ version: '0.7.1' }, { version: '0.8.1' }],
    overrides: {
      'contracts/Example1.sol': {
        version: '0.8.1',
      },
      'contracts/Example2.sol': {
        version: '0.7.1',
      },
    },
  },
  defaultNetwork: 'hardhat',
  networks: {
    hardhat: {
      loggingEnabled: true,
    },
  },
};
