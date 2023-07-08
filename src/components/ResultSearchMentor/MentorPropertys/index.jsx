import React from 'react'
import Link from 'next/link'

import { Badge, Divider, HStack, Text, VStack,Box } from '@chakra-ui/react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { BsChat, BsEnvelope, BsTelephone } from 'react-icons/bs'
import { MdOutlineLocalOffer } from 'react-icons/md'
import { TiMessages } from 'react-icons/ti'

const MentorPropertys = () => {
  return (
    <>
    <VStack
        flex="3"
        p="6"
        gap={8}
        alignItems="flex-start"
        display={{ base: "none", lg: "flex" }}
      >
        <Badge
          display="flex"
          alignItems="center"
          colorScheme="gray"
          borderRadius="full"
          w="fit-content"
          p="1"
          _hover={{ background: "#e7e7e7", cursor: "pointer" }}
        >
          <Text>یک هفته رایگان به صورت آزمایشی</Text>
          <MdOutlineLocalOffer display="inline" fontSize="16px" />
        </Badge>
        <Text fontWeight="bold">
          از این مربی چه انتظاری می توانم داشته باشم؟
        </Text>
        <Divider />
        <VStack alignItems="flex-start" color="gray">
          <HStack>
            <BsChat />
            <TiMessages />
            <BsEnvelope />
          </HStack>
          <Text>چت و ایمیل نامحدود با مربی</Text>
        </VStack>
        <Divider />
        <VStack alignItems="flex-start" color="gray">
          <BsTelephone />
          <Text>حداکثر 1 تماس در ماه</Text>
        </VStack>
        <Divider />
        <Link href="/">
          <HStack>
            <AiOutlineInfoCircle />
            <Text>اطلاعات بیشتر...</Text>
          </HStack>
        </Link>
      </VStack>
      <Box
        sx={{
          position: "absolute",
          top: -4,
          bg: "#ffffff",
          border: "2px solid #eaeaea",
          p: 1,
          borderRadius: "full",
          fontWeight: "bold",
        }}
        left={{ base: "50%", lg: 8 }}
        transform={{ base: "translateX(-50%)", lg: "none" }}
        display={{ base: "block" }}
        fontSize={{ base: "sm", md: "md" }}
      >
        <Text>تنها یک نفر باقی مانده</Text>
      </Box>
      </>
  )
}

export default MentorPropertys