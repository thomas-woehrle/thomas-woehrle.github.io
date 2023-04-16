import { Box, Divider } from "@chakra-ui/react";
import AboutMe from "../components/AboutMe";
import AboutWebsite from "../components/AboutWebsite";

const InfoPage = () => {
  return (
    <Box bgColor={"gray.50"} borderRadius={"lg"} padding={8}>
      <AboutMe />
      <Divider
        color={"purple.900"}
        border={"4px"}
        marginY={24}
        borderRadius={"lg"}
      />
      <AboutWebsite />
    </Box>
  );
};

export default InfoPage;
