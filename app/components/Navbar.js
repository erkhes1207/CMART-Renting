import Image from "next/image";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { connectMetamask } from "../components/slices/metamaskSlice";

const Navbar = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const metamask = useSelector((state) => state.metamask);

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
        <div className='flex gap-2'>
          <button
            className='flex items-center px-4 py-2 border-transparent rounded-lg cursor-pointer hover:bg-slate-50	 hover:text-[#f82f5d] '
            onClick={() => router.push("/host-form")}
          >
            Register
          </button>
          <button
            className='flex items-center px-4 py-2 border-transparent rounded-lg cursor-pointer hover:bg-slate-50	 hover:text-[#f82f5d] '
            onClick={() => router.push("/create-real-estate")}
          >
            Host
          </button>
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
