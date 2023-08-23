import React from "react";
import { AddIcon } from "@chakra-ui/icons";
import { Avatar, Flex, IconButton, Input } from "@chakra-ui/react";
import axios from "axios";
const url = "https://api.cloudinary.com/v1_1/dae81jscx/image/upload";

export const InputFile = function ({ handleChange, imgSrc }) {
  const handleOnChange = async function (event) {
    const formData = new FormData();
    formData.append("file", event.target.files[0]);
    formData.append("upload_preset", "e5bjqsvz");

    const response = await axios({
      url,
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      data: formData,
    });
    handleChange(response.data.url);
  };

  return (
    <Flex justify="center" mb={10}>
      <Avatar pos="relative" size="xl" src={imgSrc}>
        <IconButton
          icon={<AddIcon />}
          isRound
          pos="absolute"
          borderRadius="full"
          top={0}
          left={0}
          size="sm"
          aria-label="Upload new image"
        />
        <Input
          type="file"
          opacity={0}
          pos="absolute"
          top={0}
          cursor="pointer"
          onChange={handleOnChange}
        />
      </Avatar>
    </Flex>
  );
};
