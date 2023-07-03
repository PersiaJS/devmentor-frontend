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
      alignItems={"flex-start"}
      padding={2.5}
      rounded={20}
      boxShadow={"0 0 10px rgba(0,0,0,.4 )"}
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
        w={"63%"}
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
        <Box display={"flex"} flexDir={"row"} flexWrap={"wrap"} mr={3} mt={5}>
          <Box
            color={textColor}
            mx={2}
            my={0.5}
            display="flex"
            alignItems="center"
          >
            <BiPhone size={17} />
            <Text fontSize={16} fontWeight={"semibold"} mx={1.5}>
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
            <BiChat size={17} />
            <Text fontSize={16} fontWeight={"semibold"} mx={1.5}>
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
            <BiBadgeCheck size={17} />
            <Text fontSize={16} fontWeight={"semibold"} mx={1.5}>
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
            <BiSupport size={17} />
            <Text fontSize={16} fontWeight={"semibold"} mx={1.5}>
              {"پشتیبانی"}
            </Text>
          </Box>
        </Box>
      </Box>
      <Box fontSize={18} mr={"auto"} alignSelf={"flex-start"}>
        <Text fontWeight={"semibold"}>3 عدد</Text>
      </Box>
    </Box>
  );
}

export default MiniCard;
