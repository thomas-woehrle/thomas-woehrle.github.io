import { Button, Heading } from "@chakra-ui/react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { ButtonInfo } from "./NavBar";

interface Props {
  activeButton: ButtonInfo;
  onNameClick: () => void;
}

// without marginBottom the name is not centered for sizes above 768px. Do not know why

const Name = ({ activeButton, onNameClick }: Props) => {
  const navigate = useNavigate();
  return (
    <Link to={activeButton.link} onClick={onNameClick}>
      <Heading
        fontFamily={"logoFont"}
        fontSize={{ base: "3xl", md: "6xl" }}
        justifyContent={"center"}
      >
        Thomas Wöhrle
      </Heading>
    </Link>
  );
};

export default Name;
