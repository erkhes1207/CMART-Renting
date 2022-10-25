import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center w-full h-20 border border-b-gray-200">
      <div
        className="flex items-center max-w-7xl justify-between w-full cursor-pointer"
        onClick={() => router.push("/")}
      >
        <Image
          src={
            "https://assets.stickpng.com/images/580b57fcd9996e24bc43c513.png"
          }
          width={"100px"}
          height={"30px"}
          layout="fixed"
          alt="Logo"
          className=""
        />
        <div className="flex gap-2">
          <button
            className="flex items-center px-4 py-2 border-transparent rounded-lg cursor-pointer hover:bg-slate-50	 hover:text-[#f82f5d] "
            onClick={() => router.push("/host-form")}
          >
            Register
          </button>
          <button
            className="flex items-center px-4 py-2 border-transparent rounded-lg cursor-pointer hover:bg-slate-50	 hover:text-[#f82f5d] "
            onClick={() => router.push("/create-real-estate")}
          >
            Host
          </button>
          <button className="flex items-center px-4 py-2 border-transparent rounded-lg cursor-pointer hover:bg-slate-50	 hover:text-[#f82f5d] ">
            Connect a wallet
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
