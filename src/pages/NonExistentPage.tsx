import { Center, Heading, Icon, Link, VStack } from "@chakra-ui/react";
import React from "react";
import { BsFillCloudSlashFill } from "react-icons/bs";

const NonExistentPage = () => {
  return (
    <Center>
      <VStack>
        <Icon as={BsFillCloudSlashFill} boxSize={"3xs"} color={"teal.700"} />
        <Heading padding={8}>
          The site your are looking for does not exist...
        </Heading>
        <Link href="/home">
          <Heading textDecoration={"underline"}>Back to Homepage</Heading>
        </Link>
      </VStack>
    </Center>
  );
};

export default NonExistentPage;
