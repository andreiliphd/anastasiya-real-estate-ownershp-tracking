var Verifier = artifacts.require('../SolnSquareVerifier');
const truffleAssert = require('truffle-assertions');
let proof = require('./proof.json');

class Minter
{
    async init() {
        this.verifier = await Verifier.deployed();
        const accounts = await web3.eth.getAccounts()
        this.account_one = accounts[0];
        this.account_two = accounts[1];
        this.account_three = accounts[2];
        this.account_four = accounts[3];
        this.account_five = accounts[4];
        this.account_six = accounts[5];
        this.proof = proof;
        this.convertedProof = {
            "A": [web3.utils.toBN(this.proof.proof.a[0]).toString(), web3.utils.toBN(this.proof.proof.a[1]).toString()],
            "B": [[web3.utils.toBN(this.proof.proof.b[0][0]).toString(), web3.utils.toBN(this.proof.proof.b[0][1]).toString()],
                [web3.utils.toBN(this.proof.proof.b[1][0]).toString(), web3.utils.toBN(this.proof.proof.b[1][1]).toString()]
            ],
            "C": [web3.utils.toBN(this.proof.proof.c[0]).toString(), web3.utils.toBN(this.proof.proof.c[1]).toString()],
            "inputs": [web3.utils.toBN(this.proof.inputs[0]).toString(), web3.utils.toBN(this.proof.inputs[1]).toString()]
        };
    }

    async addSolution() {
        console.log("Adding solution");
        let checkResult = await this.verifier.addSolution(this.convertedProof.A, this.convertedProof.B, this.convertedProof.C, this.convertedProof.inputs, {from: this.account_one});
        // truffleAssert.eventEmitted(checkResult, 'SolutionAdded', (ev) => {
        //     console.log("SolutionAdded event ");
        //     return true;
        // });
    }

    async mint() {
        console.log("Minting token");
        let checkResult = await this.verifier.mintNewNFT(81,1,this.account_one, {from: this.account_one});
    }
}

module.exports = async function(callback) {

    console.log("IT WORKS");
    let minter = new Minter();
    await minter.init();
    await minter.addSolution();
    await minter.mint();

    callback();
}
