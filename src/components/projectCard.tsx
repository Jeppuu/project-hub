import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "@/components/ui/card";
//import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import React from "react";

type Project = {
  id: string;
  title: string;
  description: string;
  href: string;
  imageSrc: string;
};

const gradients = [
  "bg-gradient-to-r from-lavender to-blue",
  "bg-gradient-to-r from-peach to-pink",
  "bg-gradient-to-r from-mauve to-rosewater",
  "bg-gradient-to-r from-sapphire to-blue",
  "bg-gradient-to-r from-green to-yellow",
];

const getRandomGradient = () => {
  return gradients[Math.floor(Math.random() * gradients.length)];
};

const ProjectCard = ({ project }: { project: Project }) => {
  const gradientClass = React.useMemo(() => getRandomGradient(), []);
  return (
    <a href={project.href} className="block">
      <Card className="h-full flex flex-col hover:scale-95 transition relative overflow-hidden">
        <CardHeader
          className={`rounded-t-lg border-b-2 border-crust flex flex-row items-between gap-6 ${gradientClass} shadow-md`}
        >
          {/* <Avatar className="drop-shadow-solid-crust ring-2 ring-lavender scale-110">
            <AvatarImage src={project.imageSrc} alt={project.title} />
            <AvatarFallback className="bg-base text-blue font-bold">
              X
            </AvatarFallback>
          </Avatar> */}
          <CardTitle>{project.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>{project.description}</CardDescription>
        </CardContent>
        <CardFooter className="border-t-2 border-crust/40">
          {/* Add tags here */}
        </CardFooter>
      </Card>
    </a>
  );
};

export default ProjectCard;
