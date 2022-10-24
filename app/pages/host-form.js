import Layout from "../components/Layout";

export default function HostForm() {
  return (
    <Layout>
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
                <h3 className='uppercase text-sm font-semibold'>full name</h3>
                <input
                  type='text'
                  className='w-full h-12 px-3 border rounded-md focus:outline-none'
                  placeholder='John Smith'
                />
              </div>
              <div className='space-y-2'>
                <div className='flex'>
                  <h3 className='uppercase text-sm font-semibold'>Phone</h3>
                  <h3 className='uppercase text-sm font-semibold ml-[368px]'>
                    Email
                  </h3>
                </div>
                <div className='flex'>
                  <input
                    type='text'
                    className='w-[365px] h-12 px-3 border rounded-md focus:outline-none'
                    placeholder='99310720'
                  />
                  <input
                    type='text'
                    className='w-[365px] h-12 px-3 border rounded-md focus:outline-none ml-12'
                    placeholder='chingunee.dev@gmail.com'
                  />
                </div>
              </div>
              <div className='space-y-2'>
                <div className='flex'>
                  <h3 className='uppercase text-sm font-semibold '>
                    Id number
                  </h3>
                  <label
                    htmlFor='genders'
                    className='uppercase text-sm font-semibold'
                  >
                    Gender
                  </label>
                </div>
                <div className='flex'>
                  <input
                    type='text'
                    className='w-[368px] h-12 px-3 border rounded-md focus:outline-none'
                    placeholder='SSH03271029'
                  />
                  <select
                    name='genders'
                    id='genders'
                    className='w-[368px] h-12 px-3 border rounded-md focus: outline-none ml-11'
                  >
                    <option value='male'>Male</option>
                    <option value='female'>Female</option>
                  </select>
                </div>
              </div>
              <div className='space-y-2'>
                <h3 className='uppercase text-sm font-semibold'>Bio</h3>
                <textarea
                  className='border rounded-md pl-2 pt-2 w-full'
                  name='bio'
                  rows={"5"}
                  placeholder='Write a short and sweet description about yourself...'
                ></textarea>
              </div>
              <div className='flex justify-center'>
                <button className='w-1/5 flex justify-center items-center border rounded cursor-pointer p-2 text-white bg-[#f82f5d]'>
                  <span>Mint Host NFT</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
