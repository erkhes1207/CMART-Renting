import React, { useState, useEffect } from "react";
export default function TenantForm() {
  const [state, setState] = useState([]);

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  return (
    <div className="w-full p-5 lg:p-3">
      <div className="mt-10">
        <div className="font-body">
          <div className="w-full p-6 mx-auto my-5 border rounded-2xl space-y-6 sm:w-4/5 lg:w-1/2">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Profile Information</h3>
              <span className="text-gray-500">
                Fill out a few details to start receiving payments directly to
                your bank account
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex w-full justify-between gap-4">
                <div className="w-1/2">
                  <span className="uppercase text-sm font-semibold">
                    First Name
                  </span>
                  <input
                    type="text"
                    className="w-full h-12 px-3 border rounded-md focus:outline-none"
                    placeholder="99310720"
                  />
                </div>
                <div className="w-1/2">
                  <span className="uppercase text-sm font-semibold">
                    Last Name
                  </span>
                  <input
                    type="text"
                    className="w-full  h-12 px-3 border rounded-md focus:outline-none"
                    placeholder="chingunee.dev@gmail.com"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex w-full justify-between gap-4">
                <div className="w-1/2">
                  <span className="uppercase text-sm font-semibold">
                    Phone Number
                  </span>
                  <input
                    type="text"
                    className="w-full h-12 px-3 border rounded-md focus:outline-none"
                    placeholder="99310720"
                  />
                </div>
                <div className="w-1/2">
                  <span className="uppercase text-sm font-semibold mr-80">
                    Number
                  </span>
                  <input
                    type="text"
                    className="w-full  h-12 px-3 border rounded-md focus:outline-none"
                    placeholder="chingunee.dev@gmail.com"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex w-full justify-between gap-4">
                <div className="w-1/2">
                  <span className="uppercase text-sm font-semibold">
                    ID Number
                  </span>
                  <input
                    type="text"
                    className="w-full h-12 px-3 border rounded-md focus:outline-none"
                    placeholder="SSH0321212"
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="genders"
                    className="uppercase text-sm font-semibold mr-80"
                  >
                    Gender
                  </label>
                  <select
                    name="genders"
                    id="genders"
                    className="w-full h-12 px-3 border rounded-md focus:outline-none"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex w-full justify-between gap-4">
                <div className="w-1/2">
                  <span className="uppercase text-sm font-semibold">
                    Country
                  </span>
                  <input
                    type="text"
                    className="w-full h-12 px-3 border rounded-md focus:outline-none"
                    placeholder="Mongolia"
                  />
                </div>
                <div className="w-1/2">
                  <span className="uppercase text-sm font-semibold">
                    Street
                  </span>
                  <input
                    type="text"
                    className="w-full  h-12 px-3 border rounded-md focus:outline-none"
                    placeholder="Сөүлийн гудамж"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex w-full justify-between gap-4">
                <div className="w-1/2">
                  <span className="uppercase text-sm font-semibold">
                    Apt Suite
                  </span>
                  <input
                    type="text"
                    className="w-full h-12 px-3 border rounded-md focus:outline-none"
                    placeholder="apt suite"
                  />
                </div>
                <div className="w-1/2">
                  <span className="uppercase text-sm font-semibold">City</span>
                  <input
                    type="text"
                    className="w-full  h-12 px-3 border rounded-md focus:outline-none"
                    placeholder="Ulaanbaatar"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex w-full justify-between gap-4">
                <div className="w-1/2">
                  <span className="uppercase text-sm font-semibold">State</span>
                  <input
                    type="text"
                    className="w-full h-12 px-3 border rounded-md focus:outline-none"
                    placeholder="state"
                  />
                </div>
                <div className="w-1/2">
                  <span className="uppercase text-sm font-semibold">
                    Zip Code
                  </span>
                  <input
                    type="text"
                    className="w-full  h-12 px-3 border rounded-md focus:outline-none"
                    placeholder="000121"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Emergency Contract</h3>
            </div>
            <div className="space-y-2">
              <div className="flex w-full justify-between gap-4">
                <div className="w-1/2">
                  <span className="uppercase text-sm font-semibold">
                    Full Name
                  </span>
                  <input
                    type="text"
                    className="w-full h-12 px-3 border rounded-md focus:outline-none"
                    placeholder="John Snow"
                  />
                </div>
                <div className="w-1/2">
                  <span className="uppercase text-sm font-semibold">
                    Relationship
                  </span>
                  <input
                    type="text"
                    className="w-full  h-12 px-3 border rounded-md focus:outline-none"
                    placeholder="Mother"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex w-full justify-between gap-4">
                <div className="w-1/2">
                  <span className="uppercase text-sm font-semibold">Email</span>
                  <input
                    type="text"
                    className="w-full h-12 px-3 border rounded-md focus:outline-none"
                    placeholder="chingunee.dev@gmail.com"
                  />
                </div>
                <div className="w-1/2">
                  <span className="uppercase text-sm font-semibold">
                    Phone Number
                  </span>
                  <input
                    type="text"
                    className="w-full  h-12 px-3 border rounded-md focus:outline-none"
                    placeholder="99310720"
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2 w-1/2">
              <h3 className="uppercase text-sm font-semibold">Joined at</h3>
              <input
                type="date"
                className="w-full h-12 px-3 border rounded-md focus:outline-none"
              />
            </div>
            <div className="flex justify-center">
              <button className="w-1/5 flex justify-center items-center border rounded cursor-pointer p-2 text-white bg-[#f82f5d]">
                <span>Mint Tenant NFT</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
