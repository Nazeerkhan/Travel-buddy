import React from "react";
import { Link } from "react-router-dom";
import User_Dash from "./User_Dash";

function User_home() {
  return (
    <div>
      <User_Dash />

      <main className="relative isolate ml-80">
        <div className=" mt-36 text-center antialiased">
          <h1 className="font-bold text-5xl text-purple-600">Welcome</h1>
          <p className="text-2xl mt-2">John Snow</p>

          <p className=" pl-32 pr-32 mt-3 font-normal text-gray-500">
            To TravelBuddy! Our platform offers a wide range of options for tour
            bookings, allowing you to tailor your trip to your specific needs
            and preferences. With our user-friendly interface, you can easily
            compare prices, select your itinerary, and book your tour with
            confidence. Whether you're planning a solo getaway, or a family
            vacation, we've got you covered. So why wait? Start exploring today
            and make your travel dreams a reality!
          </p>

          <p className=" mt-4">
            <Link
              to="/searchtour_dash"
              className="text-sm font-semibold leading-6 text-gray-900 pl-5 hover:text-purple-700"
            >
              Let's start booking <span aria-hidden="true">→</span>
            </Link>
          </p>
        </div>
      </main>
    </div>
  );
}

export default User_home;
