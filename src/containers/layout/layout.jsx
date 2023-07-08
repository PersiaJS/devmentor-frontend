import { Box, Container, Flex } from "@chakra-ui/react";
import Header from "@/Header/Header";
import Footer from "@/Footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Container
        display={"flex"}
        flexDirection={"column"}
        maxWidth={"100vw"}
        minHeight={"100vh"}
        padding={0}
      >
        <Header />
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          w={"full"}
        >
          {children}
        </Box>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
