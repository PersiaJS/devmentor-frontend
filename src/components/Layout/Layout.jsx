import Header from "@/containers/Header/Header";
import Footer from "@/containers/Footer/Footer";

import { Container, Box } from "@chakra-ui/react";

const Layout = function ({ children }) {
  return (
    <Container
      display="flex"
      flexDirection="column"
      maxWidth="full"
      minHeight="100vh"
      padding={0}
      overflow="hidden"
    >
      <Header />
      <Box maxWidth="full" minHeight="100vh">
        {children}
      </Box>
      <Footer />
    </Container>
  );
};

export default Layout;
