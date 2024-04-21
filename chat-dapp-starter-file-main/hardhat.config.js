require("@nomicfoundation/hardhat-toolbox");
//require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      accounts: {
        mnemonic: "derive vast laundry evoke exotic dwarf mesh disease south fury bean menu",
      },
      chainId: 1337,
    },
  },
};
