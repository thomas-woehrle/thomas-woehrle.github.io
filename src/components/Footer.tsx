import { EmailIcon } from "@chakra-ui/icons";
import { Center, HStack, VStack, Text, Link, Icon } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";

// use of chakra-ui Link instead of react-router-dom. Should be made consistent

const Footer = () => {
  const handleEmailClick = () => {
    window.location.href =
      "mailto:thomas.e.woehrle@gmail.com?subject=Regarding Your Website&body=Hey Tom, ";
  };

  return (
    <Center padding={"8"}>
      <VStack>
        <HStack spacing={4}>
          <Link href="https://github.com/thomas-woehrle" isExternal>
            <Icon as={BsGithub} boxSize={8} />
          </Link>
          <Link>
            <EmailIcon boxSize={8} onClick={handleEmailClick} />
          </Link>
        </HStack>
        <Text>Created by Thomas Wöhrle</Text>
        <Text>
          <Link href="/privacy-policy">Privacy Policy</Link> 2023
        </Text>
      </VStack>
    </Center>
  );
};

export default Footer;
