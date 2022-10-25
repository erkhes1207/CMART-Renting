import React from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";

export default function Register() {
  const router = useRouter();
  return (
    <Layout>
      <div className="w-full mt-60">
        <div className="flex justify-center">
          <span className="text-4xl">Which one are you?</span>
        </div>
        <div className="flex justify-center mt-5 text-2xl gap-5">
          <button
            className=" px-4 py-2 border-transparent rounded-lg cursor-pointer hover:bg-slate-50	hover:text-[#f82f5d]"
            onClick={() => router.push("/host-form")}
          >
            Host
          </button>
          <div className="border-r-4"></div>

          <button
            className="px-4 py-2 border-transparent rounded-lg cursor-pointer hover:bg-slate-50	hover:text-[#f82f5d] "
            onClick={() => router.push("/tenant-form")}
          >
            Tenant
          </button>
        </div>
      </div>
      ;
    </Layout>
  );
}
