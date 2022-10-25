import { ethers } from "ethers";
import { getContractEssentials } from "./helpers";
import { tenantFactory } from "../genAddresses.json";
import tenantFactoryAbi from "../abi/TenantFactory.json";

async function getTenantFactoryContract() {
  let { provider, signer } = await getContractEssentials();

  const tenantReadContract = new ethers.Contract(
    tenantFactory,
    tenantFactoryAbi,
    provider
  );

  let tenantWriteContract = tenantReadContract.connect(signer);

  return { tenantReadContract, tenantWriteContract, provider, signer };
}

export { getTenantFactoryContract };
