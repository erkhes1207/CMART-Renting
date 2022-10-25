import Image from "next/image";
import { useRouter } from "next/router";

const RealEstateCard = (props) => {
  const { id, data } = props;
  const router = useRouter();

  console.log("data123: ", data.realEstateDetails);

  return (
    <div
      className='flex flex-col w-full gap-1'
      onClick={() => router.push(`/real-estate/${data.id}`)}
    >
      <div className='relative'>
        <Image
          src={
            "https://images.pexels.com/photos/276724/pexels-photo-276724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          width={"286px"}
          height={"290px"}
          layout='responsive'
          className='rounded-xl object-fill	'
        />
        <button className='absolute right-4 top-4 z-30'>
          <svg width='1.5em' height='1.5em' viewBox='0 0 256 256'>
            <path
              fill='gray'
              d='M128 216S28 160 28 92a52 52 0 0 1 100-20a52 52 0 0 1 100 20c0 68-100 124-100 124Z'
              opacity='.2'
            ></path>
            <path
              fill='white'
              d='M128 224a7.8 7.8 0 0 1-3.9-1C119.8 220.6 20 163.9 20 92a60 60 0 0 1 108-36a60 60 0 0 1 108 36c0 30.6-17.7 62-52.6 93.4a314.3 314.3 0 0 1-51.5 37.6a7.8 7.8 0 0 1-3.9 1Zm-3.9-15ZM80 48a44 44 0 0 0-44 44c0 55.2 74 103.7 92 114.7c18-11 92-59.5 92-114.7a44 44 0 0 0-84.6-17a8 8 0 0 1-14.8 0A43.8 43.8 0 0 0 80 48Z'
            ></path>
          </svg>
        </button>
      </div>
      <div className='flex justify-between items-start w-full mt-2 text-md'>
        <div className='w-4/5 font-medium'>
          <span>{data.realEstateDetails.title}</span>
        </div>
        <div className='flex w-1/5 justify-end items-center gap-1'>
          <svg width='1em' height='1em' viewBox='0 0 24 24'>
            <path
              fill='text-gray-300'
              d='m12 18.275l-4.15 2.5q-.275.175-.575.15q-.3-.025-.525-.2q-.225-.175-.35-.437q-.125-.263-.05-.588l1.1-4.725L3.775 11.8q-.25-.225-.312-.513Q3.4 11 3.5 10.725q.1-.275.3-.45q.2-.175.55-.225l4.85-.425l1.875-4.45q.125-.3.388-.45q.262-.15.537-.15t.538.15q.262.15.387.45l1.875 4.45l4.85.425q.35.05.55.225q.2.175.3.45q.1.275.038.562q-.063.288-.313.513l-3.675 3.175l1.1 4.725q.075.325-.05.588q-.125.262-.35.437q-.225.175-.525.2q-.3.025-.575-.15Z'
            ></path>
          </svg>
          <span className='text-sm font-light'>
            {data.realEstateDetails.rate}
          </span>
        </div>
      </div>
      <div className='w-full text-sm font-light'>
        <span className=' text-gray-500'>
          {data.realEstateDetails.description}
        </span>
      </div>
      <div className='flex gap-1 text-sm'>
        <span className='font-seminbold'>Үнэ:</span>
        <span className='font-light'>{data.price} сая</span>
      </div>
    </div>
  );
};

export default RealEstateCard;
