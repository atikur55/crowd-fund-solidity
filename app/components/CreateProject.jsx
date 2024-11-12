"use client";
import { useGlobalContext } from "@/lib/GlobalContext";
import { X } from "lucide-react";
import Image from "next/image";

const CreateProject = () => {
  const { state, setGlobalState } = useGlobalContext();

  const handleClose = () => {
    setGlobalState("createModal", "scale-0");
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black
         bg-opacity-50 transform transition-transform duration-300 ${state.createModal}`}
      >
        <div className="bg-white shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
          <form className="flex flex-col">
            <div className="flex justify-between items-center">
              <p className="font-semibold">Add Project</p>
              <button
                type="button"
                className="border-0 bg-transparent focus:outline-none"
                onClick={handleClose}
              >
                <X />
              </button>
            </div>

            <div className="flex justify-center items-center mt-5">
              <div className="rounded-xl overflow-hidden">
                <Image
                  src="https://asset.inc42.com/2023/06/Glossary-Series-Brand-_-Crowd-Funding-ftr.png"
                  alt="image"
                  height={80}
                  width={80}
                />
              </div>
            </div>

            <div className="flex justify-between items-center bg-gray-300 rounded-xl mt-5">
              <input
                className="block w-full bg-transparent border-0 text-sm text-slate-500 focus:outline-none focus:ring-0 px-2 py-2"
                type="text"
                name="title"
                placeholder="Title"
                required
              />
            </div>
            <div className="flex justify-between items-center bg-gray-300 rounded-xl mt-5">
              <input
                className="block w-full bg-transparent border-0 text-sm text-slate-500 focus:outline-none focus:ring-0 px-2 py-2"
                type="number"
                step={0.01}
                min={0.01}
                name="amount"
                placeholder="Amount (ETH)"
                required
              />
            </div>
            <div className="flex justify-between items-center bg-gray-300 rounded-xl mt-5">
              <input
                className="block w-full bg-transparent border-0 text-sm text-slate-500 focus:outline-none focus:ring-0 px-2 py-2"
                type="date"
                name="date"
                placeholder="Expires Date"
                required
              />
            </div>
            <div className="flex justify-between items-center bg-gray-300 rounded-xl mt-5">
              <input
                className="block w-full bg-transparent border-0 text-sm text-slate-500 focus:outline-none focus:ring-0 px-2 py-2"
                type="url"
                name="image"
                placeholder="Image URL"
                required
              />
            </div>
            <div className="flex justify-between items-center bg-gray-300 rounded-xl mt-5">
              <textarea
                className="block w-full bg-transparent border-0 text-sm text-slate-500 focus:outline-none focus:ring-0 px-2 py-2"
                type="text"
                name="description"
                placeholder="Description"
                required
              />
            </div>
            <button
              type="button"
              className="inline-block mt-5 px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateProject;
