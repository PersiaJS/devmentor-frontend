import React from 'react'
import { Box, HStack, Image, Stack, Text } from '@chakra-ui/react'

const MentorImage = () => {
  return (
    <Stack
          flex={4}
          p={2}
          justifyContent="space-between"
          alignItems="center"
          display={{ base: "none", md: "flex" }}
        >
          <Box
            sx={{
              position: "relative",
            }}
          >
            <Image
              sx={{
                borderRadius: "4",
              }}
              src="/mentor.jpg"
              alt="metor"
              h="xs"
              w="xs"
            />
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
                  "linear-gradient(to top, #ffffff 50%, transparent 80%)",
                color: "#fff",
                display: "flex",
                flexFlow: "column",
                justifyContent: "flex-end",
              }}
            ></Box>
          </Box>
          <HStack textAlign="right" w="90%">
            <Text fontWeight="bold" fontSize="4xl">
              240 دلار
            </Text>
            <Text fontSize="xl">/ ماه</Text>
          </HStack>
        </Stack>
  )
}

export default MentorImage