import { ethers } from "ethers";
import { getContractEssentials } from "./helpers";
import { hostFactory } from "../genAddresses.json";
import hostFactoryAbi from "../abi/HostFactory.json";

async function getHostFactoryContract() {
  let { provider, signer } = await getContractEssentials();

  const hostReadContract = new ethers.Contract(
    hostFactory,
    hostFactoryAbi,
    provider
  );

  let hostWriteContract = hostReadContract.connect(signer);

  return { hostReadContract, hostWriteContract, provider, signer };
}

export { getHostFactoryContract };
