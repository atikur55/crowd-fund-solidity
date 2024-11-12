import { Currency, EarthLock } from "lucide-react";

const ProjectBacker = () => {
  return (
    <div className="py-5 last:px-6 flex flex-col justify-center items-start md:w-2/3 mx-auto">
      <div className="max-h-[calc(100vh_-_20rem)] overflow-y-auto shadow-md rounded-md w-full">
        <table className="min-w-full mb-5">
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
            {Array(5)
              .fill()
              .map((backing, i) => (
                <tr key={i} className="border-b border-gray-200">
                  <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center space-x-1">
                      <EarthLock size={16} />
                      <small className="text-gray-700 font-bold">
                        0x9e.....13a{i}
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
                    {false ? "Yes" : "No"}
                  </td>
                  <td className="text-sm font-light px-6 py-4 whitespace-nowrap">
                    {new Date().getTime()}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProjectBacker;
