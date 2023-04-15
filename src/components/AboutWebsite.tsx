import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Button,
  Center,
  Heading,
  Link,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";
import React from "react";

const AboutWebsite = () => {
  return (
    <>
      <Center>
        <Heading fontSize={"4xl"} mb={4}>
          About this Website
        </Heading>
      </Center>
      <Text fontSize={"2xl"}>
        The purpose of this website is to inform about myself and my work.{" "}
        <br />
        <br />
        When starting this project I had practical experience and good
        theoretical knowledge about working with backend technologies like
        Spring Boot and node.js. I did not really come into contact with
        frontend development or UI design though.
        <br />
        That is why I saw it as a challenge to build a website which serves my
        purposes, while being nicely orchestrated as well.
        <br />
        <br />I took a react course on codewithmosh.com and went on to build
        this website within one week in April. I value the simple UI design, the
        responsive layout and the highly modular projects page.
        <br />
        It is my first website and has great room for improvement, which is why
        I will continue to update the design, architecture and functionalities
        in the months to come.
        <br />
        <br />A list of the functionalities I have planned and issues I will
        resolve:
        <List>
          <ListItem>- revisiting and disclosing old projects</ListItem>
          <ListItem>- improve InfoPage button layout</ListItem>
          <ListItem>- uniform link management</ListItem>
          <ListItem>- extensive/detailed error handling</ListItem>
          <ListItem>- improved UI (especially text)</ListItem>
          <ListItem>- good commit/branch management</ListItem>
          <ListItem>- back-buttons</ListItem>
          <ListItem>
            - building the MultiPictureCard component to display multiple
            pictures for a project
          </ListItem>
          <ListItem>
            - sign-in and register functionality to add projects dynamically
          </ListItem>
          <ListItem>- ...</ListItem>
        </List>
        <br />
        You should also check out the Github-repo of this website
        <Link
          href="https://github.com/thomas-woehrle/thomas-woehrle.github.io"
          isExternal
          margin={4}
        >
          <Button
            variant={"outline"}
            rightIcon={<ExternalLinkIcon />}
            colorScheme="teal"
          >
            Github-repo of this website
          </Button>
        </Link>
      </Text>
    </>
  );
};

export default AboutWebsite;
