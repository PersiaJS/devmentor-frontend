"use client";
import Link from "next/link";

import {
  Container,
  FormControl,
  Text,
  Input,
  Button,
  Heading,
  Checkbox,
} from "@chakra-ui/react";
const Login = () => {
  return (
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
      <FormControl w={{ base: "auto", md: "md" }}>
        <Input my={2} placeholder="ایمیل" />
        <Input my={2} placeholder="کلمه عبور" />
        <Checkbox my={2}>من رو به خاطر بسپار</Checkbox>
        <br />
        <Button my={2} colorScheme="blue" w="100%">
          <Link href="/">ورود</Link>
        </Button>
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
      </FormControl>
    </Container>
  );
};

export default Login;
