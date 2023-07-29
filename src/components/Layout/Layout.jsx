import Header from "@/containers/Header/Header";
import Footer from "@/containers/Footer/Footer";

import { Container, Box, useColorModeValue, Flex } from "@chakra-ui/react";
import Hero from "../Hero/Hero";
import Image from "next/image";

const Layout = function ({ children }) {
  return (
    <Box>
      <Box position="relative" overflow="hidden">
        <Box
          position="absolute"
          insetY={0}
          left="65%"
          w="100%"
          transformOrigin="top right"
          transform="skewX(-30deg)"
          backgroundImage="linear-gradient(0deg,rgba(244,241,255,0) , rgba(224,231,255,0.2) )"
          borderColor={useColorModeValue("indigo.400", "whiteAlpha.500")}
          aria-hidden="true"
          shadow="xl"
        />

        <Header />
        <Hero />
      </Box>

      <Container maxW="container.xl" overflow="hidden">
        <Flex justifyContent="space-between" w="full" bgColor="white" p={10}>
          <Image
            src="/mentor-logos/microsoft-logo.svg"
            alt="microsoft logo"
            width={90}
            height={90}
            mt="6"
          />
          <Image
            src="/mentor-logos/airbnb-logo.svg"
            alt="airbnb logo"
            mt="6"
            width={90}
            height={90}
          />
          <Image
            src="/mentor-logos/google-logo.svg"
            alt="google logo"
            mt="6"
            width={90}
            height={90}
          />
          <Image
            src="/mentor-logos/uber-logo.svg"
            alt="uber logo"
            width={90}
            height={90}
            mt="6"
          />
          <Image
            src="/mentor-logos/netflix-logo.svg"
            alt="netflix logo"
            width={90}
            height={90}
            mt="6"
          />
        </Flex>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
