import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import {
  Box,
  Button,
  FormControl,
  Input,
  Text,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";

import { resetSchema } from "@/utils/yup/authValidations";
import handleRequest from "@/utils/handleRequest";

const ResetForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const toast = useToast();

  const options = {
    duration: 4000,
    position: "top-right",
    variant: "left-accent",
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: resetSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        setIsLoading(true);
        const response = await handleRequest().post("/auth/reset", {
          password: values.password,
          securityHash: router.query.forgotEmailToken,
        });
        if (response.data.status) {
          setIsLoading(false);
          toast({
            title: "رمز عبور با موفقیت به روز رسانی شد",
            ...options,
            status: "success",
          });
          router.replace("/auth/login");
          resetForm();
        } else {
          setIsLoading(false);
          toast({
            title: "رمز عبور  به روز رسانی نشد",
            ...options,
            status: "error",
          });
        }
      } catch (err) {
        setIsLoading(false);
        toast({
          title: "رمز عبور  به روز رسانی نشد",
          ...options,
          status: "error",
        });
      }
    },
  });

  const { errors, values, handleChange, handleSubmit } = formik;

  const handleToasts = () => {
    errors.password && toast({ title: errors.password, ...options });
    errors.confirmPassword &&
      toast({ title: errors.confirmPassword, ...options });
  };

  return (
    <Box w={{ base: "full", md: "md" }} mb="12">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Input
            my={2}
            placeholder="کلمه عبور"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <Input
            my={2}
            placeholder="تایید کلمه عبور"
            name="confirmPassword"
            value={values.confirmPassword}
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
        <Link href="/auth/login" style={{ margin: "0 4px", color: "red" }}>
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
        <Link href="/auth/login" style={{ margin: "0 4px", color: "red" }}>
          ثبت نام
        </Link>
      </Text>
    </Box>
  );
};

export default ResetForm;
