import React, { useContext } from "react";
import { Appcontext } from "../../context/AppContext";
import "../../assets/assets";
import { assets, JobCategories, JobLocations } from "../../assets/assets";

const JobListing = () => {
  const { searched, searchFilter, setSearchFilter } = useContext(Appcontext);

  return (
    <div className="container pl-[5vw]  pt-[2vw]  flex flex-row justify-between">
    <div className="">
    <div className="bg-yellow-200 w-[33vw]">
        {searched &&
          (searchFilter.title !== "" || searchFilter.location !== "") && (
            <p className=" text-center py-[2px] font-bold">Current Search</p>
          )}
        <div className="flex justify-between px-[2vw] gap-2">
          {searched && searchFilter.title !== "" && (
            <span className="flex gap-[6px] border-black border-2  rounded-[3px] px-[3vw] bg-blue-100">
              {searchFilter.title}
              <img
                src={assets.cross_icon}
                onClick={() =>
                  setSearchFilter((prev) => ({ ...prev, title: "" }))
                }
                alt=""
              />
            </span>
          )}
          {searched && searchFilter.location !== "" && (
            <span className="flex gap-[6px] border-black border-2 rounded-[3px] px-[3vw] bg-red-100">
              {searchFilter.location}
              <img
                src={assets.cross_icon}
                onClick={() =>
                  setSearchFilter((prev) => ({ ...prev, location: "" }))
                }
                alt=""
              />
            </span>
          )}
        </div>
      </div>
      <div className="">
        <div className="py-[1vh]">
          <p className="font-semibold">Search by location</p>
          <ul>
            {JobCategories.map((category, index) => (
              <li className="flex gap-3" key={index}>
                <input className="scale-125" type="checkbox" name="" id="" />
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div className="py-[2vh]">
          <p className="font-semibold">Search by category</p>
          <ul>
            {JobLocations.map((location, index) => (
              <li className="flex gap-3" key={index}>
                <input className="scale-125" type="checkbox" name="" id="" />
                {location}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
      <div className="w-[66vw] bg-red-300 p-[1vw]">
        <h1 className="font-bold text-lg">latest jobs</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            
      </div>
    </div>
  );
};

export default JobListing;
