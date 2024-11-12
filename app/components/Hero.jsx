"use client";

import { useGlobalContext } from "@/lib/GlobalContext";
import CreateProject from "./CreatePorject";

const Hero = () => {
  const { setGlobalState } = useGlobalContext();

  const addProjectBtn = () => {
    setGlobalState("createModal", "scale-100");
  };

  return (
    <div className="py-24 px-6 text-center bg-white text-gray-800">
      <h1 className="text-5xl font-bold leading-tight mb-12">
        <span className="capitalize">Bring Creative Project to life on</span>
        <br />
        <span className="text-green-600 uppercase">CrowdFunding</span>
      </h1>
      <div className="flex justify-center space-x-2">
        <button
          type="button"
          className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg"
          onClick={addProjectBtn}
        >
          Add Project
        </button>
        <button
          type="button"
          className="inline-block px-6 py-2.5 border border-green-600 bg-transparent text-green-600 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-600 hover:text-white hover:shadow-lg focus:bg-green-600 focus:text-white focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg"
        >
          Back Project
        </button>
        <CreateProject />
      </div>

      <div className="flex justify-center items-center mt-12">
        <div className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full">
          <span className="text-lg font-bold text-green-900 leading-5">
            (0)
          </span>
          <span className="">Project</span>
        </div>
        <div className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full">
          <span className="text-lg font-bold text-green-900 leading-5">
            (0)
          </span>
          <span className="">Backings</span>
        </div>
        <div className="flex flex-col justify-center items-center h-20 border border-gray-200 shadow-md w-full">
          <span className="text-lg font-bold text-green-900 leading-5">
            (0) ETH
          </span>
          <span className="">Donated</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
