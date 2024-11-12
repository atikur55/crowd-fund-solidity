import { HandCoins } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ id }) => {
  return (
    <div id="projects" className="rounded-lg shadow-lg bg-white">
      <Link href={`/project/${id}`}>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4vDYktSVqz8aehslkccwgZpezseopkOoLxw&s"
          height={500}
          width={256}
          alt="project"
          className="rounded-xl h-64 w-full object-cover"
        />
        <div className="p-4">
          <h5>Bring a smile to the world</h5>
          <div className="flex flex-col">
            <div className="flex justify-between items-center space-x-2 mb-3">
              <HandCoins
                className="rounded-full shadow-md"
                string="0x15....1ea2"
              />
              <small className="text-gray-700">0x15....1ea2</small>
            </div>
            <small className="text-gray-500">2 days left</small>
          </div>

          <div className="w-full bg-gray-300">
            <div
              className="bg-green-600 text-xs font-medium text-green-100 text-center p-0.5 leading-none rounded-l-full h-1.5"
              style={{ width: "50%" }}
            ></div>
          </div>

          <div className="flex justify-between items-center flex-wrap mt-4 mb-2">
            <small className="text-gray-500 font-bold">{14} Backers</small>
            <div>
              <small className="text-green-600 font-bold">Open</small>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProjectCard;
