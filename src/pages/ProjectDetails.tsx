import {
  Card,
  Heading,
  VStack,
  Text,
  CardBody,
  CardFooter,
  Button,
  Link,
  List,
  ListItem,
} from "@chakra-ui/react";
import MultiPictureCard from "../components/MultiPictureCard";
import useProject from "../hooks/useProject";
import { useParams } from "react-router-dom";
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
      fontSize={"2xl"}
    >
      <VStack width={"100%"}>
        <CardBody>
          <Heading mb={4}>{project?.title}</Heading>
          <Text fontSize={"2xl"} mb={8}>
            {project?.description}
          </Text>
          <Heading fontSize={"2xl"}>Key Functionalities:</Heading>
          <List fontSize={"2xl"}>
            {project?.functionalities?.map((functionality) => (
              <ListItem key={functionality}>{`- ${functionality}`}</ListItem>
            ))}
          </List>
          <Text fontSize={"xl"} color={"gray"} marginTop={12}>
            {project?.specialInfo}
          </Text>
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
