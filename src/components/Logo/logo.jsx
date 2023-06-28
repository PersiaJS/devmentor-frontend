import { Text, useColorModeValue } from "@chakra-ui/react";
import React from "react";

function Logo() {
  return (
    <>
      <Text
        fontFamily={"heading"}
        color={useColorModeValue("gray.800", "white")}
        fontWeight={800}
      >
        DEV MENTOR
      </Text>
    </>
  );
}

export default Logo;
