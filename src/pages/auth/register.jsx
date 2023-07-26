"use client";
import Link from "next/link";
import Head from "next/head";

import { Container, Center } from "@chakra-ui/react";
import Logo from "@/components/Logo/logo";
import Layout from "@/components/Layout/Layout";
import RegisterForm from "@/components/Forms/RegisterForm";
import RegisterIllustration from "@/components/Illustrations/RegisterIllustration";

const Register = () => {
  return (
    <>
      <Head>
        <title>ثبت نام</title>
        <meta name="description" content="Description of Register" />
      </Head>
      <Layout>
        <Container
          maxW={"30rem"}
          h="80vh"
          display="flex"
          flexFlow="column"
          justifyContent="center"
          alignItems="center"
        >
          <RegisterIllustration />
          <RegisterForm />
        </Container>
      </Layout>
    </>
  );
};

export default Register;
