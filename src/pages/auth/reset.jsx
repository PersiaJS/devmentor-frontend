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
  Box,
} from "@chakra-ui/react";

import { resetSchema } from "@/utils/yup/authValidations";

const Reset = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: resetSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;

  return (
    <>
      <Head>
        <title>بازیابی رمز عبور</title>
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
          <form onSubmit={handleSubmit}>
            <FormControl>
              <Input
                my={2}
                placeholder="کلمه عبور"
                name="password"
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && touched.password && (
                <Text color="red">{errors.password}</Text>
              )}
            </FormControl>
            <FormControl>
              <Input
                my={2}
                placeholder="تایید کلمه عبور"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <Text color="red">{errors.confirmPassword}</Text>
              )}
            </FormControl>
            <Button my={2} colorScheme="blue" w="100%" type="submit">
              به روز رسانی
            </Button>
          </form>
          <Text
            textAlign="right"
            w="100%"
            my={2}
            fontSize={{ base: "sm", md: "md" }}
          >
            کلمه عبور خود را بخاطر دارید؟
            <Link
              href="/auth/login"
              style={{ margin: "0 4px", color: "#2B6CB0" }}
            >
              ورود
            </Link>
          </Text>
          <Text
            textAlign="right"
            w="100%"
            as="span"
            fontSize={{ base: "sm", md: "md" }}
          >
            حساب کاربری ندارید؟
            <Link
              href="/auth/login"
              style={{ margin: "0 4px", color: "#2B6CB0" }}
            >
              ثبت نام
            </Link>
          </Text>
        </Box>
      </Container>
    </>
  );
};

export default Reset;
