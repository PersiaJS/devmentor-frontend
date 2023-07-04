import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { BiSupport, BiBadgeCheck, BiPhone, BiChat } from "react-icons/bi";

function MiniCard() {
  const textColor = "#253f62";
  return (
    <Box
      display={"flex"}
      flexDir={"row"}
      flexWrap={"nowrap"}
      alignItems={"center"}
      padding={2.5}
      rounded={20}
      boxShadow={"0 0 10px rgba(0,0,0,.4 )"}
      width={{ base: "100%", sm: "md", md: "xl", lg: "2xl" }}
    >
      <Image
        w={{ base: 125, md: 130, lg: 160 }}
        h={{ base: 125, md: 130, lg: 160 }}
        objectFit={"cover"}
        rounded={20}
        src="/images/senior-developer.avif"
        alt="احمد احمدی"
      />
      <Box
        mr={{ base: 2.5, md: 7 }}
        display={"flex"}
        flexDir={"column"}
        h={"100%"}
        w={"63%"}
        justifyContent={"space-evenly"}
      >
        <Box>
          <Text
            fontSize={{ base: 18, sm: 24, md: 28, lg: 30 }}
            fontWeight={"extrabold"}
            color={textColor}
          >
            احمد احمدی
          </Text>
          <Text
            fontSize={{ base: 11.5, sm: 17, md: 21, lg: 23 }}
            fontWeight={"bold"}
            color={"#757374"}
            whiteSpace={"nowrap"}
          >
            {"توسعه دهنده ارشد وب - ایمالز"}
          </Text>
        </Box>
        {/* {Text components below are temporarily redundant. Will implement it dynamically} */}
        <Box
          display={"flex"}
          flexDir={{ base: "column", sm: "row" }}
          flexWrap={"wrap"}
          mr={{ base: 1, md: 3 }}
          mt={{ base: 2, sm: 3, md: 5 }}
        >
          <Box
            color={textColor}
            mx={2}
            my={0.5}
            display="flex"
            alignItems="center"
          >
            <BiPhone size={16.5} />
            <Text
              fontSize={{ base: 10, sm: 13, md: 15, lg: 17 }}
              fontWeight={"semibold"}
              mx={1.5}
            >
              {"تماس مستقیم"}
            </Text>
          </Box>
          <Box
            color={textColor}
            mx={2}
            my={0.5}
            display="flex"
            alignItems="center"
          >
            <BiChat size={16.5} />
            <Text
              fontSize={{ base: 10, sm: 13, md: 15, lg: 17 }}
              fontWeight={"semibold"}
              mx={1.5}
            >
              {"چت شخصی"}
            </Text>
          </Box>
          <Box
            color={textColor}
            mx={2}
            my={0.5}
            display="flex"
            alignItems="center"
          >
            <BiBadgeCheck size={16.5} />
            <Text
              fontSize={{ base: 10, sm: 13, md: 15, lg: 17 }}
              fontWeight={"semibold"}
              mx={1.5}
            >
              {"راهنمایی عملی"}
            </Text>
          </Box>
          <Box
            color={textColor}
            mx={2}
            my={0.5}
            display="flex"
            alignItems="center"
          >
            <BiSupport size={16.5} />
            <Text
              fontSize={{ base: 10, sm: 13, md: 15, lg: 17 }}
              fontWeight={"semibold"}
              mx={1.5}
            >
              {"پشتیبانی"}
            </Text>
          </Box>
        </Box>
      </Box>
      <Box
        fontSize={{ base: 9, sm: 13, md: 16, lg: 18 }}
        mr={"auto"}
        alignSelf={"flex-start"}
        whiteSpace={"nowrap"}
      >
        <Text fontWeight={"semibold"}>3 عدد</Text>
      </Box>
    </Box>
  );
}

export default MiniCard;
