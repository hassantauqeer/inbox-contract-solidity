const assret = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 =new Web3(ganache.provider());

beforeEach(async function (){
    accounts = await web3.eth.getAccounts();
});

describe('inbox', function () {
    it('deploys a contract', function () {
        console.log(accounts)
    });
})