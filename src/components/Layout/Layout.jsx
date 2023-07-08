import Header from "@/containers/Header/Header";
import Footer from "@/containers/Footer/Footer";

import { Container, Box } from "@chakra-ui/react";

const Layout = function ({ children }) {
  return (
    <Box>
      <Header />
      <Container maxW="container.xl" mt="10">
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default Layout;
