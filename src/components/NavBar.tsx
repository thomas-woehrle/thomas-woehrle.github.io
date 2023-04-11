import React from "react";
import Name from "./Name";
import { Button, ButtonGroup, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

interface ButtonInfo {
  value: string;
  link: string;
}

interface Props {
  activeButton: string;
  buttons: ButtonInfo[];
  onNavbarClick: (button: string) => void;
}

const NavBar = ({ activeButton, buttons, onNavbarClick }: Props) => {
  return (
    <HStack padding={6} justifyContent="space-between">
      <Name />
      <ButtonGroup
        bgColor={"gray.50"}
        borderRadius={"lg"}
        width={"lg"}
        padding={2}
        variant="ghost"
        size={"lg"}
        colorScheme={"teal"}
      >
        {buttons.map((button) => (
          <Button
            key={button.value}
            width={button.value === activeButton ? "100%" : "auto"}
            border={button.value === activeButton ? "1px" : "0px"}
            borderColor={"teal"}
            onClick={() => onNavbarClick(button.value)}
          >
            <Link to={button.link}>{button.value}</Link>
          </Button>
        ))}
        {/* <Button width={"100%"} border={"1px"} borderColor={"teal"} value="home">
          <Link to={"/home"}>home</Link>
        </Button>
        <Button>Apps</Button>
        <Button>Portfolio</Button>
        <Button>Info</Button> */}
      </ButtonGroup>
    </HStack>
  );
};

export default NavBar;
