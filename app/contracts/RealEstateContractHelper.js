import { ethers } from "ethers";
import { getContractEssentials } from "./helpers";
import { realEstateFactory } from "../genAddresses.json";
import realEstateFactoryAbi from "../abi/RealEstateFactory.json";

async function getRealEstateFactoryContract() {
  let { provider, signer } = await getContractEssentials();

  const realEstateReadContract = new ethers.Contract(
    realEstateFactory,
    realEstateFactoryAbi,
    provider
  );

  let realEstateWriteContract = realEstateReadContract.connect(signer);

  return { realEstateReadContract, realEstateWriteContract, provider, signer };
}

export { getRealEstateFactoryContract };
