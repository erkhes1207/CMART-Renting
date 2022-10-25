import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { triggerSuccessAlert, triggerInfoAlert } from "../slices/alertSlice";
import { getHostFactoryContract } from "../contracts/HostContractHelper";
import { getContractEssentials } from "../contracts/helpers";

export default function HostForm() {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [disableLoaderBtn, setDisableLoaderBtn] = useState(false);
  const dispatch = useDispatch();

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
  }

  async function handleCreateHost() {
    try {
      await createHost();
    } catch (err) {
      dispatch(triggerInfoAlert({ content: "Please enter event details" }));
    }
  }

  console.log("staet: ", state);

  return (
    <div className='w-full p-5 lg:p-3'>
      <div className='mt-10'>
        <div className='font-body'>
          <div className='w-full p-6 mx-auto my-5 border rounded-2xl space-y-6 sm:w-4/5 lg:w-1/2'>
            <div className='space-y-2'>
              <h3 className='text-xl font-semibold'>Profile Information</h3>
              <span className='text-gray-500'>
                Fill out a few details to start receiving payments directly to
                your bank account
              </span>
            </div>
            <div className='space-y-2'>
              <div className='flex w-full justify-between gap-4'>
                <div className='w-1/2'>
                  <span className='uppercase text-sm font-semibold'>
                    First Name
                  </span>
                  <input
                    type='text'
                    name='firstName'
                    className='w-full h-12 px-3 border rounded-md focus:outline-none'
                    placeholder='firstname'
                    onChange={handleChange}
                  />
                </div>
                <div className='w-1/2'>
                  <span className='uppercase text-sm font-semibold'>
                    Last Name
                  </span>
                  <input
                    type='text'
                    name='lastName'
                    className='w-full  h-12 px-3 border rounded-md focus:outline-none'
                    placeholder='lastname'
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className='space-y-2'>
              <div className='flex w-full justify-between gap-4'>
                <div className='w-1/2'>
                  <span className='uppercase text-sm font-semibold'>
                    Phone Number
                  </span>
                  <input
                    type='text'
                    name='phoneNumber'
                    className='w-full h-12 px-3 border rounded-md focus:outline-none'
                    placeholder='99310720'
                    onChange={handleChange}
                  />
                </div>
                <div className='w-1/2'>
                  <span className='uppercase text-sm font-semibold'>Email</span>
                  <input
                    type='text'
                    name='email'
                    className='w-full  h-12 px-3 border rounded-md focus:outline-none'
                    placeholder='chingunee.dev@gmail.com'
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className='space-y-2'>
              <div className='flex w-full justify-between gap-4'>
                <div className='w-1/2'>
                  <span className='uppercase text-sm font-semibold'>
                    ID Number
                  </span>
                  <input
                    type='text'
                    name='governmentId'
                    className='w-full h-12 px-3 border rounded-md focus:outline-none'
                    placeholder='SSH0321212'
                    onChange={handleChange}
                  />
                </div>
                <div className='w-1/2'>
                  <label
                    htmlFor='genders'
                    className='uppercase text-sm font-semibold'
                  >
                    Gender
                  </label>
                  <select
                    name='gender'
                    defaultValue={"male"}
                    className='w-full h-12 px-3 border rounded-md focus:outline-none'
                    onChange={handleChange}
                  >
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                  </select>
                </div>
              </div>
            </div>
            <div className='space-y-2'>
              <div className='flex w-full justify-between gap-4'>
                <div className='w-1/2'>
                  <span className='uppercase text-sm font-semibold'>
                    Country
                  </span>
                  <input
                    type='text'
                    name='country'
                    className='w-full h-12 px-3 border rounded-md focus:outline-none'
                    placeholder='Mongolia'
                    onChange={handleChange}
                  />
                </div>
                <div className='w-1/2'>
                  <span className='uppercase text-sm font-semibold'>
                    Street
                  </span>
                  <input
                    type='text'
                    name='street'
                    className='w-full  h-12 px-3 border rounded-md focus:outline-none'
                    placeholder='Сөүлийн гудамж'
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className='space-y-2'>
              <div className='flex w-full justify-between gap-4'>
                <div className='w-1/2'>
                  <span className='uppercase text-sm font-semibold'>
                    Apt Suite
                  </span>
                  <input
                    type='text'
                    name='aptSuite'
                    className='w-full h-12 px-3 border rounded-md focus:outline-none'
                    placeholder='apt suite'
                    onChange={handleChange}
                  />
                </div>
                <div className='w-1/2'>
                  <span className='uppercase text-sm font-semibold'>City</span>
                  <input
                    type='text'
                    name='city'
                    className='w-full  h-12 px-3 border rounded-md focus:outline-none'
                    placeholder='Ulaanbaatar'
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className='space-y-2'>
              <div className='flex w-full justify-between gap-4'>
                <div className='w-1/2'>
                  <span className='uppercase text-sm font-semibold'>State</span>
                  <input
                    type='text'
                    name='state'
                    className='w-full h-12 px-3 border rounded-md focus:outline-none'
                    placeholder='state'
                    onChange={handleChange}
                  />
                </div>
                <div className='w-1/2'>
                  <span className='uppercase text-sm font-semibold'>
                    Zip Code
                  </span>
                  <input
                    type='text'
                    name='zipCode'
                    className='w-full  h-12 px-3 border rounded-md focus:outline-none'
                    placeholder='000121'
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className='space-y-2'>
              <h3 className='text-xl font-semibold'>Emergency Contract</h3>
            </div>
            <div className='space-y-2'>
              <div className='flex w-full justify-between gap-4'>
                <div className='w-1/2'>
                  <span className='uppercase text-sm font-semibold'>
                    Full Name
                  </span>
                  <input
                    type='text'
                    name='emergencyName'
                    className='w-full h-12 px-3 border rounded-md focus:outline-none'
                    placeholder='John Snow'
                    onChange={handleChange}
                  />
                </div>
                <div className='w-1/2'>
                  <span className='uppercase text-sm font-semibold'>
                    Relationship
                  </span>
                  <input
                    type='text'
                    name='emergencyRelationship'
                    className='w-full  h-12 px-3 border rounded-md focus:outline-none'
                    placeholder='Mother'
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className='space-y-2'>
              <div className='flex w-full justify-between gap-4'>
                <div className='w-1/2'>
                  <span className='uppercase text-sm font-semibold'>Email</span>
                  <input
                    type='text'
                    name='emergencyEmail'
                    className='w-full h-12 px-3 border rounded-md focus:outline-none'
                    placeholder='chingunee.dev@gmail.com'
                    onChange={handleChange}
                  />
                </div>
                <div className='w-1/2'>
                  <span className='uppercase text-sm font-semibold'>
                    Phone Number
                  </span>
                  <input
                    type='text'
                    name='emergencyPhoneNumber'
                    className='w-full  h-12 px-3 border rounded-md focus:outline-none'
                    placeholder='99310720'
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <div className='flex justify-center'>
              <button
                className='w-1/5 flex justify-center items-center border rounded cursor-pointer p-2 text-white bg-[#f82f5d]'
                onClick={() => handleCreateHost()}
                disabled={disableLoaderBtn ? true : false}
              >
                {loading ? (
                  <svg
                    className={`inline mr-2 w-5 h-5 ${
                      disableLoaderBtn
                        ? "fill-black"
                        : "text-blue-400 fill-white"
                    }  animate-spin `}
                    viewBox='0 0 100 101'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                      fill='currentColor'
                    />
                    <path
                      d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                      fill='currentFill'
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

  async function createHost() {
    try {
      // if (state.length === 0) {
      //   dispatch(triggerInfoAlert({ content: "Enter your info" }));
      //   return "";
      // }
      setDisableLoaderBtn(true);
      setLoading(true);
      let { hostWriteContract } = await getHostFactoryContract();

      let hostForm = [
        state.firstName,
        state.lastName,
        state.gender,
        state.email,
        parseInt(state.phoneNumber, 10),
        state.governmentId,
        state.country,
        state.street,
        state.aptSuite,
        state.city,
        state.state,
        state.zipCode,
        state.emergencyName,
        state.emergencyRelationship,
        state.emergencyEmail,
        parseInt(state.emergencyPhoneNumber, 10),
        Date.now().toString(),
      ];

      console.log("hostForm: ", hostForm);

      if (hostForm !== undefined) {
        const tx = await hostWriteContract.createHost(hostForm);
        await tx.wait();
      }

      dispatch(triggerSuccessAlert({ content: "Success Organizer NFT" }));
      setLoading(false);
      setDisableLoaderBtn(false);
    } catch (err) {
      console.log("err: ", err);
    }
  }
}
