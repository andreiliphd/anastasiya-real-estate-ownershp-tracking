var ERC721Mintable = artifacts.require('../ERC721Mintable');

contract('TestERC721Mintable', accounts => {

    const account_one = accounts[0];
    const account_two = accounts[1];
    const account_three = accounts[2];
    const account_four = accounts[3];
    const account_five = accounts[4];
    const account_six = accounts[5];


    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721Mintable.deployed();
            let token1 = 1;
            let token2 = 2;
            let token3 = 3;

            // TODO: mint multiple tokens
            await this.contract.mint(account_one, token1, {from: account_one});
        })

        it('should return total supply', async function () {
            let total = await this.contract.totalSupply({from: account_one});
            assert.equal(total, 3, "Total supply is not matched with expected value");
        })

        it('should get token balance', async function () {
            let balance1 = await this.contract.balanceOf(account_one, {from: account_one});

            assert.equal(Number(balance1), 1, "Balance doesn't match");

        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            
        })

        it('should transfer token from one owner to another', async function () { 
            
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () {
            this.contract = await ERC721Mintable.deployed();
        })

        it('should fail when minting when address is not contract owner', async function () { 
            
        })

        it('should return contract owner', async function () { 
            
        })

    });
})