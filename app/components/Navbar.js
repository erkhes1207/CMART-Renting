import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className='flex justify-center items-center w-full h-20 border border-b-gray-200'>
      <div
        className='flex items-center max-w-7xl justify-between w-full cursor-pointer'
        onClick={() => router.push("/")}
      >
        <Image
          src={
            "https://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png"
          }
          width={"100px"}
          height={"30px"}
          layout='fixed'
          alt='Logo'
          className=''
        />
        <div>
          <button className='flex items-center justify-center px-4 py-2 border rounded-2xl'>
            <span>Connect a wallet</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
