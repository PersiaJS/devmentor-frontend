import Link from "next/link";
import Head from "next/head";

import { Container, Center } from "@chakra-ui/react";

import Layout from "@/components/Layout/Layout";
import Logo from "@/components/Logo/logo";
import ResetForm from "@/components/Forms/resetForm";
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
