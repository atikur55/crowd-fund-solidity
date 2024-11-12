import { X } from "lucide-react";

const CreateProject = () => {
  return (
    <>
      <div
        className={`fixed top-0 left-0 w-screen h-screen flex items-center justify-center bg-black
         bg-opacity-50 transform transition-transform duration-300 scale-100`}
      >
        <div className="bg-white shadow-xl shadow-black rounded-xl w-11/12 md:w-2/5 h-7/12 p-6">
          <form className="flex flex-col">
            <div className="flex justify-between items-center">
              <p className="font-semibold">#Projcet Title</p>
              <button
                type="button"
                className="border-0 bg-transparent focus:outline-none"
              >
                <X />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CreateProject;
