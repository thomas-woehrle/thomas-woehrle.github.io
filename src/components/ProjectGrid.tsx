import { Grid, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "./ProjectCard";
import f1Logo from "../assets/F1_logo.svg.png";
import useProjects from "../hooks/useProjects";

const ProjectGrid = () => {
  console.log("projectGrid rendered");
  const projectSlugs = ["alternativeF1", "website"];

  const projects = useProjects(projectSlugs);

  return (
    <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={"8"}>
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          imageSrc={project.previewImage}
          title={project.title}
          link={project.pageLink || `${project.slug}`}
          objectFitContain={false}
        >
          {project.shortText}
        </ProjectCard>
      ))}
    </SimpleGrid>
  );
};

export default ProjectGrid;
