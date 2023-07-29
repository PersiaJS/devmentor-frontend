import Head from "next/head";

import { Container } from "@chakra-ui/react";

import Layout from "@/components/Layout/Layout";
import ResetForm from "@/components/Forms/ResetForm";
import ResetIllustration from "@/components/Illustrations/ResetIllustration";

const Reset = () => {
  return (
    <>
      <Head>
        <title>بازیابی رمز عبور</title>
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
          <ResetIllustration />
          <ResetForm />
        </Container>
      </Layout>
    </>
  );
};

export default Reset;
