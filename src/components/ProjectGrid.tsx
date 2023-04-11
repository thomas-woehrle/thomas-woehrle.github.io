import { Grid, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import ProjectCard from "./ProjectCard";
import f1Logo from "../assets/F1_logo.svg.png";

const ProjectGrid = () => {
  const projects = [
    {
      imageSrc: f1Logo,
      title: "Formula 1 Alternative Standings Calculator",
      text: "Choose drivers or races to be excluded from the championship and recalculate the standings for the year. Possible for all 70 seasons of F1.",
      link: "",
      objectFitContain: true,
    },
    {
      imageSrc: "",
      title: "Formula 1 Alternative Standings Calculator",
      text: "Choose drivers or races to be excluded from the championship and recalculate the standings for the year. Possible for all 70 seasons of F1.",
      link: "",
    },
    {
      imageSrc: "",
      title: "Formula 1 Alternative Standings Calculator",
      text: "Choose drivers or races to be excluded from the championship and recalculate the standings for the year. Possible for all 70 seasons of F1.",
      link: "",
    },
    {
      imageSrc: "",
      title: "Formula 1 Alternative Standings Calculator",
      text: "Choose drivers or races to be excluded from the championship and recalculate the standings for the year. Possible for all 70 seasons of F1.",
      link: "",
    },
    {
      imageSrc:
        "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60",
      title: "Formula 1 Alternative Standings Calculator",
      text: "Choose drivers or races to be excluded from the championship and recalculate the standings for the year. Possible for all 70 seasons of F1.",
      link: "",
    },
    {
      imageSrc: "",
      title: "Formula 1 Alternative Standings Calculator",
      text: "Choose drivers or races to be excluded from the championship and recalculate the standings for the year. Possible for all 70 seasons of F1.",
      link: "",
    },
  ];

  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={"8"}>
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          imageSrc={project.imageSrc}
          title={project.title}
          link={project.link}
        >
          {project.text}
        </ProjectCard>
      ))}
    </SimpleGrid>
  );
};

export default ProjectGrid;
