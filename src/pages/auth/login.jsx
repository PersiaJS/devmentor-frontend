"use client";
import Head from "next/head";

import { Container } from "@chakra-ui/react";

import Layout from "@/components/Layout/Layout";
import LoginForm from "@/components/Forms/LoginForm";
import LoginIllustration from "@/components/Illustrations/LoginIllustration";

const Login = () => {
  return (
    <>
      <Head>
        <title>ورود</title>
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
          <LoginIllustration />
          <LoginForm />
        </Container>
      </Layout>
    </>
  );
};

export default Login;
