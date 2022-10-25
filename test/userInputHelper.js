const { ethers } = require("hardhat");

async function init() {
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
    
    // const emergencyName = "Chingun";
    // const emergencyRelationship = "Friend";
    // const emergencyEmail = "chingunee.dev@gmail.com";
    // const emergencyPhoneNumber = 11223344;
    
    const emergencyName = "";
    const emergencyRelationship = "";
    const emergencyEmail = "";
    const emergencyPhoneNumber = 0;
    
    const blockNumber = await ethers.provider.getBlockNumber()
    const block = await ethers.provider.getBlock(blockNumber)
    const joinedAt = block.timestamp;
    
    const emergencyContactDetail = [emergencyName, emergencyRelationship, emergencyEmail, emergencyPhoneNumber];
    
    const addressDetail = [country, street, aptSuite, city, state, zipCode];
    
    const fullName = [firstName, lastName];
    
    const userDetails = [fullName, gender, email, phoneNumber, governmentId, addressDetail, emergencyContactDetail, joinedAt];
    return userDetails;
}

module.exports = init;