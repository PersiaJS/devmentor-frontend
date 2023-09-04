import Head from "next/head";

import { Container } from "@chakra-ui/react";

import Layout from "@/components/Layout/Layout";
import VerifyForm from "@/components/Forms/VerifyForm";
import VerifyIllustration from "@/components/Illustrations/VerifyIllustration";

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
          <VerifyIllustration />
          <VerifyForm />
        </Container>
      </Layout>
    </>
  );
};

export default Verify;
