import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="flex flex-col px-6">
      <div className="flex justify-center items-center flex-wrap">
        {Array(8)
          .fill()
          .map((card, i) => (
            <div key={i} className="w-full md:w-1/2 lg:w-1/4 p-4">
              <ProjectCard key={i} id={i + 1} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Projects;
