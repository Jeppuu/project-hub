import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

type Project = {
  id: string;
  title: string;
  description: string;
  href: string;
  imageSrc: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <a href={project.href}>
      <Card className="h-full shadow-md hover:scale-95 transition">
        <CardHeader className="">
          <Avatar>
            <AvatarImage src={project.imageSrc} alt={project.title} />
            <AvatarFallback>LR</AvatarFallback>
          </Avatar>
          <CardTitle className="text-lg">{project.title}</CardTitle>
          <CardDescription>{project.description}</CardDescription>
          <CardAction>
            <Button variant="link">See in Github</Button>
          </CardAction>
        </CardHeader>
      </Card>
    </a>
  );
};

export default ProjectCard;
