import React from "react";
import { FaStar } from "react-icons/fa";
import { BsChat, BsTelephone } from "react-icons/bs";

import {
  Box,
  Card,
  CardBody,
  Flex,
  HStack,
  Image,
  Badge,
  Text,
  Divider,
  Button,
} from "@chakra-ui/react";

const MentorCard = () => {
  return (
    <Card
      sx={{
        w: "sm",
        border: "1px solid #eaeaea",
        boxShadow: "sm",
      }}
    >
      <CardBody>
        <Box
          sx={{
            position: "relative",
          }}
        >
          <Image
            sx={{
              w: "full",
              h: "20rem",
              borderRadius: "10px",
            }}
            src="mentor.jpg"
            alt="mentor"
          />
          <Box
            sx={{
              display: "flex",
              alignContent: "center",
              gap: "1",
              position: "absolute",
              fontSize: "xs",
              bg: "#ffffff",
              paddingY: "2px",
              paddingX: "2px",
              borderRadius: "10px",
              top: 4,
              left: 4,
            }}
          >
            <Text>(8)</Text>
            <Text>5.0</Text>
            <FaStar color="gold" />
          </Box>
          <Box
            sx={{
              position: "absolute",
              paddingY: "2px",
              paddingX: "2px",
              borderRadius: "10px",
              w: "full",
              bg: "#2b6db0",
              h: "6rem",
              opacity: ".5",
              bottom: "0",
              maskImage:
                "linear-gradient(to top, #ffffff 70%, transparent 100%)",
              color: "#fff",
              display: "flex",
              flexFlow: "column",
              justifyContent: "flex-end",
            }}
          >
            <Text mx="2" fontWeight="bold">
              کری ریتر
            </Text>
            <Text mx="2">مهندس نرم افزار در مایکروسافت</Text>
          </Box>
        </Box>
        <Text fontSize="sm" p="2">
          من به مهندسان کمک می کنم تا محصولات عالی بسازند و ارسال کنند. چه
          کارآفرینی باشید که تلاش می‌کند درخواست خود را به خط پایان برساند یا یک
          مهندس هستید که به دنبال غیرقابل جایگزین شدن در کار هستید، می‌توانم شما
          را به جایی که باید باشید راهنمایی کنم...
        </Text>
        <Flex my="2" flexWrap="wrap" gap="2" fontSize="xs">
          <Badge borderRadius="md" fontSize="xs">
            Typescript
          </Badge>
          <Badge borderRadius="md" fontSize="xs">
            Nest
          </Badge>
          <Badge borderRadius="md" fontSize="xs">
            React
          </Badge>
          <Badge borderRadius="md" fontSize="xs">
            Engineering & Data
          </Badge>
          <Badge borderRadius="md" fontSize="xs">
            NodeJS
          </Badge>
        </Flex>
        <Divider />
        <Box>
          <Flex p="2" alignItems="center">
            <Text fontSize="2xl" fontWeight="bold">
              240 دلار
            </Text>
            <Text> / ماه </Text>
          </Flex>
          <Flex p="2" alignItems="center" gap="4">
            <HStack fontSize="sm" color="gray">
              <Text>گفتگو</Text>
              <BsChat />
            </HStack>
            <HStack fontSize="sm" color="gray">
              <Text>تماس</Text>
              <BsTelephone />
            </HStack>
          </Flex>
        </Box>
        <Divider />
        <Button w="full" colorScheme="blue" my="2">
          پروفایل
        </Button>
      </CardBody>
    </Card>
  );
};

export default MentorCard;
