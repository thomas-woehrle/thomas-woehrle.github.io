import { Box, SimpleGrid } from "@chakra-ui/react";
import React from "react";
import MultiPictureCard from "../components/MultiPictureCard";

const Project = () => {
  return (
    <SimpleGrid columns={{ base: 1, lg: 2 }}>
      <Box>
        <MultiPictureCard />
      </Box>
    </SimpleGrid>
  );
};

export default Project;
