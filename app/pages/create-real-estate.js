import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { triggerSuccessAlert, triggerInfoAlert } from "../slices/alertSlice";
import { getRealEstateFactoryContract } from "../contracts/RealEstateContractFactoryHelper";
import { getContractEssentials, parse } from "../contracts/helpers";

export default function RealEstateForm() {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [disableLoaderBtn, setDisableLoaderBtn] = useState(false);
  const dispatch = useDispatch();

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  async function handleCreateRealEstate() {
    try {
      await createRealEstate();
    } catch (err) {
      dispatch(triggerInfoAlert({ content: "Please enter event details" }));
    }
  }

  console.log("state: ", state);

  return (
    <div className="w-full p-5 lg:p-3">
      <div className="mt-10">
        <div className="font-body">
          <div className="w-full p-6 mx-auto my-5 border rounded-2xl space-y-6 sm:w-4/5 lg:w-1/2">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Host your real estate</h3>
              <span className="text-gray-500">
                Fill out a few details to start receiving payments directly to
                your bank account
              </span>
            </div>

            <div className="space-y-2">
              <div className="flex w-full justify-between gap-4">
                <div className="w-1/3">
                  <span className="uppercase text-sm font-semibold">Хот</span>
                  <input
                    type="text"
                    className="w-full h-12 px-3 border rounded-md focus:outline-none"
                    placeholder="Улаанбаатар"
                    name="city"
                    onChange={handleChange}
                  />
                </div>
                <div className="w-1/3">
                  <span className="uppercase text-sm font-semibold">
                    Дүүрэг
                  </span>
                  <input
                    type="text"
                    name="district"
                    className="w-full  h-12 px-3 border rounded-md focus:outline-none"
                    placeholder="Баянзүрх"
                    onChange={handleChange}
                  />
                </div>
                <div className="w-1/3">
                  <span className="uppercase text-sm font-semibold">Хороо</span>
                  <input
                    type="text"
                    name="khoroo"
                    className="w-full  h-12 px-3 border rounded-md focus:outline-none"
                    placeholder="4"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex w-full justify-between gap-4">
                <div className="w-1/3">
                  <span className="uppercase text-sm font-semibold">
                    Гудамж, хотхон, байр
                  </span>
                  <input
                    type="text"
                    className="w-full h-12 px-3 border rounded-md focus:outline-none"
                    placeholder="Сөүлийн гудамж, флора тауэр, 3-р байр"
                    name="street"
                    onChange={handleChange}
                  />
                </div>
                <div className="w-1/3">
                  <span className="uppercase text-sm font-semibold">Орц</span>
                  <input
                    type="text"
                    name="orts"
                    className="w-full  h-12 px-3 border rounded-md focus:outline-none"
                    placeholder="3"
                    onChange={handleChange}
                  />
                </div>
                <div className="w-1/3">
                  <span className="uppercase text-sm font-semibold">Тоот</span>
                  <input
                    type="text"
                    name="toot"
                    className="w-full  h-12 px-3 border rounded-md focus:outline-none"
                    placeholder="23"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-1/2">
                <span className="uppercase text-sm font-semibold">
                  Room Count
                </span>
                <input
                  type="text"
                  className="w-full h-12 px-3 border rounded-md focus:outline-none"
                  placeholder="Mongolia"
                  name="roomCount"
                  onChange={handleChange}
                />
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
                    name="country"
                    onChange={handleChange}
                  />
                </div>
                <div className="w-1/2">
                  <span className="uppercase text-sm font-semibold">
                    Street
                  </span>
                  <input
                    type="text"
                    name="street"
                    className="w-full  h-12 px-3 border rounded-md focus:outline-none"
                    placeholder="Сөүлийн гудамж"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex w-full justify-between gap-4"></div>
            </div>
            <div className="space-y-2"></div>

            <div className="space-y-2">
              <div className="flex justify-between gap-4">
                <div className="w-1/2">
                  <label
                    htmlFor="people"
                    className="uppercase text-sm font-semibold w-full"
                  >
                    Guests
                  </label>
                  <select
                    name="guests"
                    defaultValue={"1"}
                    className="w-full h-12 px-3 border rounded-md focus:outline-none"
                    onChange={handleChange}
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                  </select>
                </div>
                <div className="w-1/2">
                  <span className="uppercase text-sm font-semibold w-full">
                    Photos
                  </span>
                  <div className="flex justify-between gap-4">
                    <input
                      type="text"
                      name="photos"
                      onChange={handleChange}
                      className="w-full h-12 px-3 border rounded-md focus:outline-none"
                      placeholder="url"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                className="w-1/5 flex justify-center items-center border rounded cursor-pointer p-2 text-white bg-[#f82f5d]"
                onClick={() => handleCreateRealEstate()}
                disabled={disableLoaderBtn ? true : false}
              >
                {loading ? (
                  <svg
                    className={`inline mr-2 w-5 h-5 ${
                      disableLoaderBtn
                        ? "fill-black"
                        : "text-blue-400 fill-white"
                    }  animate-spin `}
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                ) : (
                  ""
                )}
                <span>Mint Host NFT</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  async function createRealEstate() {
    try {
      if (state.length === 0) {
        dispatch(triggerInfoAlert({ content: "Enter your info" }));
        return "";
      }
      setDisableLoaderBtn(true);
      setLoading(true);
      let {
        realEstateFactoryWriteContract,
      } = await getRealEstateFactoryContract();

      let realEstateForm = [
        parseInt(state.type, 10),
        parseInt(state.roomCount, 10),
        [
          state.country,
          state.street,
          state.aptSuite,
          state.city,
          state.state,
          state.zipCode,
        ],
        [
          parseInt(state.guests, 10),
          parseInt(state.beds, 10),
          parseInt(state.bedrooms, 10),
          parseInt(state.bathrooms, 10),
        ],
        state.photos,
        state.title,
        state.description,
        parseInt(state.price, 10),
      ];

      console.log("realEstateForm: ", realEstateForm);

      if (realEstateForm !== undefined) {
        const tx = await realEstateFactoryWriteContract.createRealEstate(
          realEstateForm
        );
        await tx.wait();
      }

      dispatch(triggerSuccessAlert({ content: "Success Real Estate NFT" }));
      setLoading(false);
      setDisableLoaderBtn(false);
    } catch (err) {
      console.log("err: ", err);
    }
  }
}
