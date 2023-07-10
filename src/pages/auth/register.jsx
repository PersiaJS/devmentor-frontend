"use client";
import Link from "next/link";
import Head from "next/head";

import { registerSchema } from "@/utils/yup/authValidations";
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
import Logo from "@/components/Logo/logo";
import Layout from "@/components/Layout/Layout";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      terms: false,
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
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

    errors.firstName && toast({ title: errors.firstName, ...options });
    errors.lastName && toast({ title: errors.lastName, ...options });
    errors.email && toast({ title: errors.email, ...options });
    errors.password && toast({ title: errors.password, ...options });
    errors.terms && toast({ title: errors.terms, ...options });
  };

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
          <Link href="/">
            <Logo />
          </Link>
          <Box w={"100%"} mt={20}>
            <form onSubmit={handleSubmit}>
              <FormControl>
                <Input
                  my={2}
                  placeholder="نام"
                  name="firstName"
                  value={values.firstName}
                  onChange={handleChange}
                />
              </FormControl>
              <FormControl>
                <Input
                  my={2}
                  placeholder="نام خانوادگی"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                />
              </FormControl>
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
                name="terms"
                value={values.terms}
                onChange={handleChange}
              >
                ظوابط و قوانین را می پذیرم
              </Checkbox>
              <br />
              <Button
                my={2}
                colorScheme="red"
                w="100%"
                type="submit"
                onClick={handleToasts}
              >
                ثبت نام
              </Button>
            </form>
            <Box mt={4}>
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
                  style={{ margin: "0 4px", color: "red" }}
                >
                  ورود
                </Link>
              </Text>
            </Box>
          </Box>
        </Container>
      </Layout>
    </>
  );
};

export default Register;
