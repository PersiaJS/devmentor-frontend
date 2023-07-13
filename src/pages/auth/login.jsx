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
} from "@chakra-ui/react";

import { loginSchema } from "@/utils/yup/authValidations";
import Layout from "@/components/Layout/Layout";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { errors, values, handleChange, handleSubmit } = formik;

  const toast = useToast();

  const handleToasts = () => {
    const options = {
      duration: 4000,
      position: "top-right",
      variant: "left-accent",
    };

    errors.email && toast({ title: errors.email, ...options });
    errors.password && toast({ title: errors.password, ...options });
  };

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
          <Heading as="h2" size="xl" my={8}>
            Dev Mentor
          </Heading>
          <Box w={{ base: "auto", md: "md" }}>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <Input
                  my={2}
                  placeholder="ایمیل"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <Input
                  my={2}
                  placeholder="کلمه عبور"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                />
              </FormControl>
              <Checkbox
                my={2}
                name="rememberMe"
                value={values.rememberMe}
                onChange={handleChange}
              >
                من را بخاطر بسپار
              </Checkbox>
              <br />
              <Button
                my={2}
                colorScheme="red"
                w="100%"
                type="submit"
                onClick={handleToasts}
              >
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
      </Layout>
    </>
  );
};

export default Login;
