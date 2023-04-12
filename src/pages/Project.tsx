import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import MultiPictureCard from "../components/MultiPictureCard";
import useProject from "../hooks/useProject";
import { useParams } from "react-router-dom";

const Project = () => {
  const { projectSlug } = useParams();

  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }}>
      <Box>
        <MultiPictureCard />
      </Box>
      {projectSlug}
    </SimpleGrid>
  );
};

export default Project;
