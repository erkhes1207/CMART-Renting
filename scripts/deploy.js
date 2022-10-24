const fs = require('fs');
const path = require('path');
const hre = require("hardhat");

async function main() {
  const HostFactory = await ethers.getContractFactory("HostFactory");
  const hostFactoryContract = await HostFactory.deploy();
  await hostFactoryContract.deployed();

  const TenantFactory = await ethers.getContractFactory("TenantFactory");
  const tenantFactoryContract = await TenantFactory.deploy();
  await tenantFactoryContract.deployed();

  let hostNftAddress = await hostFactoryContract.nft();
  let tenantNftAddress = await tenantFactoryContract.nft();

  const RealEstateFactory = await ethers.getContractFactory("RealEstateFactory");
  const realEstateFactoryContract = await RealEstateFactory.deploy(hostNftAddress);
  await realEstateFactoryContract.deployed();

  console.log("hostFactoryContract deployed to:", hostFactoryContract.address);
  console.log("tenantFactoryContract deployed to:", tenantFactoryContract.address);
  console.log("realEstateFactoryContract deployed to:", realEstateFactoryContract.address);

  const content = {
    "hostFactory" : hostFactoryContract.address,
    "tenantFactory" : tenantFactoryContract.address,
    "realEstateFactory" : realEstateFactoryContract.address,
  }
  createAddressJson(path.join(__dirname, '/../app/genAddresses.json'),JSON.stringify(content))

}

function createAddressJson(path,content){
  try{
    fs.writeFileSync(path,content)
    console.log("Created Contract Address JSON")
  } catch (err) {
    console.error(err)
    return
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
