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
  useToast,
  Center,
} from "@chakra-ui/react";
import { forgetSchema } from "@/utils/yup/authValidations";
import Layout from "@/components/Layout/Layout";
import Logo from "@/components/Logo/logo";

const Forget = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgetSchema,
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
  };

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
              <Button
                my={2}
                colorScheme="red"
                w="100%"
                type="submit"
                onClick={handleToasts}
              >
                بازیابی
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
      </Layout>
    </>
  );
};

export default Forget;
