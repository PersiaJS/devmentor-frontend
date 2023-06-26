"use client";
import Link from "next/link";

import {
  Container,
  FormControl,
  Text,
  Input,
  Button,
  Heading,
} from "@chakra-ui/react";
import Head from "next/head";

const Verify = () => {
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
        <Link href="/">
          <Heading as="h2" size="xl" my={8}>
            Dev Mentor
          </Heading>
        </Link>
        <FormControl w={{ base: "auto", md: "md" }}>
          <Input my={2} placeholder="کد امنیتی" />
          <Link href="/">
            <Button my={2} colorScheme="blue" w="100%">
              بازیابی
            </Button>
          </Link>
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
        </FormControl>
      </Container>
    </>
  );
};

export default Verify;
