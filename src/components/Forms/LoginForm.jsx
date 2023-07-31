import React, { useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import Cookies from "universal-cookie";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Input,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";

import handleRequest from "@/utils/handleRequest";
import { loginSchema } from "@/utils/yup/authValidations";
import { useRouter } from "next/router";

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const toast = useToast();

  const options = {
    duration: 4000,
    position: "bottom-right",
    variant: "left-accent",
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      rememberMe: false,
    },
    validationSchema: loginSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        setIsLoading(true);
        const response = await handleRequest().post("/auth/login", values);
        if (response.data.status) {
          const cookies = new Cookies();
          cookies.set("auth", response.data.jwt?.token, {
            path: "/",
            expires: new Date(new Date().getTime() + 60 * 60 * 24 * 180 * 1000),
          });
          setIsLoading(false);
          router.push("/");
          toast({
            title: "ورود موفقیت آمیز بود",
            ...options,
            status: "success",
          });
          resetForm();
        } else {
          setIsLoading(false);
          toast({
            title: "اطلاعات وارد شده صحیح نیست و یا ایمیل فعال نشده است.",
            ...options,
            status: "error",
          });
        }
      } catch (err) {
        setIsLoading(false);
        toast({
          title: "اطلاعات وارد شده صحیح نیست و یا ایمیل فعال نشده است.",
          ...options,
          status: "error",
        });
      }
    },
  });

  const { errors, values, handleChange, handleSubmit } = formik;

  const handleToasts = () => {
    errors.email && toast({ title: errors.email, ...options });
    errors.password && toast({ title: errors.password, ...options });
  };

  return (
    <Box w={{ base: "full", md: "md" }} mb="12">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Input
            my={2}
            placeholder="ایمیل"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <Input
            my={2}
            placeholder="کلمه عبور"
            name="password"
            type="password"
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
          isDisabled={isLoading}
        >
          {isLoading ? <Spinner color="white" /> : "ورود"}
        </Button>
      </form>
      <Text
        textAlign="right"
        w="100%"
        my={2}
        fontSize={{ base: "sm", md: "md" }}
      >
        حساب کاربری ندارید؟
        <Link href="/auth/register" style={{ margin: "0 4px", color: "red" }}>
          ثبت نام
        </Link>
      </Text>
      <Text
        textAlign="right"
        w="100%"
        as="span"
        my={2}
        fontSize={{ base: "sm", md: "md" }}
        color="red.500"
      >
        <Link href="/auth/forget">کلمه عبور خود را فراموش کرده اید؟</Link>
      </Text>
    </Box>
  );
};

export default LoginForm;
