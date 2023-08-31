import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Box, Button, FormControl, Input, Text } from "@chakra-ui/react";
import { useFormik } from "formik";

import { resetSchema } from "@/utils/yup/authValidations";
import client from "@/utils/axios";
import useCustomToast from "@/hooks/useCutomToast";

const ResetForm = () => {
  const router = useRouter();
  const toast = useCustomToast();

  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: resetSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        const response = await client().post("/auth/reset", {
          password: values.password,
          securityHash: router.query.forgotEmailToken,
        });
        if (response.data.status) {
          toast("رمز عبور با موفقیت به روز رسانی شد", "success");
          router.replace("/auth/login");
          resetForm();
        } else {
          toast("رمز عبور  به روز رسانی نشد", "error");
        }
      } catch (err) {
        toast("رمز عبور  به روز رسانی نشد", "error");
      }
    },
  });

  const { errors, values, handleChange, handleSubmit } = formik;

  const handleToasts = () => {
    errors.password && toast(errors.password, "error");
    errors.confirmPassword && toast(errors.confirmPassword, "error");
  };

  return (
    <Box w={{ base: "full", md: "md" }} mb="12">
      <form onSubmit={handleSubmit}>
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
        <FormControl>
          <Input
            my={2}
            placeholder="تایید کلمه عبور"
            name="confirmPassword"
            type="password"
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
