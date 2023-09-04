import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import { Container, Box } from "@chakra-ui/react";

const Layout = function ({ children }) {
  return (
    <Box>
      <Header />

      <Container maxW="container.xl" overflow="hidden">
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
