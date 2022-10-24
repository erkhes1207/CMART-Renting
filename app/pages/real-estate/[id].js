import Layout from "../../components/Layout";

const RealEstateDetail = () => {
  return (
    <Layout>
      <div className="flex w-full h-full justify-center items-center">
        <div className="flex max-w-7xl w-full gap-5">
          <section className="overflow-hidden text-gray-700 w-full">
            <div className="mx-auto lg:px-32 w-full">
              <div className="flex w-full">
                <div className="w-1/2 p-1">
                  <img
                    alt="gallery"
                    className="block object-cover object-center rounded-tl-2xl rounded-bl-2xl w-full h-[335px]"
                    src="https://a0.muscache.com/im/pictures/miso/Hosting-629170893088045571/original/b4542d4a-2487-47a8-9035-0ba2858213d8.jpeg?im_w=720"
                  />
                </div>
                <div className="flex flex-wrap w-1/2 h-full">
                  <div className="w-1/2 pr-1 py-1 h-44">
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-80 h-40"
                      src="https://a0.muscache.com/im/pictures/miso/Hosting-629170893088045571/original/6b18c223-3b31-48ab-bd36-3073048825e4.jpeg?im_w=720"
                    />
                  </div>
                  <div className="w-1/2 py-1 h-44">
                    <img
                      alt="gallery"
                      className="block object-cover object-center rounded-tr-2xl w-80 h-40"
                      src="https://a0.muscache.com/im/pictures/miso/Hosting-629170893088045571/original/bff0e97e-dc0d-425f-890d-cedd31697ce7.jpeg?im_w=720"
                    />
                  </div>
                  <div className="w-1/2 pr-1 h-44">
                    <img
                      alt="gallery"
                      className="block object-cover object-center w-80 h-40"
                      src="https://a0.muscache.com/im/pictures/miso/Hosting-629170893088045571/original/58cb528b-86aa-4d91-967c-e55cc6b6a245.jpeg?im_w=720"
                    />
                  </div>
                  <div className="w-1/2 h-44">
                    <img
                      alt="gallery"
                      className="block object-cover object-center rounded-br-2xl w-80 h-40"
                      src="https://a0.muscache.com/im/pictures/miso/Hosting-629170893088045571/original/3d7c334f-03b7-4fc6-9d95-a5221fbb4177.jpeg?im_w=720"
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
