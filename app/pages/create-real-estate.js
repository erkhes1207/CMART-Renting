import React from "react";
import Layout from "../components/Layout";
export default function RealEstateForm() {
  return (
    <div className='w-full p-5 lg:p-3'>
      <div className='mt-10'>
        <div className='font-body'>
          <div className='w-full p-6 mx-auto my-5 border rounded-2xl space-y-6 sm:w-4/5 lg:w-1/2'>
            <div className='space-y-2'>
              <h3 className='text-xl font-semibold'>Host your real estate</h3>
              <span className='text-gray-500'>
                Fill out a few details to start receiving payments directly to
                your bank account
              </span>
            </div>

            <div className='space-y-2'>
              <div className='flex justify-between gap-4'>
                <span className='uppercase text-sm font-semibold w-full'>
                  Title
                </span>
                <span className='uppercase text-sm font-semibold w-full'>
                  Description
                </span>
              </div>
              <div className='flex justify-between gap-4'>
                <input
                  type='text'
                  className='w-full h-12 px-3 border rounded-md focus:outline-none'
                  placeholder='Энхтайван хотхонд гражын хамт 3 өрөө байр'
                />
                <input
                  type='text'
                  className='w-full h-12 px-3 border rounded-md focus:outline-none'
                  placeholder="
                    Цэнгэлдэх хотхоны эсрэг талд буюу Энхтайваны гүүрний баруун урд талд байршилтай 'Хурд' группын барьсан 20 давхар байрны 17 давхарт 3 өрөө бүрэн тавилгатай саруул сэлүүхэн, үзэгдэх орчинмаш гоё байрыг гражийн хамт түрээслүүлнэ."
                />
              </div>
            </div>

            <div className='space-y-2'>
              <div className='flex justify-between gap-4'>
                <span className='uppercase text-sm font-semibold w-full'>
                  Type
                </span>
                <span className='uppercase text-sm font-semibold w-full'>
                  Location
                </span>
              </div>
              <div className='flex justify-between gap-4'>
                <input
                  type='text'
                  className='w-full h-12 px-3 border rounded-md focus:outline-none'
                  placeholder='Apartment'
                />
                <input
                  type='text'
                  className='w-full  h-12 px-3 border rounded-md focus:outline-none'
                  placeholder='
                    Central tower, 2 Sukhbaatar Square, Khoroo 8, Sukhbaatar District 14200 Ulaanbaatar, Mongolia'
                />
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
                    className='w-full h-12 px-3 border rounded-md focus:outline-none'
                    placeholder='Mongolia'
                  />
                </div>
                <div className='w-1/2'>
                  <span className='uppercase text-sm font-semibold'>
                    Street
                  </span>
                  <input
                    type='text'
                    className='w-full  h-12 px-3 border rounded-md focus:outline-none'
                    placeholder='Сөүлийн гудамж'
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
                    className='w-full h-12 px-3 border rounded-md focus:outline-none'
                    placeholder='apt suite'
                  />
                </div>
                <div className='w-1/2'>
                  <span className='uppercase text-sm font-semibold'>City</span>
                  <input
                    type='text'
                    className='w-full  h-12 px-3 border rounded-md focus:outline-none'
                    placeholder='Ulaanbaatar'
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
                    className='w-full h-12 px-3 border rounded-md focus:outline-none'
                    placeholder='state'
                  />
                </div>
                <div className='w-1/2'>
                  <span className='uppercase text-sm font-semibold'>
                    Zip Code
                  </span>
                  <input
                    type='text'
                    className='w-full  h-12 px-3 border rounded-md focus:outline-none'
                    placeholder='000121'
                  />
                </div>
              </div>
            </div>

            <div className='space-y-2'>
              <div className='flex justify-between gap-4'>
                <label
                  htmlFor='room'
                  className='uppercase text-sm font-semibold w-full'
                >
                  Room
                </label>
                <label
                  htmlFor='people'
                  className='uppercase text-sm font-semibold w-full'
                >
                  People
                </label>
              </div>

              <div className='flex justify-between gap-4'>
                <select
                  name='room'
                  id='room'
                  defaultValue={"room-1"}
                  className='w-full h-12 px-3 border rounded-md focus:outline-none'
                >
                  <option value='room-1'>1</option>
                  <option value='room-2'>2</option>
                  <option value='room-3'>3</option>
                  <option value='room-4'>4</option>
                  <option value='room-5'>5</option>
                </select>
                <select
                  name='people'
                  id='people'
                  className='w-full h-12 px-3 border rounded-md focus:outline-none'
                >
                  <option value='people-1'>1</option>
                  <option value='people-2'>2</option>
                  <option value='people-3'>3</option>
                  <option value='people-4'>4</option>
                  <option value='people-5'>5</option>
                </select>
              </div>
            </div>

            <div className='space-y-2'>
              <div className='flex justify-between gap-4'>
                <span className='uppercase text-sm font-semibold w-full'>
                  Beds
                </span>
                <span className='uppercase text-sm font-semibold w-full'>
                  Bathrooms
                </span>
              </div>
              <div className='flex justify-between gap-4'>
                <input
                  type='text'
                  className='w-full h-12 px-3 border rounded-md focus:outline-none'
                  placeholder='2 beds'
                />
                <input
                  type='text'
                  className='w-full h-12 px-3 border rounded-md focus:outline-none'
                  placeholder='
                    2 bathrooms'
                />
              </div>
            </div>

            <div className='space-y-2'>
              <div className='flex justify-between gap-4'>
                <span className='uppercase text-sm font-semibold w-full'>
                  Bathrooms
                </span>
                <span className='uppercase text-sm font-semibold w-full'>
                  Legal Items
                </span>
              </div>
              <div className='flex justify-between gap-4'>
                <input
                  type='text'
                  className='w-full h-12 px-3 border rounded-md focus:outline-none'
                  placeholder='100 ETH'
                />
                <input
                  type='text'
                  className='w-full h-12 px-3 border rounded-md focus:outline-none'
                  placeholder='
                    IDK'
                />
              </div>
            </div>
            <div className='space-y-2'>
              <div className='flex justify-between gap-4'>
                <span className='uppercase text-sm font-semibold w-full'>
                  Price
                </span>
                <span className='uppercase text-sm font-semibold w-full'>
                  Photos
                </span>
              </div>
              <div className='flex justify-between gap-4'>
                <input
                  type='text'
                  className='w-full h-12 px-3 border rounded-md focus:outline-none'
                  placeholder='100 ETH'
                />
                <input
                  type='text'
                  className='w-full h-12 px-3 border rounded-md focus:outline-none'
                  placeholder='
                    url'
                />
              </div>
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
  );
}
