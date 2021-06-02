// migrating the appropriate contracts
var ERC721Mintable = artifacts.require("./ERC721Mintable");
var Verifier = artifacts.require("./Verifier");
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = function(deployer) {
    deployer.deploy(ERC721Mintable, "Real Estate Ownership Tracker", "REOT");
    deployer.deploy(Verifier).then(instance => deployer.deploy(SolnSquareVerifier, instance.address, "Real Estate Ownership Tracker", "REOT"));
}
