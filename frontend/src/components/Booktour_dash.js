import React from "react";
import User_Dash from "./User_Dash";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

function Booktour_dash() {
  const [value, setValue] = useState(5);

  function handleChangeRange(event) {
    setValue(event.target.value);
  }

  return (
    <>
      <User_Dash />

      <div className="w-4/5 ml-64 relative isolate">
        <div className="flex justify-center mt-16">
          <h1 className="font-bold text-2xl text-center mb-4  leading-none tracking-tight text-gray-900">BOOK A TOUR</h1>
        </div>

        <div className=" ml-80 mr-80">
          <form className="mt-8 space-y-6" method="POST" onSubmit="">
            <div className="space-y-6 rounded-md shadow-sm ">
              <div className="flex space-x-3">
                <div>
                  <label
                    or="booking_id"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Booking ID
                  </label>
                  <input
                    id="bookingid"
                    name="bookingid"
                    type="text"
                    required
                    className="relative block w-full p-4 mr-32 rounded border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-100 sm:text-sm sm:leading-6"
                    placeholder="BID123455"
                  />
                </div>
                <div>
                  <label
                    For="tour_id"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Tour ID
                  </label>
                  <input
                    id="tourid"
                    name="tourid"
                    type="text"
                    autoComplete=""
                    required
                    className="relative block w-full p-4 mr-28 rounded border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                    placeholder="TID123455"
                  />
                </div>
              </div>
              <div className="flex space-x-3">
                <div>
                  <label
                    or="user_id"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    User ID
                  </label>
                  <input
                    id="userid"
                    name="userid"
                    type="text"
                    required
                    className="relative block w-full p-4 mr-32 rounded border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-100 sm:text-sm sm:leading-6"
                    placeholder="UID123455"
                  />
                </div>
                <div>
                  <label
                    For="Tour_place"
                    class="block mb-2 text-sm font-medium text-gray-900 "
                  >
                    Tour Place
                  </label>
                  <input
                    id="tourplace"
                    name="tourplace"
                    type="text"
                    autoComplete=""
                    required
                    className="relative block w-full p-4 mr-28 rounded border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-600 sm:text-sm sm:leading-6"
                    placeholder="Maldives"
                  />
                </div>
              </div>

              <div>
                <label
                  For="booking_date"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Booking Date
                </label>
                <input
                  type="date"
                  id="bookingdate"
                  name="bookingdate"
                  autoComplete="date"
                  required
                  className="relative block w-full p-4 rounded mr-28 border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-100 sm:text-sm sm:leading-6 "
                />
              </div>

              <div>
                <label
                  For="no_of_people"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  No of people{" "}
                </label>
                <input
                  id="noofpeople"
                  type="range"
                  min="0"
                  max="10"
                  value={value}
                  onChange={handleChangeRange}
                  class="w-full h-2 bg-purple-200 rounded-lg appearance-none cursor-pointer"
                />
                <span className=" ml-1 text-gray-700">{value}</span>
              </div>
              <div>
                <label
                  For="tour_price"
                  class="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Price
                </label>
                <div className="mt-2 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 px-3 text-gray-500 sm:text-sm">
                    ₹
                  </span>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="relative block w-full p-1  rounded  border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-purple-100 sm:text-sm sm:leading-6 "
                    placeholder="12345"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-center">
              <button
                type="button"
                className="inline-block rounded border border-purple-600 px-5 py-2 text-sm font-medium text-purple-600 hover:bg-purple-600 hover:text-white focus:outline-none focus:ring active:bg-purple-500"
              >
                Book tour
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Booktour_dash;
