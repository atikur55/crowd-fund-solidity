import { Currency, EarthLock } from "lucide-react";

const ProjectBacker = () => {
  return (
    <div className="py-24 px-6 flex flex-col justify-center items-center">
      <div className="max-h-[calc(100vh_-_20rem)] overflow-y-auto shadow-md rounded-md w-full">
        <table className="min-w-full">
          <thead className="border-b">
            <tr>
              <th
                scope="col"
                className="text-sm font-medium px-6 py-4 text-left"
              >
                Backer
              </th>
              <th
                scope="col"
                className="text-sm font-medium px-6 py-4 text-left"
              >
                Donations
              </th>
              <th
                scope="col"
                className="text-sm font-medium px-6 py-4 text-left"
              >
                Refunded
              </th>
              <th
                scope="col"
                className="text-sm font-medium px-6 py-4 text-left"
              >
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                <div className="flex items-center space-x-1">
                  <EarthLock size={16} />
                  <small className="text-gray-700 font-bold">
                    0x9e.....13af
                  </small>
                </div>
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                <small className="flex justify-start items-center space-x-1">
                  <Currency size={16} />
                  <span className="text-gray-700 font-bold">{3} ETH</span>
                </small>
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                Data
              </td>
              <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                Data
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectBacker;
