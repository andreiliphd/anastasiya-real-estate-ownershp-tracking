var Verifier = artifacts.require('../SolnSquareVerifier');
const truffleAssert = require('truffle-assertions');
let proof1 = require('./proof1.json');
let proof2 = require('./proof2.json');
let proof3 = require('./proof3.json');
let proof4 = require('./proof4.json');
let proof5 = require('./proof5.json');

module.exports = async function(callback) {
    verifier = await Verifier.deployed();
    console.log("Deployed contract.");
    const accounts = await web3.eth.getAccounts();
    console.log("Got accounts.");
    web3.eth.defaultAccount = web3.eth.accounts[0];
    console.log("Set defauls account.");
    account_one = accounts[0];
    account_two = accounts[1];
    account_three = accounts[2];
    account_four = accounts[3];
    account_five = accounts[4];
    account_six = accounts[5];
    console.log("convertedProof1");
    convertedProof1 = {
        "A": [web3.utils.toBN(proof1.proof.a[0]).toString(), web3.utils.toBN(proof1.proof.a[1]).toString()],
        "B": [[web3.utils.toBN(proof1.proof.b[0][0]).toString(), web3.utils.toBN(proof1.proof.b[0][1]).toString()],
            [web3.utils.toBN(proof1.proof.b[1][0]).toString(), web3.utils.toBN(proof1.proof.b[1][1]).toString()]
        ],
        "C": [web3.utils.toBN(proof1.proof.c[0]).toString(), web3.utils.toBN(proof1.proof.c[1]).toString()],
        "inputs": [web3.utils.toBN(proof1.inputs[0]).toString(), web3.utils.toBN(proof1.inputs[1]).toString()]
    };
    console.log("convertedProof2");
    convertedProof2 = {
        "A": [web3.utils.toBN(proof2.proof.a[0]).toString(), web3.utils.toBN(proof2.proof.a[1]).toString()],
        "B": [[web3.utils.toBN(proof2.proof.b[0][0]).toString(), web3.utils.toBN(proof2.proof.b[0][1]).toString()],
            [web3.utils.toBN(proof2.proof.b[1][0]).toString(), web3.utils.toBN(proof2.proof.b[1][1]).toString()]
        ],
        "C": [web3.utils.toBN(proof2.proof.c[0]).toString(), web3.utils.toBN(proof2.proof.c[1]).toString()],
        "inputs": [web3.utils.toBN(proof2.inputs[0]).toString(), web3.utils.toBN(proof2.inputs[1]).toString()]
    };
    console.log("convertedProof3");
    convertedProof3 = {
        "A": [web3.utils.toBN(proof3.proof.a[0]).toString(), web3.utils.toBN(proof3.proof.a[1]).toString()],
        "B": [[web3.utils.toBN(proof3.proof.b[0][0]).toString(), web3.utils.toBN(proof3.proof.b[0][1]).toString()],
            [web3.utils.toBN(proof3.proof.b[1][0]).toString(), web3.utils.toBN(proof3.proof.b[1][1]).toString()]
        ],
        "C": [web3.utils.toBN(proof3.proof.c[0]).toString(), web3.utils.toBN(proof3.proof.c[1]).toString()],
        "inputs": [web3.utils.toBN(proof3.inputs[0]).toString(), web3.utils.toBN(proof3.inputs[1]).toString()]
    };
    console.log("convertedProof4");
    convertedProof4 = {
        "A": [web3.utils.toBN(proof4.proof.a[0]).toString(), web3.utils.toBN(proof4.proof.a[1]).toString()],
        "B": [[web3.utils.toBN(proof4.proof.b[0][0]).toString(), web3.utils.toBN(proof4.proof.b[0][1]).toString()],
            [web3.utils.toBN(proof4.proof.b[1][0]).toString(), web3.utils.toBN(proof4.proof.b[1][1]).toString()]
        ],
        "C": [web3.utils.toBN(proof4.proof.c[0]).toString(), web3.utils.toBN(proof4.proof.c[1]).toString()],
        "inputs": [web3.utils.toBN(proof4.inputs[0]).toString(), web3.utils.toBN(proof4.inputs[1]).toString()]
    };
    console.log("convertedProof5");
    convertedProof5 = {
        "A": [web3.utils.toBN(proof5.proof.a[0]).toString(), web3.utils.toBN(proof5.proof.a[1]).toString()],
        "B": [[web3.utils.toBN(proof5.proof.b[0][0]).toString(), web3.utils.toBN(proof5.proof.b[0][1]).toString()],
            [web3.utils.toBN(proof5.proof.b[1][0]).toString(), web3.utils.toBN(proof5.proof.b[1][1]).toString()]
        ],
        "C": [web3.utils.toBN(proof5.proof.c[0]).toString(), web3.utils.toBN(proof5.proof.c[1]).toString()],
        "inputs": [web3.utils.toBN(proof5.inputs[0]).toString(), web3.utils.toBN(proof5.inputs[1]).toString()]
    };
    console.log("Adding solutions 1");
    try {
        let result1 = await verifier.addSolution(convertedProof1.A, convertedProof1.B, convertedProof1.C, convertedProof1.inputs, {from: account_one});
    } catch (e) {
        console.log("Error ", e);
    }
    console.log("Adding solutions 2");
    try {
        let result2 = await verifier.addSolution(convertedProof2.A, convertedProof2.B, convertedProof2.C, convertedProof2.inputs, {from: account_one});
    } catch (e) {
        console.log("Error ", e);
    }
    console.log("Adding solutions 3");
    try {
        let result3 = await verifier.addSolution(convertedProof3.A, convertedProof3.B, convertedProof3.C, convertedProof3.inputs, {from: account_one});
    } catch (e) {
        console.log("Error ", e);
    }
    console.log("Adding solutions 4");
    try {
        let result4 = await verifier.addSolution(convertedProof4.A, convertedProof4.B, convertedProof4.C, convertedProof4.inputs, {from: account_one});
    } catch (e) {
        console.log("Error ", e);
    }
    console.log("Adding solutions 5");
    try {
        let result5 = await verifier.addSolution(convertedProof5.A, convertedProof5.B, convertedProof5.C, convertedProof5.inputs, {from: account_one});
    } catch (e) {
        console.log("Error ", e);
    }
    console.log("Minting token 1");
    try {
        let status1 = await verifier.mintNewNFT(81, 1, account_one, {from: account_one});
    } catch (e) {
        console.log("Error ", e);
    }
    console.log("Minting token 2");
    try {
        let status2 = await verifier.mintNewNFT(4, 1, account_one, {from: account_one});
    } catch (e) {
        console.log("Error ", e);
    }
    console.log("Minting token 3");
    try {
        let status3 = await verifier.mintNewNFT(9, 1, account_one, {from: account_one});
    } catch (e) {
        console.log("Error ", e);
    }
    console.log("Minting token 4");
    try {
        let status4 = await verifier.mintNewNFT(1, 1, account_one, {from: account_one});
    } catch (e) {
        console.log("Error ", e);
    }
    console.log("Minting token 5");
    try {
        let status5 = await verifier.mintNewNFT(25, 1, account_one, {from: account_one});
    } catch (e) {
        console.log("Error ", e);
    }
    callback();
}
