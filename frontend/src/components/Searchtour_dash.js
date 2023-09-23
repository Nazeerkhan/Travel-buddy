import React from "react";
import User_Dash from "./User_Dash";

function user_search() {
  return (
    <div>
      <User_Dash />
      <main className="w-4/5 ml-72 relative isolate">
      <div className="p-11 mt-8">
        <div className="flex justify-center">
          <h1 className="font-normal  text-3xl text-center">
            Search Tours
          </h1>
        </div>
        <form>
          <div class="relative mt-5">
            {/*Search Logo*/}
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ml-4">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-purple-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-16 text-sm text-gray-900 border border-purple-200 rounded-full bg-white focus:ring-purple-500 focus:border-purple-500"
              placeholder="Search your favorite location"
              required
            />

            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-purple-600 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-200 font-medium rounded-full text-sm px-4 py-2"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      </main>
    </div>
  );
}

export default user_search;
