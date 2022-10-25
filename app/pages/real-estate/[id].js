import Image from "next/image";

const RealEstateDetail = () => {
  return (
    <div className='flex w-full h-full justify-center items-center min-h-screen mb-10'>
      <div className='flex max-w-7xl w-full gap-5'>
        <section className='overflow-hidden text-gray-700 w-full'>
          <div className='px-28 w-full'>
            <div className='flex flex-col my-4'>
              <span className='text-3xl font-medium text-black'>
                Яармагийн belmonte хотхонд тавилгатай 3 өрөө
              </span>
              <div className='flex w-full justify-between'>
                <span className='underline'>Ulaanbaatar, Mongolia</span>
                <div className='flex items-center gap-5'>
                  <div className='flex items-center gap-1 cursor-pointer'>
                    <svg width='1em' height='1em' viewBox='0 0 24 24'>
                      <path
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='1.5'
                        d='M20 13v6a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-6m8 2V3m0 0L8.5 6.5M12 3l3.5 3.5'
                      ></path>
                    </svg>
                    <span>Share</span>
                  </div>
                  <div className='flex items-center gap-1 cursor-pointer'>
                    <svg width='1em' height='1em' viewBox='0 0 256 256'>
                      <path
                        fill='currentColor'
                        d='M128 226.2a20.1 20.1 0 0 1-14.2-5.8l-83.1-83.1a64.1 64.1 0 0 1 2.5-92.9a62.1 62.1 0 0 1 46-15.6a68.8 68.8 0 0 1 44.1 20l4.7 4.7l6.7-6.8a64.1 64.1 0 0 1 92.9 2.5a62.1 62.1 0 0 1 15.6 46a68.8 68.8 0 0 1-20 44.1l-81.1 81.1a19.8 19.8 0 0 1-14.1 5.8Zm5.6-14.3ZM75 52.7a38.1 38.1 0 0 0-25.7 9.5a40 40 0 0 0-1.6 58.1l80.3 80.3l78.2-78.2c15.9-16 17.5-41.6 3.6-57.1a40 40 0 0 0-58.1-1.6l-15.2 15.2a12 12 0 0 1-17 0l-13.2-13.1A44.2 44.2 0 0 0 75 52.7Z'
                      ></path>
                    </svg>
                    <span>Save</span>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex w-full'>
              <div className='w-1/2 p-1'>
                <img
                  alt='gallery'
                  className='block object-cover object-center rounded-tl-xl rounded-bl-xl w-full h-[335px]'
                  src='https://a0.muscache.com/im/pictures/miso/Hosting-629170893088045571/original/b4542d4a-2487-47a8-9035-0ba2858213d8.jpeg?im_w=720'
                />
              </div>
              <div className='flex flex-wrap w-1/2 h-full'>
                <div className='w-1/2 pr-1 py-1 h-44'>
                  <img
                    alt='gallery'
                    className='block object-cover object-center w-80 h-[168px]'
                    src='https://a0.muscache.com/im/pictures/miso/Hosting-629170893088045571/original/6b18c223-3b31-48ab-bd36-3073048825e4.jpeg?im_w=720'
                  />
                </div>
                <div className='w-1/2 py-1 h-44'>
                  <img
                    alt='gallery'
                    className='block object-cover object-center rounded-tr-xl w-80 h-[168px]'
                    src='https://a0.muscache.com/im/pictures/miso/Hosting-629170893088045571/original/bff0e97e-dc0d-425f-890d-cedd31697ce7.jpeg?im_w=720'
                  />
                </div>
                <div className='w-1/2 pr-1 h-44'>
                  <img
                    alt='gallery'
                    className='block object-cover object-center w-80 h-40'
                    src='https://a0.muscache.com/im/pictures/miso/Hosting-629170893088045571/original/58cb528b-86aa-4d91-967c-e55cc6b6a245.jpeg?im_w=720'
                  />
                </div>
                <div className='w-1/2 h-44'>
                  <img
                    alt='gallery'
                    className='block object-cover object-center rounded-br-xl w-80 h-40'
                    src='https://a0.muscache.com/im/pictures/miso/Hosting-629170893088045571/original/3d7c334f-03b7-4fc6-9d95-a5221fbb4177.jpeg?im_w=720'
                  />
                </div>
              </div>
            </div>
            <div className='grid grid-cols-10'>
              <div className='col-span-6 my-4'>
                <div className='flex justify-between w-full mt-4'>
                  <div className='flex flex-col gap-1'>
                    <span className='text-xl font-semibold'>
                      Entire home hosted by Pekka
                    </span>
                    <span>6 guests * 3 bedrooms * 6 beds * 1 bath</span>
                  </div>
                  <Image
                    src={
                      "https://a0.muscache.com/im/pictures/user/b448052f-c8a8-4dc7-8e32-62f1e68754f1.jpg?im_w=240"
                    }
                    width={"50px"}
                    height={"50px"}
                    alt='Profile image'
                    layout='fixed'
                    className='rounded-full'
                  />
                </div>
                <div className='h-[1px] w-full my-5 bg-gray-300'></div>
                <div className='flex flex-col gap-4 w-full'>
                  <div className='flex gap-4 items-start'>
                    <svg width='2em' height='2em' viewBox='0 0 24 24'>
                      <path
                        fill='currentColor'
                        d='M11 13q.425 0 .713-.288Q12 12.425 12 12t-.287-.713Q11.425 11 11 11t-.712.287Q10 11.575 10 12t.288.712Q10.575 13 11 13Zm-4 8v-2l6-1V6.875q0-.375-.225-.675q-.225-.3-.575-.35L7 5V3l5.5.9q1.1.2 1.8 1.025T15 6.85v12.8Zm-4 0v-2h2V5q0-.85.588-1.425Q6.175 3 7 3h10q.85 0 1.425.575Q19 4.15 19 5v14h2v2Zm4-2h10V5H7Z'
                      ></path>
                    </svg>
                    <div className='flex flex-col'>
                      <span className='text-md font-semibold'>
                        Self check-in
                      </span>
                      <span className='text-sm'>
                        Check yourself in with the lockbox.
                      </span>
                    </div>
                  </div>
                  <div className='flex gap-4 items-start'>
                    <svg width='2em' height='2em' viewBox='0 0 48 48'>
                      <g
                        fill='none'
                        stroke='currentColor'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='4'
                      >
                        <circle cx='24' cy='12' r='8'></circle>
                        <path d='M42 44c0-9.941-8.059-18-18-18S6 34.059 6 44'></path>
                      </g>
                    </svg>
                    <div className='flex flex-col'>
                      <span className='text-md font-semibold'>
                        Pekka is a Superhost
                      </span>
                      <span className='text-sm'>
                        Superhosts are experienced, highly rated hosts who are
                        committed to providing great stays for guests.
                      </span>
                    </div>
                  </div>
                  <div className='flex gap-4 items-start'>
                    <svg width='2em' height='2em' viewBox='0 0 512 512'>
                      <path
                        fill='currentColor'
                        d='M253.924 127.592a64 64 0 1 0 64 64a64.073 64.073 0 0 0-64-64Zm0 96a32 32 0 1 1 32-32a32.037 32.037 0 0 1-32 32Z'
                      ></path>
                      <path
                        fill='currentColor'
                        d='M376.906 68.515A173.922 173.922 0 0 0 108.2 286.426l120.907 185.613a29.619 29.619 0 0 0 49.635 0l120.911-185.613a173.921 173.921 0 0 0-22.747-217.911Zm-4.065 200.444l-118.916 182.55l-118.917-182.55c-36.4-55.879-28.593-130.659 18.563-177.817a141.92 141.92 0 0 1 200.708 0c47.156 47.158 54.962 121.938 18.562 177.817Z'
                      ></path>
                    </svg>
                    <div className='flex flex-col'>
                      <span className='text-md font-semibold'>
                        Great location
                      </span>
                      <span className='text-sm'>
                        100% of recent guests gave the location a 5-star rating.
                      </span>
                    </div>
                  </div>
                </div>
                <div className='h-[1px] w-full my-5 bg-gray-300'></div>
                <div className='w-full'>
                  <span className='text-2xl font-semibold'>
                    What this place offers
                  </span>
                  <div className='flex mt-5 w-full'>
                    <div className='flex flex-col gap-2'>
                      <div className='flex gap-2'>
                        <svg width='1.5em' height='1.5em' viewBox='0 0 24 24'>
                          <path
                            fill='none'
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M19 3v12h-5c-.023-3.681.184-7.406 5-12zm0 12v6h-1v-3M8 4v17M5 4v3a3 3 0 1 0 6 0V4'
                          ></path>
                        </svg>
                        <span>Kitchen</span>
                      </div>
                      <div className='flex gap-2'>
                        <svg width='1.5em' height='1.5em' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='M6 19v.525q0 .625-.425 1.05Q5.15 21 4.5 21q-.625 0-1.062-.438Q3 20.125 3 19.5V12l2.1-6q.15-.45.538-.725Q6.025 5 6.5 5h11q.475 0 .863.275q.387.275.537.725l2.1 6v7.525q0 .625-.425 1.05Q20.15 21 19.5 21q-.625 0-1.062-.438Q18 20.125 18 19.5V19Zm-.2-9h12.4l-1.05-3H6.85ZM5 12v5Zm2.5 4q.625 0 1.062-.438Q9 15.125 9 14.5t-.438-1.062Q8.125 13 7.5 13t-1.062.438Q6 13.875 6 14.5t.438 1.062Q6.875 16 7.5 16Zm9 0q.625 0 1.062-.438Q18 15.125 18 14.5t-.438-1.062Q17.125 13 16.5 13t-1.062.438Q15 13.875 15 14.5t.438 1.062Q15.875 16 16.5 16ZM5 17h14v-5H5Z'
                          ></path>
                        </svg>
                        <span>Free parking on premises</span>
                      </div>
                      <div className='flex gap-2'>
                        <svg width='1.5em' height='1.5em' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='m6.35 15.35l-2.1-2.15q1.475-1.475 3.463-2.337Q9.7 10 12 10t4.288.875q1.987.875 3.462 2.375l-2.1 2.1q-1.1-1.1-2.55-1.725Q13.65 13 12 13q-1.65 0-3.1.625q-1.45.625-2.55 1.725ZM2.1 11.1L0 9q2.3-2.35 5.375-3.675Q8.45 4 12 4t6.625 1.325Q21.7 6.65 24 9l-2.1 2.1q-1.925-1.925-4.462-3.013Q14.9 7 12 7T6.562 8.087Q4.025 9.175 2.1 11.1ZM12 21l3.525-3.55q-.675-.675-1.575-1.063Q13.05 16 12 16q-1.05 0-1.95.387q-.9.388-1.575 1.063Z'
                          ></path>
                        </svg>
                        <span>Wifi</span>
                      </div>
                      <div className='flex gap-2'>
                        <svg width='1.5em' height='1.5em' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='M21 17H3V5h18m0-2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5v2h8v-2h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z'
                          ></path>
                        </svg>
                        <span>42" HDTV with Netflix</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-span-4 flex flex-col border rounded-xl max-h-full ml-16 mt-8 p-7 h-52 shadow-xl'>
                <div className='flex justify-between items-center'>
                  <div className='flex items-end gap-1'>
                    <span className='text-xl'>$108.45</span>
                    <span className='text-sm'>night</span>
                  </div>
                  <div className='flex items-center gap-1 text-sm'>
                    <svg width='1em' height='1em' viewBox='0 0 24 24'>
                      <path
                        fill='currentColor'
                        d='m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275Z'
                      ></path>
                    </svg>
                    <span>4.95 · 40 reviews</span>
                  </div>
                </div>
                <div className='flex flex-col mt-4'>
                  <div className='flex w-full'>
                    <div className='flex flex-col w-1/2 border p-2 text-xs rounded-tl-lg cursor-pointer'>
                      <span>CHECK-IN</span>
                      <input
                        type='date'
                        className='border-none focus:outline-none'
                      />
                    </div>
                    <div className='flex flex-col w-1/2 border p-2 text-xs rounded-tr-lg cursor-pointer'>
                      <span>CHECK-OUT</span>
                      <input
                        type='date'
                        className='border-none focus:outline-none'
                      />
                    </div>
                  </div>
                  <button className='flex w-full justify-center py-2 bg-rose-500 rounded-md text-white text-center mt-4'>
                    <span>Check availability</span>
                  </button>
                </div>
              </div>
            </div>
            <div className='h-[1px] w-full my-5 bg-gray-300'></div>
            <div className='flex flex-col mt-10'>
              <div className='flex gap-2 items-center text-black mb-5'>
                <svg width='1.5em' height='1.5em' viewBox='0 0 24 24'>
                  <path
                    fill='currentColor'
                    d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27z'
                  ></path>
                </svg>
                <span className='text-xl'>4.95 · 40 reviews</span>
              </div>
              <div className='flex items-center w-full gap-10'>
                <div className='flex flex-col w-1/2 '>
                  <div className='flex items-center justify-between w-full'>
                    <span>Cleanliness</span>
                    <div className='flex items-center h-full gap-2'>
                      <div className='flex w-40 bg-gray-200 rounded-full h-1.5 mb-4 '>
                        <div
                          className='bg-blue-600 h-1.5 rounded-full flex items-center justify-center'
                          style={{ width: "45%" }}
                        ></div>
                      </div>
                      <span>4.8</span>
                    </div>
                  </div>
                  <div className='flex items-center justify-between w-full'>
                    <span>Communication</span>
                    <div className='flex items-center h-full gap-2'>
                      <div className='flex w-40 bg-gray-200 rounded-full h-1.5 mb-4 '>
                        <div
                          className='bg-blue-600 h-1.5 rounded-full flex items-center justify-center'
                          style={{ width: "45%" }}
                        ></div>
                      </div>
                      <span>4.8</span>
                    </div>
                  </div>
                  <div className='flex items-center justify-between w-full'>
                    <span>Check-in</span>
                    <div className='flex items-center h-full gap-2'>
                      <div className='flex w-40 bg-gray-200 rounded-full h-1.5 mb-4 '>
                        <div
                          className='bg-blue-600 h-1.5 rounded-full flex items-center justify-center'
                          style={{ width: "45%" }}
                        ></div>
                      </div>
                      <span>4.8</span>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col w-1/2 '>
                  <div className='flex items-center justify-between w-full'>
                    <span>Cleanliness</span>
                    <div className='flex items-center h-full gap-2'>
                      <div className='flex w-40 bg-gray-200 rounded-full h-1.5 mb-4 '>
                        <div
                          className='bg-blue-600 h-1.5 rounded-full flex items-center justify-center'
                          style={{ width: "45%" }}
                        ></div>
                      </div>
                      <span>4.8</span>
                    </div>
                  </div>
                  <div className='flex items-center justify-between w-full'>
                    <span>Communication</span>
                    <div className='flex items-center h-full gap-2'>
                      <div className='flex w-40 bg-gray-200 rounded-full h-1.5 mb-4 '>
                        <div
                          className='bg-blue-600 h-1.5 rounded-full flex items-center justify-center'
                          style={{ width: "45%" }}
                        ></div>
                      </div>
                      <span>4.8</span>
                    </div>
                  </div>
                  <div className='flex items-center justify-between w-full'>
                    <span>Check-in</span>
                    <div className='flex items-center h-full gap-2'>
                      <div className='flex w-40 bg-gray-200 rounded-full h-1.5 mb-4 '>
                        <div
                          className='bg-blue-600 h-1.5 rounded-full flex items-center justify-center'
                          style={{ width: "45%" }}
                        ></div>
                      </div>
                      <span>4.8</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default RealEstateDetail;
