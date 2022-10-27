import Image from "next/image";
import Link from "next/link";

const RealEstateDetail = () => {
  return (
    <div className='flex w-full h-full justify-center items-center min-h-screen mb-10'>
      <div className='flex sm:max-w-7xl w-full gap-5'>
        <section className='overflow-hidden text-gray-700 w-full'>
          <div className='px-4 sm:px-28 w-full'>
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
              <div className='col-span-10 sm:col-span-6 my-4'>
                <div className='flex justify-between w-full mt-4'>
                  <div className='flex flex-col gap-1'>
                    <span className='text-xl font-semibold'>
                      Яармагийн belmonte хотхонд тавилгатай 3 өрөө
                    </span>
                    <span>3 өрөө * 2 угаалгын өрөө * 84мк * Орон сууц</span>
                  </div>
                  <Link href={"/host-profile"}>
                    <img
                      src='https://i.imgur.com/oKBv9hj.jpeg'
                      alt=''
                      width={"60px"}
                      className='rounded-full'
                    />
                  </Link>
                </div>

                <div className='h-[1px] w-full my-5 bg-gray-300'></div>
                <div className='w-full'>
                  <span className='text-2xl font-semibold'>Давуу талууд</span>
                  <div className='flex mt-5 w-full'>
                    <div className='flex flex-col gap-2 w-1/2'>
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
                        <span>Гал тогооны тавилга</span>
                      </div>
                      <div className='flex gap-2'>
                        <svg width='1.5em' height='1.5em' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='M6 19v.525q0 .625-.425 1.05Q5.15 21 4.5 21q-.625 0-1.062-.438Q3 20.125 3 19.5V12l2.1-6q.15-.45.538-.725Q6.025 5 6.5 5h11q.475 0 .863.275q.387.275.537.725l2.1 6v7.525q0 .625-.425 1.05Q20.15 21 19.5 21q-.625 0-1.062-.438Q18 20.125 18 19.5V19Zm-.2-9h12.4l-1.05-3H6.85ZM5 12v5Zm2.5 4q.625 0 1.062-.438Q9 15.125 9 14.5t-.438-1.062Q8.125 13 7.5 13t-1.062.438Q6 13.875 6 14.5t.438 1.062Q6.875 16 7.5 16Zm9 0q.625 0 1.062-.438Q18 15.125 18 14.5t-.438-1.062Q17.125 13 16.5 13t-1.062.438Q15 13.875 15 14.5t.438 1.062Q15.875 16 16.5 16ZM5 17h14v-5H5Z'
                          ></path>
                        </svg>
                        <span>Байрны зогсоолтой</span>
                      </div>
                      <div className='flex gap-2'>
                        <svg width='1.5em' height='1.5em' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='m6.35 15.35l-2.1-2.15q1.475-1.475 3.463-2.337Q9.7 10 12 10t4.288.875q1.987.875 3.462 2.375l-2.1 2.1q-1.1-1.1-2.55-1.725Q13.65 13 12 13q-1.65 0-3.1.625q-1.45.625-2.55 1.725ZM2.1 11.1L0 9q2.3-2.35 5.375-3.675Q8.45 4 12 4t6.625 1.325Q21.7 6.65 24 9l-2.1 2.1q-1.925-1.925-4.462-3.013Q14.9 7 12 7T6.562 8.087Q4.025 9.175 2.1 11.1ZM12 21l3.525-3.55q-.675-.675-1.575-1.063Q13.05 16 12 16q-1.05 0-1.95.387q-.9.388-1.575 1.063Z'
                          ></path>
                        </svg>
                        <span>Wifi интернет холбогдсон</span>
                      </div>
                      <div className='flex gap-2'>
                        <svg width='1.5em' height='1.5em' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='M21 17H3V5h18m0-2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5v2h8v-2h5a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2Z'
                          ></path>
                        </svg>
                        <span>42" HDTV with Netflix зурагттай</span>
                      </div>
                    </div>
                    <div className='flex flex-col gap-2 w-1/2'>
                      <div className='flex gap-2'>
                        <svg width='1.5em' height='1.5em' viewBox='0 0 512 512'>
                          <path
                            fill='currentColor'
                            d='m240.801 293.826l-23.851 23.851l23.8 47.6l23.417-24.718l-23.366-46.733zm15.177 101.906l22.299 44.6l23.418-24.719l-22.3-44.599l-23.417 24.718zM438.926 202.62L415.8 227.032l44.423 21.246l23.127-24.412l-44.424-21.246zm-96.323-10.596l42.861 20.499l23.127-24.411l-41.992-20.084l-23.996 23.996zm-34.818 149.022l28.523 38.031l22.325-23.565l-28.523-38.031l-22.325 23.565zm2.848-49.534l-28.936-38.582l-22.857 22.857l29.468 39.29l22.325-23.565zm-9.89-57.628l36.683 29.347l22.085-23.313l-36.001-28.801l-22.767 22.767zm61.758 49.407l36.721 29.377l22.085-23.313l-36.721-29.376l-22.085 23.312zm-13.814-182.604l-26.24 26.239l-24.718-24.718a111.609 111.609 0 0 0-157.839 0c-.342.341-.673.689-1.009 1.034A77.974 77.974 0 0 0 16 166.988V408h32V166.988a45.975 45.975 0 0 1 72.048-37.868a111.809 111.809 0 0 0 19.842 130.929l24.717 24.717l-23.92 23.921l20 20l208-208ZM185.006 259.911l-22.489-22.489A79.611 79.611 0 0 1 275.1 124.835l22.489 22.49Z'
                          ></path>
                        </svg>
                        <span>Шүршүүр</span>
                      </div>
                      <div className='flex gap-2'>
                        <svg width='1.5em' height='1.5em' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='M17 2H7c-1.1 0-2 .9-2 2v15a2 2 0 0 0 2 2v1h2v-1h6v1h2v-1c1.11 0 2-.89 2-2V4a2 2 0 0 0-2-2m0 17H7V4h10v15m-7-4H8v-5h2v5Z'
                          ></path>
                        </svg>
                        <span>Хөргөгчтэй</span>
                      </div>
                      <div className='flex gap-2'>
                        <svg width='1.5em' height='1.5em' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='M7.95 3L6.53 5.19L7.95 7.4h-.01l-1.99 3.1l-1.73-.9l1.42-2.21l-1.42-2.2l2-3.1L7.95 3m6-.11L12.53 5.1l1.42 2.2l-.01.01l-1.99 3.09l-1.73-.9l1.42-2.2l-1.42-2.2l2-3.1l1.73.89m6.05 0L18.56 5.1L20 7.3v.01l-2 3.09l-1.75-.9l1.42-2.2l-1.42-2.2l2-3.1l1.75.89M2 22v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8h-2v-2H4v2H2m4-8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1m4 0a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z'
                          ></path>
                        </svg>
                        <span>Төвийн халаалт</span>
                      </div>
                      <div className='flex gap-2'>
                        <svg width='1.5em' height='1.5em' viewBox='0 0 24 24'>
                          <path
                            fill='currentColor'
                            d='M5 21q-.825 0-1.413-.587Q3 19.825 3 19V5q0-.825.587-1.413Q4.175 3 5 3h14q.825 0 1.413.587Q21 4.175 21 5v14q0 .825-.587 1.413Q19.825 21 19 21Zm0-9v7h14v-7h-2v5H7v-5Zm4 3h6v-3H9Zm-4-5h14V5H5Zm3-2q-.425 0-.713-.287Q7 7.425 7 7t.287-.713Q7.575 6 8 6t.713.287Q9 6.575 9 7t-.287.713Q8.425 8 8 8Zm4 0q-.425 0-.712-.287Q11 7.425 11 7t.288-.713Q11.575 6 12 6t.713.287Q13 6.575 13 7t-.287.713Q12.425 8 12 8Zm4 0q-.425 0-.712-.287Q15 7.425 15 7t.288-.713Q15.575 6 16 6t.712.287Q17 6.575 17 7t-.288.713Q16.425 8 16 8Z'
                          ></path>
                        </svg>
                        <span>Плетка</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='h-[1px] w-full my-5 bg-gray-300'></div>
                <div className='flex flex-col gap-4 w-full'>
                  <div className='flex gap-4 items-center'>
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
                        Сайн түрээслэгч
                      </span>
                    </div>
                  </div>
                  <div className='flex gap-4 items-center'>
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
                        Байршил сайтай
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-span-10 sm:col-span-4 flex flex-col border rounded-xl max-h-full sm:ml-16 mt-8 p-7 h-52 shadow-xl'>
                <div className='flex justify-between items-center'>
                  <div className='flex items-end gap-1'>
                    <span className='text-xl'>2,200,000₮</span>
                    <span className='text-sm'>/ сар</span>
                  </div>
                  <div className='flex items-center gap-1 text-sm'>
                    <svg width='1em' height='1em' viewBox='0 0 24 24'>
                      <path
                        fill='currentColor'
                        d='m5.825 22l1.625-7.025L2 10.25l7.2-.625L12 3l2.8 6.625l7.2.625l-5.45 4.725L18.175 22L12 18.275Z'
                      ></path>
                    </svg>
                    <span>4.95 · 12 сэтгэгдэл</span>
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
                    <span>Түрээслэх</span>
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
                <span className='text-xl'>4.95 · 12 сэтгэгдэл</span>
              </div>
              <div className='flex flex-col sm:flex-row items-center w-full gap-10'>
                <div className='flex flex-col w-full sm:w-1/2 '>
                  <div className='flex items-center justify-between w-full'>
                    <span>Цэвэр байдал</span>
                    <div className='flex items-center h-full gap-2'>
                      <div className='flex w-40 bg-gray-200 rounded-full h-1.5 mb-4 '>
                        <div
                          className='bg-blue-600 h-1.5 rounded-full flex items-center justify-center'
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                      <span>5.0</span>
                    </div>
                  </div>
                  <div className='flex items-center justify-between w-full'>
                    <span>Харилцаа</span>
                    <div className='flex items-center h-full gap-2'>
                      <div className='flex w-40 bg-gray-200 rounded-full h-1.5 mb-4 '>
                        <div
                          className='bg-blue-600 h-1.5 rounded-full flex items-center justify-center'
                          style={{ width: "85%" }}
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
                          style={{ width: "90%" }}
                        ></div>
                      </div>
                      <span>4.8</span>
                    </div>
                  </div>
                </div>
                <div className='flex flex-col w-full sm:w-1/2 '>
                  <div className='flex items-center justify-between w-full'>
                    <span>Үнийн нөхцөл</span>
                    <div className='flex items-center h-full gap-2'>
                      <div className='flex w-40 bg-gray-200 rounded-full h-1.5 mb-4 '>
                        <div
                          className='bg-blue-600 h-1.5 rounded-full flex items-center justify-center'
                          style={{ width: "81%" }}
                        ></div>
                      </div>
                      <span>4.8</span>
                    </div>
                  </div>
                  <div className='flex items-center justify-between w-full'>
                    <span>Байршил</span>
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
