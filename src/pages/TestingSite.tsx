import { Box } from "@chakra-ui/react";

const GradientText = () => {
  return (
    <Box
      as="span"
      bgGradient="linear(to-r, #F56565, #FADB5F, #68D391)"
      bgClip="text"
      //textFillColor="transparent"
      display="inline"
    >
      Hallo
    </Box>
  );
};

export default GradientText;
