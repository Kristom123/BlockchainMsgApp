# Welcome to ORCA! 
## A Blockchain-Based Messaging App for Intra-Collegiate Correspondence

Here is a link to our Demo video:
https://utdallas.box.com/s/d16b2nv3cooywn488yqldgilz3hko2xj

Although the instructions are included here, they are reiterated in the `chat-dapp-starter-file-main` folder README, as well.

![Dashboard Login-op1](https://github.com/Kristom123/BlockchainMsgApp/assets/25617730/c7fd1115-147c-4a17-a74d-ff82f729d0c1)

## Thank you so much!


# SETUP INSTRUCTIONS:

Building and Deploying a Web3 Chat Application (DApp) with Next.js, Hardhat, MetaMask, Solidity & Ethereum

## Project Overview

* Objective: Develop a secure and immutable messaging platform for university communication.
* Key Features: End-to-end encrypted communication for students and faculty, Immutable message history ensures data integrity, Non-repudiation verifies message authenticity and sender association, User profiles and authentication enhance security.
* Motivation: Address the need for secure and direct communication among students, faculty, and staff. By removing intermediaries, the platform empowers users and validates interactions, fostering trust within educational institutions.

## Instructions

**Assumptions**: 
* Visual Studio Code installed with necessary plugins (e.g., Solidity)
* Using Chrome browser
* Most commands require `cd`-ing into the `chat-dapp-starter-file-main` directory

### Cloning the Repo and Installing Dependencies
After entering the desired directory from the terminal, run the git clone command:
`git clone <repo link>`

Then, after `cd`-ing into the `chat-dapp-starter-file-main` directory, run the following:
`npm install`

### Setting up MetaMask and process.env
Add the MetaMask Chrome extension to the browser and set up a new wallet (if first time) - be sure to copy the mnemonic device and keep it somewhere safe.

In the `chat-dapp-starter-file-main` directory, create a new file called `process.env` and insert the following into that file
> SEED_PHRASE = "<sequence of words (mnemonic)>"

Note that the `hardhat.config.js` file already reads from `process.env`, but since the phrase supposed to be kept secret, `process.env` is in our `.gitignore`

Please create a few accounts; they will have 0 ETH for now, but once there are connected to the Hardhat network, they will be filled with test ETH

### Running the Application
In the `chat-dapp-starter-file-main` directory, run the following command to deploy the smart contract

`npx hardhat run scripts/deploy.js --network localhost`

This command will produce (for example)
> Contract Address: 0x5FbDB2315678afecb367f032d93F642f64180aa3

Copy the address (e.g., 0x5FbDB2315678afecb367f032d93F642f64180aa3) and paste it in the `Context/constants.js` file as the ChatAppAddress variable

Then run `npm run dev` to run the website locally; copy and paste the URL into the browser with the MetaMask extension

### Connecting the Hardhat Network for Test ETH

First, in the terminal & directory, run the command `npx hardhat node`; this starts the Hardhat Network

In the MetaMask extension, go to Settings -> Networks -> Add Network. Then click "Add a Network Manually" (red box)
<img width="500" alt="metamask-network" src="https://github.com/Kristom123/BlockchainMsgApp/assets/25617730/77719f46-fa76-4dd8-87a0-af09253d6d5d">

Then enter the following details; note that the "New RPC URL" will be produced by the above command, but the URL in the picture should work as well (since the port is the same)

<img width="346" alt="Screenshot 2024-04-22 at 1 09 44 PM" src="https://github.com/Kristom123/BlockchainMsgApp/assets/25617730/99097fdd-ac48-44a6-b7d9-0bd8d6b2edd2">

Ensure MetaMask is connected to that network, and then you will see that all your accounts are now filled with ETH. 

### Debugging
Sometimes MetaMask is weird, in which you may want to mess around with the network (e.g., replace localhost with 127.0.0.1) or click "Clear activity tab data" in Settings -> Advanced

<img width="346" alt="Screenshot 2024-04-22 at 1 13 10 PM" src="https://github.com/Kristom123/BlockchainMsgApp/assets/25617730/f38242b9-b7b3-4016-934f-169e916d0994">

If you are having issues with the `npx hardhat node` command (due to the mnemonic) just copy and paste the secret phrase into the  mnemonic field of the `hardhat.config.js` file (i.e., replace  mnemonic: process.env.SEED_PHRASE, with  mnemonic: "<insert phrase>",

Just be sure not to push it anywhere.

# Thank you so much for checking out our repo!
