import { Grid, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "./ProjectCard";
import f1Logo from "../assets/F1_logo.svg.png";
import useProjects from "../hooks/useProjects";
import FutureProjectsCard from "./FutureProjectsCard";

const ProjectGrid = () => {
  const projectSlugs = ["alternativeF1", "website"];

  const projects = useProjects(projectSlugs);

  return (
    <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={"8"}>
      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
      <FutureProjectsCard />
    </SimpleGrid>
  );
};

export default ProjectGrid;
