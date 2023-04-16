import { Heading } from "@chakra-ui/react";
import { Link } from "react-router-dom";
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
        color={"purple.800"}
        textShadow={"-1px 1px blue"}
      >
        Thomas Wöhrle
      </Heading>
    </Link>
  );
};

export default Name;
