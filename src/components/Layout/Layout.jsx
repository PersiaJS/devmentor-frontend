import Header from "@/containers/Header/Header";
import Footer from "@/containers/Footer/Footer";

import { Container, Box, useColorModeValue, Flex } from "@chakra-ui/react";

const Layout = function ({ children }) {
  return (
    <Box>
      <Box position="relative" overflow="hidden">
        <Header />
      </Box>

      <Container maxW="container.xl" overflow="hidden">
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
