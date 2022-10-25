import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import Layout from "../components/Layout";
import RealEstateCard from "../components/RealEstateCard";
import { getRealEstateContract } from "../contracts/RealEstateContractHelper";
import { getRealEstateFactoryContract } from "../contracts/RealEstateContractFactoryHelper";

export default function Home() {
  const [realEstate, setRealEstates] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAllRealEstates();
  }, []);

  console.log("realEstate: ", realEstate);

  return (
    <div className='flex w-full justify-center items-center'>
      <div className='grid grid-cols-4 max-w-7xl w-full gap-6'>
        <RealEstateCard id={"1"} />
      </div>
    </div>
  );

  async function getAllRealEstates() {
    const { realEstateFactoryReadContract } =
      await getRealEstateFactoryContract();
    let allRealEstateIds =
      await realEstateFactoryReadContract.getAllRealEstateIds();
    let realEstateDataArray = [];

    setLoading(true);

    for (let id of allRealEstateIds) {
      let realEstateAddress = null;

      try {
        realEstateAddress =
          await realEstateFactoryReadContract.realEstateIdToAddress(
            id.toNumber()
          );
      } catch (e) {
        console.log(e);
      }

      if (realEstateAddress != null) {
        const { realEstateReadContract } = await getRealEstateContract(
          realEstateAddress
        );
        let realEstateDetails =
          await realEstateReadContract.getRealEstateDetails();
        // let eventStatus = await realEstateReadContract.eventStatus();

        let realEstateData = {
          id: id.toNumber(),
          realEstateAddress,
          realEstateDetails,
        };

        realEstateDataArray.push(realEstateData);
      }
    }
    // console.log(realEstateDataArray);
    setRealEstates(realEstateDataArray);
    setLoading(false);
  }
}
