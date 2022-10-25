import { ethers } from "ethers";
import { getContractEssentials } from "./helpers";
import { realEstateFactory } from "../genAddresses.json";
import realEstateFactoryAbi from "../abi/RealEstateFactory.json";

async function getRealEstateFactoryContract() {
  let { provider, signer } = await getContractEssentials();

  const realEstateFactoryReadContract = new ethers.Contract(
    realEstateFactory,
    realEstateFactoryAbi,
    provider
  );

  let realEstateFactoryWriteContract =
    realEstateFactoryReadContract.connect(signer);

  return {
    realEstateFactoryReadContract,
    realEstateFactoryWriteContract,
    provider,
    signer,
  };
}

export { getRealEstateFactoryContract };
