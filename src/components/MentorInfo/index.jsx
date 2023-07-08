import React from "react";

import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Badge,
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  IconButton,
  Image,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack,
  Text,
} from "@chakra-ui/react";
import { BsChat, BsTelephone, BsThreeDotsVertical } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { PiBagSimpleLight } from "react-icons/pi";

const MentorInfo = () => {
  return (
    <Stack flex={8} p={{ base: "6", md: "2" }} my={{ base: "6px", lg: "none" }}>
      <Box
        sx={{
          position: "relative",
          justifyContent: "center",
        }}
        display={{ base: "flex", md: "none" }}
      >
        <Image
          sx={{
            borderRadius: "8",
            mx: "auto",
            w: "full",
            maxW: "sm",
          }}
          src="/mentor.jpg"
          alt="metor"
          h="xs"
        />
        <Box
          sx={{
            position: "absolute",
            paddingY: "2px",
            paddingX: "2px",
            borderRadius: "8",
            w: "full",
            maxW: "sm",
            bg: "#2b6db0",
            h: "6rem",
            opacity: ".5",
            bottom: "0",
            maskImage: "linear-gradient(to top, #ffffff 50%, transparent 80%)",
            color: "#fff",
            display: "flex",
            flexFlow: "column",
            justifyContent: "flex-end",
          }}
        ></Box>
      </Box>
      <HStack justifyContent="space-between">
        <Text fontSize="2xl" fontWeight="bold">
          کری ریتر
        </Text>
        <HStack>
          <Button
            borderRadius="full"
            colorScheme="green"
            display={{ base: "none", lg: "flex" }}
          >
            پاسخگویی سریع
            <FaStar style={{ marginRight: "6px" }} />
          </Button>
          <Menu>
            <MenuButton
              as={IconButton}
              icon={<BsThreeDotsVertical />}
              display={{ base: "flex", lg: "none" }}
            />
            <MenuList display={{ base: "block", lg: "none" }}>
              <Accordion allowMultiple>
                <AccordionItem>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left" fontSize="sm">
                      از این مربی چه انتظاراتی میتوانم داشته باشم؟
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel pb={4}>
                    <MenuItem>
                      <BsChat />
                      <Text mx="4">چت و ایمیل نامحدود با مربی</Text>
                    </MenuItem>
                    <MenuItem>
                      <BsTelephone />
                      <Text mx="4">حداکثر 1 تماس در ماه</Text>
                    </MenuItem>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
              <Button borderRadius="full" colorScheme="green" w="90%" m="4">
                پاسخگویی سریع
                <FaStar style={{ marginRight: "6px" }} />
              </Button>
            </MenuList>
          </Menu>
        </HStack>
      </HStack>
      <HStack>
        <Text color="gray" fontSize={{ base: "sm", md: "md" }}>
          مهندس نرم افزار در
        </Text>
        <Text
          color="black"
          display="inline"
          fontWeight="bold"
          fontSize={{ base: "sm", md: "md" }}
        >
          مایکروسافت
        </Text>
      </HStack>
      <Text color="#118577" fontSize={{ base: "sm", md: "md" }}>
        راهنما و مهندس محصولات نرم افزاری. +12 سال مهندسی فول استک Typescript ,
        C# , NestJS , Remix , AWS
      </Text>
      <HStack>
        <FaStar color="gold" />
        <FaStar color="gold" />
        <FaStar color="gold" />
        <FaStar color="gold" />
        <FaStar color="gold" />
        <Text>5.0</Text>
        <Text>(8 بررسی)</Text>
      </HStack>
      <Divider />
      <Flex gap="4" py="2" fontSize={{ base: "sm", md: "md" }}>
        <HStack>
          <Text>گفتگو</Text>
          <BsChat />
        </HStack>
        <HStack>
          <Text>تماس</Text>
          <BsTelephone />
        </HStack>
        <HStack>
          <Text> تجربه ها</Text>
          <PiBagSimpleLight />
        </HStack>
      </Flex>
      <Divider />
      <Text my="6" fontSize={{ base: "sm", md: "normal" }}>
        من به مهندسان کمک می کنم تا محصولات عالی بسازند و ارسال کنند. چه
        کارآفرینی باشید که تلاش می‌کند درخواست خود را به خط پایان برساند یا یک
        مهندس هستید که به دنبال غیرقابل جایگزین شدن در کار هستید، می‌توانم شما
        را به جایی که باید باشید راهنمایی کنم...
      </Text>
      <Flex flexWrap="wrap" my="6" gap="4">
        <Badge
          colorScheme="gray"
          borderRadius="full"
          p="1"
          _hover={{ background: "#e7e7e7", cursor: "pointer" }}
        >
          Engineering & Data
        </Badge>
        <Badge
          colorScheme="gray"
          borderRadius="full"
          p="1"
          _hover={{ background: "#e7e7e7", cursor: "pointer" }}
        >
          NestJS
        </Badge>
        <Badge
          colorScheme="gray"
          borderRadius="full"
          p="1"
          _hover={{ background: "#e7e7e7", cursor: "pointer" }}
        >
          React
        </Badge>
        <Badge
          colorScheme="gray"
          borderRadius="full"
          p="1"
          _hover={{ background: "#e7e7e7", cursor: "pointer" }}
        >
          Typescript
        </Badge>
        <Badge
          colorScheme="gray"
          borderRadius="full"
          p="1"
          _hover={{ background: "#e7e7e7", cursor: "pointer" }}
        >
          Lonic Framework
        </Badge>
        <Badge
          colorScheme="gray"
          borderRadius="full"
          p="1"
          _hover={{ background: "#e7e7e7", cursor: "pointer" }}
        >
          NodeJS
        </Badge>
      </Flex>
      <HStack textAlign="right" w="90%" display={{ base: "flex", md: "none" }}>
        <Text fontWeight="bold" fontSize="4xl">
          240 دلار
        </Text>
        <Text fontSize="xl">/ ماه</Text>
      </HStack>
      <Button my="2" w={{ base: "full", md: "xs" }} colorScheme="blue">
        پروفایل
      </Button>
    </Stack>
  );
};

export default MentorInfo;
