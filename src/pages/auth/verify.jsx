import Link from "next/link";
import Head from "next/head";

import { Container, Center } from "@chakra-ui/react";

import Layout from "@/components/Layout/Layout";
import Logo from "@/components/Logo/logo";
import VerifyForm from "@/components/Forms/VerifyForm";

const Verify = () => {
  return (
    <>
      <Head>
        <title>اعتبار سنجی</title>
        <meta name="description" content="Description of Register" />
      </Head>
      <Layout>
        <Container
          maxW={990}
          h="80vh"
          display="flex"
          flexFlow="column"
          justifyContent="center"
          alignItems="center"
        >
          <Center my="8">
            <Link href="/">
              <Logo />
            </Link>
          </Center>
          <VerifyForm />
        </Container>
      </Layout>
    </>
  );
};

export default Verify;
