"use client";
import { useGlobalContext } from "@/lib/GlobalContext";
import { X } from "lucide-react";
import Image from "next/image";
const DeleteProject = () => {
  const { state, setGlobalState } = useGlobalContext();
  const handleClose = () => {
    setGlobalState("deleteModal", "scale-0");
  };

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black
         bg-opacity-50 transform transition-transform duration-300 ${state.deleteModal}`}
      >
        <div className="bg-white shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
          <form className="flex flex-col">
            <div className="flex justify-between items-center">
              <p className="font-semibold">Delete Project</p>
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

            <div className="flex justify-center items-center mt-5">
              <p className="text-center font-semibold">
                Are you sure you want to delete this project?
              </p>
            </div>

            <div className="flex justify-center items-center space-x-3">
              <button
                type="button"
                className="inline-block mt-5 px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:bg-red-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-800 active:shadow-lg"
                onClick={handleClose}
              >
                Close
              </button>
              <button
                type="button"
                className="inline-block mt-5 px-6 py-2.5 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg"
              >
                Delete
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DeleteProject;
