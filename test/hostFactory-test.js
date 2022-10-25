const { expect } = require("chai");
const { ethers } = require("hardhat");
const init = require("./userInputHelper");
// const moment = require("moment");

describe("HostFactory - Functionality Test", function () {

  beforeEach(async function () {
    let accounts = await ethers.getSigners();
    this.redu = accounts[0]
    this.chingun = accounts[1]
    this.HostFactory = await ethers.getContractFactory("HostFactory");
    this.hostFactoryContract = await this.HostFactory.deploy();
    await this.hostFactoryContract.deployed();
  });

  it("checks host creation process - Success/Failure", async function () {
    const inputDetails = await init();

    await expect(this.hostFactoryContract.connect(this.redu).createHost(inputDetails)).to.emit(this.hostFactoryContract, "hostNFTMinted").withArgs(this.redu.address, 0);

    await expect(this.hostFactoryContract.connect(this.redu).createHost(inputDetails)).to.be.revertedWith("ACCOUNT ALREADY HAS NFT");

  });

  it("checks host deletion process", async function () {
    const inputDetails = await init();

    await this.hostFactoryContract.connect(this.redu).createHost(inputDetails)

    let redusId = await this.hostFactoryContract.connect(this.redu).addressToHostId(this.redu.address)

    await expect(this.hostFactoryContract.connect(this.chingun).deleteHost(redusId)).to.be.revertedWith("NOT THE OWNER OF THIS NFT");

    await expect(this.hostFactoryContract.connect(this.redu).deleteHost(redusId)).to.emit(this.hostFactoryContract, "hostNFTBurned").withArgs(this.redu.address, 0);
    
    expect(await this.hostFactoryContract.hostLength()).to.equal(0);
    expect(await this.hostFactoryContract.hostHasNft(this.redu.address)).to.equal(false);

    });

});