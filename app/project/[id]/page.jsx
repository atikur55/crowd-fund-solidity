"use client";
import { useGlobalContext } from "@/lib/GlobalContext";
import ProjectBacker from "@/app/components/ProjectBacker";
import { Currency, EarthLock } from "lucide-react";
import Image from "next/image";

const ProjectDetail = () => {
  const { state, setGlobalState } = useGlobalContext();

  const editModalBtn = () => {
    setGlobalState("updateModal", "scale-100");
  };

  const backModalBtn = () => {
    setGlobalState("backModal", "scale-100");
  };
  const deleteModalBtn = () => {
    setGlobalState("deleteModal", "scale-100");
  };

  return (
    <>
      <div className="py-24 px-6 flex justify-center">
        <div className="flex justify-center flex-col md:w-2/3">
          <div className="flex justify-start items-start sm:space-x-4 flex-wrap">
            <Image
              src="https://asset.inc42.com/2023/06/Glossary-Series-Brand-_-Crowd-Funding-ftr.png"
              height={435}
              width={410}
              alt="image"
              className="rounded-xl object-cover"
            />

            <div className="flex-1 sm:py-0 py-4 ">
              <div className="flex flex-col justify-start flex-wrap">
                <h5 className="text-gray-900 text-sm font-medium mb-2">
                  Bring a smile to the world
                </h5>
                <small className="text-gray-500 ">3 days left</small>
              </div>

              <div className="flex justify-between items-center w-full pt-2">
                <div className="flex justify-start items-center space-x-2">
                  <EarthLock size={16} />
                  <small className="text-gray-700">0x9e.....13af</small>
                  <small className="text-gray-500 font-bold">
                    {16} Backings
                  </small>
                </div>

                <div className="font-bold">
                  <small className="text-green-500">Open</small>
                </div>
              </div>
            </div>
          </div>
          <p className="text-md font-light my-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
            reiciendis voluptates tenetur, laboriosam ratione consectetur
            repudiandae eos molestiae similique debitis dolore qui suscipit,
            itaque rem eum quisquam in sed dolorum?
          </p>
          <div className="w-full bg-gray-300">
            <div
              className="bg-green-600 text-xs font-medium text-green-100 text-center p-0.5 leading-none rounded-l-full h-1.5"
              style={{ width: "50%" }}
            ></div>
          </div>

          <div className="flex justify-between items-center font-bold mt-1">
            <small>{3} ETH Raised</small>
            <small className="flex justify-start items-center space-x-1">
              <Currency size={16} />
              <span>{10} ETH</span>
            </small>
          </div>

          <div className="flex justify-start mt-4 space-x-2">
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg"
              onClick={backModalBtn}
            >
              Back Project
            </button>
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-gray-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-700 hover:shadow-lg focus:bg-gray-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-800 active:shadow-lg"
              onClick={editModalBtn}
            >
              Edit
            </button>
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg"
              onClick={deleteModalBtn}
            >
              Delete
            </button>
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-orange-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-700 hover:shadow-lg focus:bg-orange-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-orange-800 active:shadow-lg"
            >
              Payout
            </button>
          </div>
        </div>
      </div>

      <ProjectBacker />
    </>
  );
};

export default ProjectDetail;
