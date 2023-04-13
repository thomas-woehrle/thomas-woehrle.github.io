import { Box, Text } from "@chakra-ui/react";

const HighlightedText = () => {
  return (
    <Box position="relative" display="inline-block">
      <Text as="span">This is some text</Text>
      <Box
        position="absolute"
        top={0}
        left={0}
        h="100%"
        w="50%"
        bg="yellow.200"
        zIndex={-1}
      />
    </Box>
  );
};

export default HighlightedText;
