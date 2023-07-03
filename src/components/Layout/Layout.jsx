import Footer from "@/containers/Footer/Footer";

const { Container, Box } = require("@chakra-ui/react");
import Header from "@/containers/Header/Header";
const Layout = function ({ children }) {
  return (
    <Container
      display="flex"
      flexDirection="column"
      maxWidth="100vw"
      minHeight="100vh"
      padding={0}
    >
      <Header />
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
