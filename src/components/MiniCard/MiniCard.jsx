import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";

function MiniCard() {
  const textColor = "#253f62";
  return (
    <Box
      display={"flex"}
      flexDir={"row"}
      flexWrap={"nowrap"}
      alignItems={"flex-start"}
      padding={2.5}
      rounded={20}
      boxShadow={"0 0 10px gray"}
      width={{ base: "80", sm: "sm", md: "xl", lg: "2xl" }}
    >
      <Image
        w={{ base: 115, sm: 125, md: 130, lg: 160 }}
        h={{ base: 115, sm: 125, md: 130, lg: 160 }}
        objectFit={"cover"}
        rounded={20}
        src="/images/senior-developer.avif"
        alt="احمد احمدی"
      />
      <Box
        mr={7}
        display={"flex"}
        flexDir={"column"}
        h={"100%"}
        w={"50%"}
        justifyContent={"space-evenly"}
      >
        <Box>
          <Text fontSize={30} fontWeight={"extrabold"} color={textColor}>
            احمد احمدی
          </Text>
          <Text fontSize={23} fontWeight={"bold"} color={"#757374"}>
            {"توسعه دهنده ارشد وب - ایمالز"}
          </Text>
        </Box>
        {/* {Text components below are temporarily redundant. Will implement it dynamically} */}
        <Box display={"flex"} flexDir={"row"} flexWrap={"wrap"} mr={3}>
          <Text fontSize={16} fontWeight={"semibold"} color={textColor} mx={2}>
            {"چت شخصی"}
          </Text>
          <Text fontSize={16} fontWeight={"semibold"} color={textColor} mx={2}>
            {"راهنمایی عملی"}
          </Text>
          <Text fontSize={16} fontWeight={"semibold"} color={textColor} mx={2}>
            {"تماس مستقیم"}
          </Text>
          <Text fontSize={16} fontWeight={"semibold"} color={textColor} mx={2}>
            {"پشتیبانی"}
          </Text>
        </Box>
      </Box>
      <Box fontSize={18} mr={"auto"} alignSelf={"flex-start"}>
        <Text fontWeight={"semibold"}>3 عدد باقی مانده</Text>
      </Box>
    </Box>
  );
}

export default MiniCard;
