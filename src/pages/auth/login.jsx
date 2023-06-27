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
} from "@chakra-ui/react";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <Head>
        <title>ورود</title>
        <meta name="description" content="Description of Register" />
      </Head>
      <Container
        maxW={990}
        h="100vh"
        display="flex"
        flexFlow="column"
        justifyContent="center"
        alignItems="center"
      >
        <Heading as="h2" size="xl" my={8}>
          Dev Mentor
        </Heading>
        <Box w={{ base: "auto", md: "md" }}>
          <form onSubmit={formik.handleSubmit}>
            <FormControl>
              <Input
                my={2}
                placeholder="ایمیل"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
              />
            </FormControl>
            <FormControl>
              <Input
                my={2}
                placeholder="کلمه عبور"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
              />
            </FormControl>
            <Checkbox
              my={2}
              name="rememberMe"
              value={formik.values.rememberMe}
              onChange={formik.handleChange}
            >
              من را بخاطر بسپار
            </Checkbox>
            <br />
            <Button my={2} colorScheme="blue" w="100%" type="submit">
              ورود
            </Button>
          </form>
          <Text
            textAlign="right"
            w="100%"
            my={2}
            fontSize={{ base: "sm", md: "md" }}
          >
            حساب کاربری ندارید؟
            <Link
              href="/auth/register"
              style={{ margin: "0 4px", color: "#2B6CB0" }}
            >
              ثبت نام
            </Link>
          </Text>
          <Text
            textAlign="right"
            w="100%"
            as="span"
            my={2}
            fontSize={{ base: "sm", md: "md" }}
          >
            <Link href="/auth/forget">کلمه عبور خود را فراموش کرده اید؟</Link>
          </Text>
        </Box>
      </Container>
    </>
  );
};

export default Login;
