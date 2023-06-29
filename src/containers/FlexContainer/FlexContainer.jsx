import { Box } from "@chakra-ui/react";
import React from "react";

function FlexContainer({ children }) {
  return (
    <Box
      display={"flex"}
      flexDir={"row"}
      flexWrap={"wrap"}
      justifyContent={"space-evenly"}
    >
      {children}
    </Box>
  );
}

export default FlexContainer;
