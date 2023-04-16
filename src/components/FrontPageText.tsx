import { Divider, Heading, Highlight, VStack } from "@chakra-ui/react";

const FrontPageText = () => {
  return (
    <VStack maxWidth={"4xl"} spacing={"16"}>
      <Heading
        fontFamily={"mono"}
        textAlign={"center"}
        fontSize={{ base: "2xl", ms: "5xl" }}
        lineHeight={"xl"}
      >
        <Highlight
          query={["Thomas", "Information Systems"]}
          styles={{ bg: "teal.200" }}
        >
          Hi, my name is Thomas. I study Information Systems at the Technical
          University of Munich.
        </Highlight>
      </Heading>
      <Divider color={"teal.900"} border={"4px"} />
      <Heading
        fontFamily={"mono"}
        textAlign={"center"}
        fontSize={{ base: "lg", ms: "3xl" }}
        lineHeight={"lg"}
      >
        <Highlight
          query={["Projects", "Info", "top right"]}
          styles={{ bg: "purple.200" }}
        >
          You can take a look at my Projects and get more Info about myself and
          this website via the tabs on the top right.
        </Highlight>
      </Heading>
    </VStack>
  );
};

export default FrontPageText;
