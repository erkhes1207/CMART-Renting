import { ethers } from "ethers";
import { getContractEssentials } from "./helpers";
import realEstateAbi from "../abi/RealEstate.json";

async function getRealEstateContract(address) {
  let { provider, signer } = await getContractEssentials();

  const realEstateReadContract = new ethers.Contract(
    address,
    realEstateAbi,
    provider
  );

  let realEstateWriteContract = realEstateReadContract.connect(signer);

  return { realEstateReadContract, realEstateWriteContract };
}

export { getRealEstateContract };
