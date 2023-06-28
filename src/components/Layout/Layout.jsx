import Footer from "@/containers/Footer/Footer";

const { Container, Box } = require("@chakra-ui/react");

const Layout = function ({ children }) {
  return (
    <Container
      display="flex"
      flexDirection="column"
      maxWidth="100vw"
      minHeight="100vh"
      padding={0}
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        maxWidth="full"
        minHeight="100vh"
      >
        {children}
      </Box>
      <Footer />
    </Container>
  );
};

export default Layout;
