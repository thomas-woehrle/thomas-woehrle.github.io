import {
  Card,
  Stack,
  CardBody,
  Heading,
  CardFooter,
  Button,
  Text,
  Image,
  Box,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import image_placeholder from "../assets/image_placeholder.webp";
import { Project } from "../hooks/useProjects";

interface Props {
  project: Project;
}

// "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"

const ProjectCard = ({ project }: Props) => {
  const navigate = useNavigate();
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      bgColor={"gray.50"}
      padding={4}
      borderRadius={"lg"}
    >
      <Image
        width={{ base: "auto", sm: "3xs", md: "2xs" }}
        height={{ base: "auto", sm: "3xs", md: "2xs" }}
        objectFit={project.objectFitIsContain ? "contain" : "cover"}
        src={!project.previewImage ? image_placeholder : project.previewImage}
        alt={`${project.title} picture`}
        borderRadius={"lg"}
      />

      <Stack justifyContent={"space-between"}>
        <CardBody paddingY="2">
          <Heading size="md" marginBottom={"2"}>
            {project.title}
          </Heading>

          <Text>{project.description}</Text>
        </CardBody>

        <CardFooter paddingY="2">
          <Button
            colorScheme="purple"
            variant={"outline"}
            onClick={() => navigate(project.slug)}
            //whiteSpace={"normal"}
          >
            Show Project & Code
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
};

export default ProjectCard;
