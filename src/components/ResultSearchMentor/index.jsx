import React from "react";

import {  Divider, Flex } from "@chakra-ui/react";

import MentorImage from "./MentorImage";
import MentorInfo from "./MentorInfo";
import MentorPropertys from "./MentorPropertys";

const ResultSearchMentor = () => {
  return (
    <Flex
      sx={{
        border: "1px solid #e7e7e7",
        borderRadius: "4px",
        my: "5",
        position: "relative",
      }}
      mx={{ base: "none", md: "10" }}
    >
      <Flex flex={9}>
        <MentorImage />
        <MentorInfo />
        <Divider orientation="vertical" />
      </Flex>
      <MentorPropertys />
    </Flex>
  );
};

export default ResultSearchMentor;
