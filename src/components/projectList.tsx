import ProjectCard from "./projectCard";
import { projects } from "@/utils/projects";

const ProjectList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;
