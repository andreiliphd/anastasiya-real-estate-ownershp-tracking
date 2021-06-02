var ERC721Mintable = artifacts.require('../ERC721Mintable');
const truffleAssert = require('truffle-assertions');

contract('TestERC721Mintable', accounts => {
    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721Mintable.deployed();

            this.account_one = accounts[0];
            this.account_two = accounts[1];
            this.account_three = accounts[2];
            this.account_four = accounts[3];
            this.account_five = accounts[4];
            this.account_six = accounts[5];

            // TODO: mint multiple tokens
            this.token1 = 1;
            this.token2 = 2;
            this.token3 = 3;
            this.token4 = 4;
        })

        it('should return total supply', async function () {
            let mint1 = await this.contract.mint(this.account_one, this.token1, {from: this.account_one});
            let mint2 = await this.contract.mint(this.account_two, this.token2, {from: this.account_one});
            let mint3 = await this.contract.mint(this.account_three, this.token3, {from: this.account_one});
            let mint4 = await this.contract.mint(this.account_four, this.token4, {from: this.account_one});
            let total = await this.contract.totalSupply({from: this.account_one});
            assert.equal(total, 4, "Total supply doesn't match with expected value");
        })

        it('should get token balance', async function () {
            let balance1 = await this.contract.balanceOf(this.account_one, {from: this.account_one});
            assert.equal(Number(balance1), 1, "Balance doesn't match");
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () {
            let uri = await this.contract.tokenURI(this.token2, {from: this.account_one});
            assert.equal(uri, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/2", "Token URI is not correct");
        })

        it('should transfer token from one owner to another', async function () {
            let uri = await this.contract.transferFrom(this.account_one, this.account_five, this.token1, {from: this.account_one});
            let owner = await this.contract.ownerOf(this.token1, {from: this.account_one});
            assert.equal(owner, this.account_five, "Ownership is not transferred");
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () {
            this.contract = await ERC721Mintable.deployed();
            this.account_one = accounts[0];
            this.account_two = accounts[1];
            this.account_three = accounts[2];
            this.account_four = accounts[3];
            this.account_five = accounts[4];
            this.account_six = accounts[5];

            this.token1 = 1;
            this.token2 = 2;
            this.token3 = 3;
            this.token4 = 4;
        })

        it('should fail when minting when address is not contract owner', async function () {
            let fail = false;
            try {
                let mint6 = await this.contract.mint(this.account_four, this.token4, {from: this.account_six});
            } catch (e) {
                fail = true;
            }
            assert.equal(fail, true, "Ownership has beee transferred");
        })

        it('should return contract owner', async function () {
            let owner = await this.contract.owner.call();
            assert.equal(owner, this.account_one, "Owner address is not correct");
       })
    });
})