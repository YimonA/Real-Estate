import React from "react";
import { BsCheckCircle } from "react-icons/bs";

const PricingComponent = () => {
  const lists = [
    "Full Access",
    "Source Files",
    " Free Appointments",
    " Enhanced Security",
  ];

  return (
    <div className=" py-6 px-12 dark:bg-slate-900">
      <h5 className=" dark:text-white">Pricing Features:</h5>
      <ul className="list-none">
        {lists.map((list, index) => {
          return (
            <li className="text-slate-400 my-5 flex">
              <span className="text-green-600 text-lg me-2 mt-1 font-bold">
                <i className="">
                  <BsCheckCircle />
                </i>
              </span>
              {list}
            </li>
          );
        })}
      </ul>
      <button className="btn bg-green-600 hover:bg-green-700 border-green-600  text-white rounded-md w-full px-4 py-2 mt-4">
        Get Started
      </button>
    </div>
  );
};

export default PricingComponent;
