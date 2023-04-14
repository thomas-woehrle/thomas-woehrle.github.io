import { Heading } from "@chakra-ui/react";
import React from "react";

const Name = () => {
  return (
    <Heading
      fontFamily={"logoFont"}
      fontSize={{ base: "3xl", md: "6xl" }}
      borderRadius={"lg"}
      padding={1}
    >
      Thomas Wöhrle
    </Heading>
  );
};

export default Name;
