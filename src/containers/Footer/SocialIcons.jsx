import Link from "next/link";
import React from "react";

import { ButtonGroup, IconButton, Stack, Text } from "@chakra-ui/react";
import { FaGithub, FaInstagram, FaLinkedin, FaTelegram } from "react-icons/fa";

const SocialIcons = () => {
  return (
    <Stack
      pt="8"
      pb="12"
      justify="space-between"
      direction={{
        base: "column-reverse",
        md: "row",
      }}
      align="center"
    >
      <ButtonGroup variant="ghost-on-accent">
        <IconButton
          as="a"
          href="https://www.linkedin.com/company/persiajs/"
          aria-label="LinkedIn"
          icon={<FaLinkedin fontSize="1.25rem" />}
          _hover={{ color: "red.500" }}
        />
        <IconButton
          as="a"
          href="https://github.com/PersiaJS/devmentor-frontend"
          aria-label="GitHub"
          icon={<FaGithub fontSize="1.25rem" />}
          _hover={{ color: "red.500" }}
        />
        <IconButton
          as="a"
          href="https://t.me/persiajs"
          aria-label="Twitter"
          icon={<FaTelegram fontSize="1.25rem" />}
          _hover={{ color: "red.500" }}
        />
        <IconButton
          as="a"
          href="https://www.instagram.com/persiajs.dev/"
          aria-label="GitHub"
          icon={<FaInstagram fontSize="1.25rem" />}
          _hover={{ color: "red.500" }}
        />
      </ButtonGroup>
      <Text fontSize="sm" dir="ltr" color="on-accent-subtle">
        &copy; {new Date().getFullYear()}{" "}
        <Link href="http://persiajs.com">PersiaJS</Link>. All rights reserved
      </Text>
    </Stack>
  );
};

export default SocialIcons;
