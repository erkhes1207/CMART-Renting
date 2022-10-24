const { expect } = require("chai");
const { ethers } = require("hardhat");
const init = require("./inputHelper");
// const moment = require("moment");

describe("HostFactory - Functionality Test", function () {

  beforeEach(async function () {
    let accounts = await ethers.getSigners();
    this.redu = accounts[0]
    this.chingun = accounts[1]
    this.HostFactory = await ethers.getContractFactory("HostFactory");
    this.hostFactoryContract = await this.HostFactory.deploy();
    await this.hostFactoryContract.deployed();

    const firstName = "Bat-Ireedui";
    const lastName = "Jargal";
    
    const gender = "Male";
    const email = "redu@gmail.com";
    const phoneNumber = 11223344;
    const governmentId = "https://www.ipfs.com/in/url/dsds";
    
    const country = "Mongolia";
    const street = "Baga Toiruu";
    const aptSuite = "14200";
    const city = "Ulaanbaatar";
    const state = "Ulaanbaatar";
    const zipCode = "19571";
    
    const emergencyName = "Chingun";
    const emergencyRelationship = "Friend";
    const emergencyEmail = "chingunee.dev@gmail.com";
    const emergencyPhoneNumber = 11223344;

    const blockNumber = await ethers.provider.getBlockNumber()
    const block = await ethers.provider.getBlock(blockNumber)
    const joinedAt = block.timestamp;

    const emergencyContactDetail = [emergencyName, emergencyRelationship, emergencyEmail, emergencyPhoneNumber];

    const addressDetail = [country, street, aptSuite, city, state, zipCode];
    
    const fullName = [firstName, lastName];

    userDetails = [fullName, gender, email, phoneNumber, governmentId, addressDetail, emergencyContactDetail, joinedAt];

  });

  it("checks host creation process - Success/Failure", async function () {
    console.log(await init());

    await expect(this.hostFactoryContract.connect(this.redu).createHost(userDetails)).to.emit(this.hostFactoryContract, "hostNFTMinted").withArgs(this.redu.address, 0);

    await expect(this.hostFactoryContract.connect(this.redu).createHost(userDetails)).to.be.revertedWith("ACCOUNT ALREADY HAS NFT");

  });

  it("checks host deletion process", async function () {
    
    await this.hostFactoryContract.connect(this.redu).createHost(userDetails)

    let redusId = await this.hostFactoryContract.connect(this.redu).addressToHostId(this.redu.address)

    await expect(this.hostFactoryContract.connect(this.chingun).deleteHost(redusId)).to.be.revertedWith("NOT THE OWNER OF THIS NFT");

    await expect(this.hostFactoryContract.connect(this.redu).deleteHost(redusId)).to.emit(this.hostFactoryContract, "hostNFTBurned").withArgs(this.redu.address, 0);
    
    expect(await this.hostFactoryContract.hostLength()).to.equal(0);
    expect(await this.hostFactoryContract.hostHasNft(this.redu.address)).to.equal(false);

    });

});