"use client";
import Link from "next/link";

import {
  Container,
  FormControl,
  Text,
  Input,
  Button,
  Heading,
  Box,
} from "@chakra-ui/react";
import Head from "next/head";
import { useFormik } from "formik";
import { verifySchema } from "@/utils/yup/authValidations";

const Verify = () => {
  const formik = useFormik({
    initialValues: {
      code: "",
    },
    validationSchema : verifySchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const { errors, touched, values, handleChange, handleSubmit } = formik;


  return (
    <>
      <Head>
        <title>اعتبار سنجی</title>
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
                placeholder="کد امنیتی"
                name="code"
                value={values.code}
                onChange={handleChange}
              />
              {errors.code && touched.code && (
                <Text color="red">{errors.code}</Text>
              )}
            </FormControl>
            <Button my={2} colorScheme="blue" w="100%" type="submit">
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
        </Box>
      </Container>
    </>
  );
};

export default Verify;
