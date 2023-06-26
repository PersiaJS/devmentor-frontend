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

const Register = () => {
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
        <Input my={2} placeholder="نام" />
        <Input my={2} placeholder="نام خانوادگی" />
        <Input my={2} placeholder="ایمیل" />
        <Input my={2} placeholder="کلمه عبور" />
        <Checkbox my={2}>ظوابط و قوانین را می پذیرم</Checkbox>
        <br />
        <Button my={2} colorScheme="blue" w="100%">
          <Link href="/auth/login">ثبت نام</Link>
        </Button>
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
      </FormControl>
    </Container>
  );
};

export default Register;
