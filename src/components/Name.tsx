import { Button, Heading } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ButtonInfo } from "./NavBar";

interface Props {
  activeButton: ButtonInfo;
  onNameClick: () => void;
}

const Name = ({ activeButton, onNameClick }: Props) => {
  return (
    <Link to={activeButton.link} onClick={onNameClick}>
      <Heading
        fontFamily={"logoFont"}
        fontSize={{ base: "3xl", sm: "6xl" }}
        justifyContent={"center"}
      >
        Thomas Wöhrle
      </Heading>
    </Link>
  );
};

export default Name;
