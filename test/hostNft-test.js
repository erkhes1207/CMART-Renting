const { expect } = require("chai");
const { ethers } = require("hardhat");
const init = require("./userInputHelper");

describe("HostNft - Functionality Test", function () {

  beforeEach(async function () {
    let accounts = await ethers.getSigners();
    this.redu = accounts[0]
    this.chingun = accounts[1]
    const inputDetails = await init();
    this.HostFactory = await ethers.getContractFactory("HostFactory");
    this.hostFactoryContract = await this.HostFactory.deploy();
    await this.hostFactoryContract.deployed();
    await this.hostFactoryContract.connect(this.redu).createHost(inputDetails)
  });

    it("checks nft's details", async function () {
      
    let nftId = await this.hostFactoryContract.addressToHostId(this.redu.address)
    let nftAddress = await this.hostFactoryContract.nft() 
    const nft = await ethers.getContractAt('HostNFT',nftAddress)
    const nftDetail = await nft.getHostDetail(nftId)

    expect(nftDetail.name.firstName).to.equal("Bat-Ireedui");
    expect(nftDetail.name.lastName).to.equal("Jargal");
    
    expect(nftDetail.linkedIn).to.equal("https://www.linkedin.com/in/mnkhod/");
    expect(nftDetail.email).to.equal("mnkhod.dev@gmail.com");
    expect(nftDetail.eventIds.length).to.equal(0);

    expect(await this.hostFactoryContract.idToHostAddress(nftId)).to.equal(this.redu.address);
    expect(await this.hostFactoryContract.hostHasNft(this.redu.address)).to.equal(true);
    expect(await this.hostFactoryContract.addressToHostId(this.redu.address)).to.equal(0);
    
  });

});

