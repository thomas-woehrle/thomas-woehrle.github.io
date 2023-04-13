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
  Link,
} from "@chakra-ui/react";
import React, { useState } from "react";
import MultiPictureCard from "../components/MultiPictureCard";
import useProject from "../hooks/useProject";
import { useNavigate, useParams } from "react-router-dom";
import { Project } from "../hooks/useProjects";
import { ExternalLinkIcon } from "@chakra-ui/icons";

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
      bgColor={"gray.50"}
    >
      <VStack width={"100%"}>
        <CardBody>
          <Heading mb={4}>{project?.title}</Heading>
          <Text>{project?.longText}</Text>
        </CardBody>
        <CardFooter>
          {project?.githubRepo ? (
            <Link href={project?.githubRepo} isExternal>
              <Button colorScheme="purple" disabled>
                View GitHub Repo <ExternalLinkIcon mx={2} />
              </Button>
            </Link>
          ) : (
            <Button colorScheme="gray" disabled>
              No Github Repo available
            </Button>
          )}
        </CardFooter>
      </VStack>
      <MultiPictureCard />
    </Card>
  );
};

export default ProjectDetails;
