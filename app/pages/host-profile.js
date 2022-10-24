import React from "react";
import Layout from "../components/Layout";
export default function HostProfile() {
  return (
    <Layout>
      <div className="flex w-full justify-center p-5 lg:p-3">
        <div className="flex flex-col sm:flex-row max-w-5xl w-full mt-10 gap-8">
          <div className="flex flex-col w-full sm:w-5/12 lg:w-4/12 border rounded-xl px-4 py-2">
            <div className="w-full flex justify-center">
              <img
                src="https://a0.muscache.com/im/pictures/user/7a035bd3-e491-4ca4-a06b-4841dca46c6e.jpg?aki_policy=profile_large"
                alt=""
                width={"130px"}
                height={"130px"}
                className="rounded-full mt-3"
              />
            </div>

            <div className="flex flex-col gap-1 mt-4">
              <div className="flex font-lg text-lg font-semibold gap-2 mt-2">
                <div className="mt-1">
                  <svg
                    width="1.2em"
                    height="1.2em"
                    viewBox="0 0 24 24"
                    className="fill-blue-500"
                  >
                    <path
                      fill="currentColor"
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                    ></path>
                  </svg>
                </div>
                <span>Superhost </span>
              </div>
              <div className="text-lg font-semibold flex gap-2 mt-2">
                <div className="mt-1">
                  <svg width="1.2em" height="1.2em" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4l1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"
                    ></path>
                  </svg>
                </div>
                <span>974 reviews </span>
              </div>
              <div className="text-lg font-semibold flex gap-2 mt-2">
                <div className="mt-1">
                  <svg width="1.2em" height="1.2em" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4l1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"
                    ></path>
                  </svg>
                </div>
                <span>Identify verified </span>
              </div>
              <div className="border-b-2 my-5"></div>
              <div className="font-semibold text-2xl">Clay Confirmed</div>
              <div className="text-lg font-semibold flex gap-2 mt-2">
                <div className="mt-1">
                  <svg width="1.2em" height="1.2em" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"
                    ></path>
                  </svg>
                </div>
                <span>Identify </span>
              </div>
              <div className="text-lg font-semibold flex gap-2 mt-2">
                <div className="mt-1">
                  <svg width="1.2em" height="1.2em" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"
                    ></path>
                  </svg>
                </div>
                <span>Email address </span>
              </div>
              <div className="text-lg font-semibold flex gap-2 mt-2">
                <div className="mt-1">
                  <svg width="1.2em" height="1.2em" viewBox="0 0 24 24">
                    <path
                      fill="currentColor"
                      d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41z"
                    ></path>
                  </svg>
                </div>
                <span>Phone Number</span>
              </div>
              <div className="text-sm mt-2">
                Learn more about how confirming account info helps keep the
                Airbnb community secure.
              </div>
            </div>
          </div>
          <div className="w-full sm:w-7/12 lg:w-8/12 ml-10">
            <div className="flex items-center w-full justify-between">
              <span className="text-2xl font-bold">My Real Estates</span>
              <button className="flex gap-1 border rounded-3xl px-4 py-2 items-center">
                <span>All</span>
                <svg width="1.5em" height="1.5em" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12 14.975q-.2 0-.387-.075q-.188-.075-.313-.2l-4.6-4.6q-.275-.275-.275-.7q0-.425.275-.7q.275-.275.7-.275q.425 0 .7.275l3.9 3.9l3.9-3.9q.275-.275.7-.275q.425 0 .7.275q.275.275.275.7q0 .425-.275.7l-4.6 4.6q-.15.15-.325.212q-.175.063-.375.063Z"
                  ></path>
                </svg>
              </button>
            </div>
            <span className="text-sm text-slate-400">Joined in 2020</span>{" "}
            <div className="mt-10">
              <span className=" text-xl">About</span>
              <p className="mt-3 text-base">
                Hello! My daughter Harper and I are so glad you have chosen to
                look at our yurts here in Cantwell, AK. We work hard to bring
                Alaska’s beauty to all who stay with us while still supplying
                some of the…
                <a href="" className="font-semibold">
                  read more
                </a>
              </p>
            </div>
            <div className="text-base flex gap-2 mt-2">
              <div className="mt-1">
                <svg width="1.3em" height="1.3em" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M19 9.3V4h-3v2.6L12 3L2 12h3v8h5v-6h4v6h5v-8h3l-3-2.7zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2h-4z"
                  ></path>
                </svg>
              </div>
              <span className="mt-0.5">Lives in Cantwell, AK</span>
            </div>
            <div className="text-base flex gap-2 mt-2">
              <div className="mt-1">
                <svg width="1.3em" height="1.3em" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"
                  ></path>
                </svg>
              </div>
              <span className="mt-0.5">Work: Big Wild Outfitters</span>
            </div>
            <div className="border-b-2 my-5"></div>
            <div>
              <span className="text-2xl font-semibold">Clay's Listings</span>
              <div className="flex gap-5 mt-5">
                <div>
                  <img
                    src="https://a0.muscache.com/im/pictures/56682f82-99f6-4015-a494-7a90500729f0.jpg?im_w=1200"
                    alt=""
                    width={"300px"}
                    height={"50px"}
                    className="rounded-lg"
                  />
                  <div className="text-base flex gap-2 mt-2">
                    <div className="mt-1">
                      <svg width="1.4em" height="1.4em" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19 9.3V4h-3v2.6L12 3L2 12h3v8h5v-6h4v6h5v-8h3l-3-2.7zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2h-4z"
                        ></path>
                      </svg>
                    </div>
                    <span className="mt-0.5 text-sm">
                      4.94 <span className="text-slate-500">(394)</span>
                    </span>{" "}
                  </div>
                  <span>Entire home/apt - Yurt</span>
                </div>

                <div>
                  <img
                    src="https://a0.muscache.com/im/pictures/1c016d30-9d6b-47a4-a64e-d6b7d3d4fcdb.jpg?im_w=960"
                    alt=""
                    width={"300px"}
                    height={"50px"}
                    className="rounded-lg"
                  />
                  <div className="text-base flex gap-2 mt-2">
                    <div className="mt-1">
                      <svg width="1.4em" height="1.4em" viewBox="0 0 24 24">
                        <path
                          fill="currentColor"
                          d="M19 9.3V4h-3v2.6L12 3L2 12h3v8h5v-6h4v6h5v-8h3l-3-2.7zm-9 .7c0-1.1.9-2 2-2s2 .9 2 2h-4z"
                        ></path>
                      </svg>
                    </div>
                    <span className="mt-0.5 text-sm">
                      4.94 <span className="text-slate-500">(394)</span>
                    </span>{" "}
                  </div>
                  <span>Entire house - Mansion</span>
                </div>
              </div>
            </div>
            <div className="border-b-2 my-5"></div>
            <div>
              <div className="text-base flex gap-2 mt-2">
                <div className="mt-1">
                  <svg
                    width="1.4em"
                    height="1.4em"
                    viewBox="0 0 24 24"
                    className="fill-blue-500"
                  >
                    <path
                      fill="currentColor"
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21z"
                    ></path>
                  </svg>
                </div>
                <span className="mt-0.5 text-md">203 reviews</span>
              </div>
            </div>
            <div className="flex gap-3 mt-2">
              <span className="font-semibold">From guests (153)</span>
              <span className="font-semibold">From hosts (50)</span>
            </div>
            <div className="border-b-2 my-5"></div>
            <div>
              <div className="space-y-2">
                <span className="font-semibold">
                  "Experience Alaska" Yurt Rental #2 Open Year-Round
                </span>{" "}
                <br />
                <span className="text-slate-500 text-sm">October 2020</span>
                <p>
                  "the yurt was warm and comfortable. the view was incredible
                  and we woke up to a sunrise turning the mountains pink and
                  glowing."
                </p>
                <div className="flex">
                  <img
                    src="https://a0.muscache.com/im/pictures/user/7a035bd3-e491-4ca4-a06b-4841dca46c6e.jpg?aki_policy=profile_large"
                    alt=""
                    height={"60px"}
                    width={"60px"}
                    className="rounded-full mt-3"
                  />
                  <div className="flex flex-col mt-3 ml-3">
                    <span className="font-semibold">Rebecca</span>
                    <span className="text-slate-500 text-sm">October 2020</span>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <span className="font-semibold">
                  "Experience Alaska" Yurt Rental #2 Open Year-Round
                </span>{" "}
                <br />
                <span className="text-slate-500 text-sm">October 2020</span>
                <p>
                  "the yurt was warm and comfortable. the view was incredible
                  and we woke up to a sunrise turning the mountains pink and
                  glowing."
                </p>
                <div className="flex">
                  <img
                    src="https://a0.muscache.com/im/pictures/user/7a035bd3-e491-4ca4-a06b-4841dca46c6e.jpg?aki_policy=profile_large"
                    alt=""
                    height={"60px"}
                    width={"60px"}
                    className="rounded-full mt-3"
                  />
                  <div className="flex flex-col mt-3 ml-3">
                    <span className="font-semibold">Rebecca</span>
                    <span className="text-slate-500 text-sm">October 2020</span>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <span className="font-semibold">
                  "Experience Alaska" Yurt Rental #2 Open Year-Round
                </span>{" "}
                <br />
                <span className="text-slate-500 text-sm">October 2020</span>
                <p>
                  "the yurt was warm and comfortable. the view was incredible
                  and we woke up to a sunrise turning the mountains pink and
                  glowing."
                </p>
                <div className="flex">
                  <img
                    src="https://a0.muscache.com/im/pictures/user/7a035bd3-e491-4ca4-a06b-4841dca46c6e.jpg?aki_policy=profile_large"
                    alt=""
                    height={"60px"}
                    width={"60px"}
                    className="rounded-full mt-3"
                  />
                  <div className="flex flex-col mt-3 ml-3">
                    <span className="font-semibold">Rebecca</span>
                    <span className="text-slate-500 text-sm">October 2020</span>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <span className="font-semibold">
                  "Experience Alaska" Yurt Rental #2 Open Year-Round
                </span>{" "}
                <br />
                <span className="text-slate-500 text-sm">October 2020</span>
                <p>
                  "the yurt was warm and comfortable. the view was incredible
                  and we woke up to a sunrise turning the mountains pink and
                  glowing."
                </p>
                <div className="flex">
                  <img
                    src="https://a0.muscache.com/im/pictures/user/7a035bd3-e491-4ca4-a06b-4841dca46c6e.jpg?aki_policy=profile_large"
                    alt=""
                    height={"60px"}
                    width={"60px"}
                    className="rounded-full mt-3"
                  />
                  <div className="flex flex-col mt-3 ml-3">
                    <span className="font-semibold">Rebecca</span>
                    <span className="text-slate-500 text-sm">October 2020</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 gap-3"></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
