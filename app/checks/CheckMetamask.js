import React, { useEffect } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import {
  checkMetamask,
  checkConnected,
  connectMetamask,
} from "../slices/metamaskSlice";
import Metamask from "../assets/metamask.png";
import Layout from "../components/Layout";

const CheckMetamask = ({ children }) => {
  const metamask = useSelector((state) => state.metamask);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkMetamask());

    setTimeout(() => {
      dispatch(checkConnected());
    }, 1500);
  }, []);

  useEffect(() => {
    dispatch(connectMetamask());
  }, [metamask.isConnected]);

  if (!metamask.haveMetamask) {
    return (
      <div className='flex flex-col items-center justify-center gap-2 w-full h-screen'>
        <Image
          src={Metamask}
          width={"200px"}
          height={"200px"}
          layout='fixed'
          alt='Metamask Image'
        />
        <span className='text-xl font-bold text-center text-black md:text-3xl'>
          No metamask your browser, <br></br> Please download have metamask
          browser
        </span>
      </div>
    );
  }

  if (!metamask.isConnected) {
    return (
      <Layout>
        <div className='flex flex-col items-center justify-center h-screen w-full'>
          <Image
            src={Metamask}
            width={"200px"}
            height={"200px"}
            layout='fixed'
            alt='Metamask Image'
          />
          <div className='flex flex-col'>
            <span className='text-xl font-bold text-center text-black md:text-2xl mt-5'>
              Please connect Metamask
            </span>
            <button
              className='py-2 px-3 text-red-600'
              onClick={() => {
                dispatch(connectMetamask());
              }}
            >
              <span className=''>Connect Metamask</span>
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  return <>{children}</>;
};

export default CheckMetamask;
