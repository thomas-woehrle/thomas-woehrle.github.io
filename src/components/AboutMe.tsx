import { EmailIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import {
  BsGithub,
  BsMortarboardFill,
  BsFileEarmarkBarGraph,
} from "react-icons/bs";

const AboutMe = () => {
  const handleEmailClick = () => {
    window.location.href =
      "mailto:thomas.e.woehrle@gmail.com?subject=Regarding Your Website&body=Hey Tom, ";
  };

  return (
    <>
      <Center>
        <Heading fontSize={"4xl"} mb={4}>
          About Me:
        </Heading>
      </Center>
      <Text fontSize={"2xl"} mb={10}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, facilis
        vitae voluptates corrupti atque, architecto possimus praesentium
        excepturi id quam quod fugit itaque porro quidem minima consectetur?
        Libero repellat repellendus est ipsa beatae ratione fuga maiores
        doloribus iste temporibus, eaque, veritatis consequuntur minima nemo
        velit quasi quos soluta. Consequuntur, illo.
      </Text>
      <Stack
        direction={{ base: "column", sm: "row" }}
        justifyContent={"center"}
        spacing={24}
        //buttongroup not possible because of responsiveness
      >
        <Link
          href="https://drive.google.com/file/d/1A43yy7QrhM0_evzlF-wh41apjGUJMiKT/view"
          isExternal
        >
          <Button
            rightIcon={<Icon as={BsFileEarmarkBarGraph} boxSize={6} />}
            colorScheme="purple"
            variant={"outline"}
          >
            My Resume
          </Button>
        </Link>
        <Link
          href="https://drive.google.com/file/d/1alC4whh229L7vRW1IhNpAFW4ySfzVINE/view?usp=sharing"
          isExternal
        >
          <Button
            variant={"outline"}
            rightIcon={<Icon as={BsMortarboardFill} boxSize={6} />}
            colorScheme="purple"
          >
            My Transcript of records
          </Button>
        </Link>
        <Link href="https://github.com/thomas-woehrle" isExternal>
          <Button
            variant={"outline"}
            rightIcon={<Icon as={BsGithub} boxSize={6} />}
            colorScheme="purple"
          >
            My Github
          </Button>
        </Link>
        <Button
          onClick={handleEmailClick}
          rightIcon={<EmailIcon boxSize={6} />}
          colorScheme="purple"
        >
          Email me
        </Button>
      </Stack>
    </>
  );
};

export default AboutMe;
