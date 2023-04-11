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
import React, { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import image_placeholder from "../assets/image_placeholder.webp";

interface Props {
  imageSrc: string;
  title: string;
  children: ReactNode;
  link: string;
  objectFitContain?: boolean;
}

// "https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"

const ProjectCard = ({
  imageSrc,
  title,
  children,
  link,
  objectFitContain,
}: Props) => {
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
        width="2xs"
        height="2xs"
        objectFit={objectFitContain ? "contain" : "cover"}
        src={imageSrc === "" ? image_placeholder : imageSrc}
        alt={`${title} picture`}
        borderRadius={"lg"}
      />

      <Stack justifyContent={"space-between"}>
        <CardBody paddingY="2">
          <Heading size="md" marginBottom={"2"}>
            {title}
          </Heading>

          <Text>{children}</Text>
        </CardBody>

        <CardFooter paddingY="2">
          <Button
            colorScheme="purple"
            variant={"outline"}
            onClick={() => navigate(link)}
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
