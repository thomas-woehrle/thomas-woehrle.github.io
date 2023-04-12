import {
  Box,
  Card,
  Heading,
  SimpleGrid,
  Stack,
  VStack,
  Text,
  CardBody,
  CardFooter,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import MultiPictureCard from "../components/MultiPictureCard";
import useProject from "../hooks/useProject";
import { useParams } from "react-router-dom";
import { Project } from "../hooks/useProjects";

const ProjectDetails = () => {
  const { projectSlug } = useParams();
  let project: Project | null = null;

  if (projectSlug) {
    project = useProject(projectSlug);
  }

  return (
    <Card
      direction={{ base: "column", lg: "row" }}
      borderRadius={"lg"}
      padding={8}
    >
      <VStack>
        <CardBody>
          <Heading>{project?.title}</Heading>
          <Text>{project?.longText}</Text>
        </CardBody>
        <CardFooter>
          <Button>View GitHub Repo</Button>
        </CardFooter>
      </VStack>
      <Box minWidth={"lg"} height={"lg"} bgColor={"teal.100"}>
        <MultiPictureCard />
      </Box>
    </Card>
  );
};

export default ProjectDetails;
