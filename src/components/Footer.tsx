import {
  Center,
  HStack,
  StackItem,
  VStack,
  Text,
  Heading,
} from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Center padding={"8"}>
      <VStack>
        <HStack>
          <Text>github</Text>
          <Text>email</Text>
        </HStack>
        <Text>Created by Thomas Wöhrle - 2023</Text>
      </VStack>
    </Center>
  );
};

export default Footer;
