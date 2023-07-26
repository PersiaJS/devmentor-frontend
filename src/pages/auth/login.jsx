"use client";
import Link from "next/link";
import Head from "next/head";

import { useFormik } from "formik";
import {
  Container,
  FormControl,
  Text,
  Input,
  Button,
  Heading,
  Checkbox,
  Box,
  useToast,
  Center,
} from "@chakra-ui/react";

import { loginSchema } from "@/utils/yup/authValidations";
import Layout from "@/components/Layout/Layout";
import Logo from "@/components/Logo/logo";
import handleRequest, { loginRequest } from "@/utils/handleRequest";
import LoginForm from "@/components/Forms/LoginForm";

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
          <Center my="8">
            <Link href="/">
              <Logo />
            </Link>
          </Center>
          <LoginForm />
        </Container>
      </Layout>
    </>
  );
};

export default Login;
