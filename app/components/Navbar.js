import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { connectMetamask } from "../slices/metamaskSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const metamask = useSelector((state) => state.metamask);
  const app = useSelector((state) => state.app);

  console.log("app: ", app);

  return (
    <div className='flex justify-center items-center w-full h-20 border border-b-gray-200'>
      <div className='flex items-center max-w-7xl justify-between w-full'>
        <Link href={"/"}>
          <Image
            src={
              "https://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png"
            }
            width={"100px"}
            height={"30px"}
            layout='fixed'
            alt='Logo'
            className='cursor-pointer'
          />
        </Link>
        <div className='flex gap-5 items-center'>
          <Link href='/create-real-estate'>Host</Link>
          <Link href='/host-profile'>My Profile</Link>
          <Link href='/register'>Register</Link>
          <button
            className='flex gap-2 items-center px-5 py-2 border rounded-3xl hover:bg-slate-50 hover:text-[#f82f5d] text-gray-500 font-semibold'
            onClick={() => {
              !metamask.isConnected ? dispatch(connectMetamask()) : "";
            }}
          >
            {metamask && metamask.isConnected ? (
              <div className='flex items-center gap-2 select-none'>
                <img
                  src='https://cdn.stamp.fyi/avatar/eth:0x1Fd9afb27FF1194b92C80eDA157C7eAC4C509F33?s=36'
                  alt=''
                  width={"20px"}
                  height={"20px"}
                  className='rounded-full'
                />
                {metamask.selectedAccount.substring(0, 6)}...
                {metamask.selectedAccount.substring(
                  metamask.selectedAccount.length - 4
                )}
              </div>
            ) : (
              "Connect a wallet"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
