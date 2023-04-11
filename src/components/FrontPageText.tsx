import { Heading, Highlight } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const FrontPageText = () => {
  return (
    <Heading
      fontFamily={"mono"}
      textAlign={"center"}
      fontSize={"5xl"}
      maxWidth={"2xl"}
    >
      <Highlight
        query={["consectetur", "laudantium"]}
        styles={{ bg: "teal.200" }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, ad
        repellat nihil rem facilis laudantium sit aut cumque fuga? Consectetur!
      </Highlight>
    </Heading>
  );
};

export default FrontPageText;
