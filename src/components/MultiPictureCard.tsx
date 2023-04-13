import React from "react";
import { Image } from "@chakra-ui/react";
import imagePlaceholder from "../assets/image_placeholder.webp";

// toDo:
// properties which pass the pictures to be displayed
// functionality to swipe through multiple pictures

const MultiPictureCard = () => {
  return (
    <Image
      src={imagePlaceholder}
      objectFit={"cover"}
      width={"lg"}
      height={"lg"}
      borderRadius={"lg"}
    ></Image>
  );
};

export default MultiPictureCard;
