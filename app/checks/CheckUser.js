import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { getTenantFactoryContract } from "../contracts/TenantContractHelper";
import { getHostFactoryContract } from "../contracts/HostContractHelper";
import { userIsHost, userIsTenant } from "../slices/appSlice";

export default function CheckTenant({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    checkIfUserIsTenant();
    checkIfUserIsHost();
  }, []);

  async function checkIfUserIsTenant() {
    try {
      const { tenantReadContract } = await getTenantFactoryContract();
      let balance = await tenantReadContract.balanceOf(
        window.ethereum.selectedAddress
      );

      if (balance.toNumber() > 0) {
        dispatch(userIsTenant());
      }
    } catch (e) {
      console.log(e);
    }
  }

  async function checkIfUserIsHost() {
    try {
      const { hostReadContract } = await getHostFactoryContract();
      let balance = await hostReadContract.balanceOf(
        window.ethereum.selectedAddress
      );

      if (balance.toNumber() > 0) {
        dispatch(userIsHost());
      }
    } catch (e) {
      console.log(e);
    }
  }

  return <>{children}</>;
}
