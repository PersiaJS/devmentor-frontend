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
} from "@chakra-ui/react";

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

  const { errors, touched, values, handleChange, handleSubmit } = formik;

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
          <form onSubmit={handleSubmit}>
            <FormControl>
              <Input
                my={2}
                placeholder="نام"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
              />
              {errors.firstName && touched.firstName && (
                <Text color="red">{errors.firstName}</Text>
              )}
            </FormControl>
            <FormControl>
              <Input
                my={2}
                placeholder="نام خانوادگی"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
              />
              {errors.lastName && touched.lastName && (
                <Text color="red">{errors.lastName}</Text>
              )}
            </FormControl>
            <FormControl>
              <Input
                my={2}
                placeholder="ایمیل"
                name="email"
                value={values.email}
                onChange={handleChange}
              />
              {errors.email && touched.email && (
                <Text color="red">{errors.email}</Text>
              )}
            </FormControl>
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
            <Checkbox
              my={2}
              name="terms"
              value={values.terms}
              onChange={handleChange}
            >
              ظوابط و قوانین را می پذیرم
            </Checkbox>
            {errors.terms && touched.terms && (
              <Text color="red">{errors.terms}</Text>
            )}
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
