"use client";
import Link from "next/link";

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
import Head from "next/head";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      terms: false,
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <Head>
        <title>ثبت نام</title>
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
                placeholder="نام"
                name="firstName"
                value={formik.values.firstName}
                onChange={formik.handleChange}
              />
            </FormControl>
            <FormControl>
              <Input
                my={2}
                placeholder="نام خانوادگی"
                name="lastName"
                value={formik.values.lastName}
                onChange={formik.handleChange}
              />
            </FormControl>
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
              name="terms"
              value={formik.values.terms}
              onChange={formik.handleChange}
            >
              ظوابط و قوانین را می پذیرم
            </Checkbox>
            <br />
            <Button my={2} colorScheme="blue" w="100%" type="submit">
              ثبت نام
            </Button>
          </form>
          <Text
            textAlign="right"
            w="100%"
            as="span"
            mx="2"
            fontSize={{ base: "sm", md: "md" }}
          >
            حساب کاربری دارید؟
            <Link
              href="/auth/login"
              style={{ margin: "0 4px", color: "#2B6CB0" }}
            >
              ورود
            </Link>
          </Text>
        </Box>
      </Container>
    </>
  );
};

export default Register;
