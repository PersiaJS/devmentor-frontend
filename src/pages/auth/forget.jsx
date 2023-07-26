"use client";
import Link from "next/link";
import Head from "next/head";

import { Container, Text, Center } from "@chakra-ui/react";

import Layout from "@/components/Layout/Layout";
import Logo from "@/components/Logo/logo";
import ForgetForm from "@/components/Forms/ForgetForm";

const Forget = () => {
  return (
    <>
      <Head>
        <title>فراموشی رمز عبور</title>
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
          <ForgetForm />
        </Container>
      </Layout>
    </>
  );
};

export default Forget;
