import Layout from "../../components/Layout";

const RealEstateDetail = () => {
  return (
    <Layout>
      <div className='flex w-full h-full justify-center items-center'>
        <div className='flex max-w-7xl w-full gap-5'>
          <section className='overflow-hidden text-gray-700 w-full'>
            <div className='lg:px-28 w-full'>
              <div className='flex flex-col my-4'>
                <span className='text-2xl font-semibold text-black'>
                  Яармагийн belmonte хотхонд тавилгатай 3 өрөө
                </span>
                <div className='flex w-full justify-between'>
                  <span className='underline'>Ulaanbaatar, Mongolia</span>
                  <div className='flex items-center gap-5'>
                    <div className='flex items-center gap-1'>
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
                    <div className='flex items-center gap-1'>
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
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
};

export default RealEstateDetail;
