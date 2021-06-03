# Anstasiya - Real Estate Ownership Tracking

============

Smart contract for tracking ownership of real estate.

---

## Features
- ERC721, ERC 165 compliant
---


## Deploy details
- Address of the contract on Rinkeby 0xebbf3e3d268d0c0a6f4e7428704a3d546e5543d8
---

## Dependencies

- "openzeppelin-solidity": "^2.2.0",
- "truffle": "^5.3.8",
- "@truffle/hdwallet-provider": "^1.4.0",
- "truffle-assertions": "0.9.2",
- "solc": "^0.5.2",
- "solc-js": "^0.5.2"
---

## Setup
Clone this repo:

```
git clone https://github.com/andreiliphd/anastasiya-real-estate-ownershp-tracking.git
```

---

## Usage
Just run:
```
npm install
truffle compile
truffle migrate --reset --network rinkeby
```
If you want see live solution with transactions made visit [https://testnets.opensea.io/collection/real-estate-ownership-tracker-v3/](https://testnets.opensea.io/collection/real-estate-ownership-tracker-v3/).

---

## Test
Just run:
```
truffle develop
test
```
---

## Minting
Run:
```
npm exec scripts/mint.js --network rinkeby
```
---

## Reference
I used Stefanel repository to debug why contract is not listed. 
The problem was that I need to mint tokens and wait while OpenSea process it.
```
git clone https://github.com/StefanelStan/Blockchain-Capstone-Real-Estate-Marketplace
```
---

## License
MIT