import Layout from "../components/Layout";
import RealEstateCard from "../components/RealEstateCard";

export default function Home() {
  return (
    <Layout>
      <div className='flex w-full justify-center items-center'>
        <div className='grid grid-cols-4 max-w-7xl w-full gap-6'>
          <RealEstateCard id={"1"} />
          <RealEstateCard id={"2"} />
          <RealEstateCard id={"3"} />
          <RealEstateCard id={"4"} />
        </div>
      </div>
    </Layout>
  );
}
