import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

import { Container, Box } from "@chakra-ui/react";

const LayoutWfull = function ({ children }) {
  return (
    <Box>
      <Header />
      <Container maxW="100%" m={0} p={0}>
        {children}
      </Container>
      <Footer />
    </Box>
  );
};

export default LayoutWfull;
