import Link from "next/link";
import React, { useState } from "react";

import {
  Box,
  Button,
  FormControl,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useFormik } from "formik";

import { forgetSchema } from "@/utils/yup/authValidations";
import client from "@/utils/axios";
import useCustomToast from "@/hooks/useCutomToast";

const ForgetForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const toast = useCustomToast();

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgetSchema,
    onSubmit: async (values) => {
      try {
        setIsLoading(true);
        const response = await client.post("/auth/forget", values);
        if (response.data.status) {
          toast("ایمیل بازیابی برای شما ارسال شد", "success");
          setIsLoading(false);
        } else {
          toast("ایمیل وارد شده  ثبت نشده است", "error");
          setIsLoading(false);
        }
      } catch (err) {
        toast("ایمیل وارد شده  ثبت نشده است", "error");
        setIsLoading(false);
      }
    },
  });

  const { errors, values, handleChange, handleSubmit } = formik;

  const handleToasts = () => {
    errors.email && toast(errors.email, "error");
  };

  return (
    <Box w={{ base: "full", md: "md" }} mb="12">
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
          isDisabled={isLoading}
        >
          {isLoading ? <Spinner color="white" /> : "بازیابی"}
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

export default ForgetForm;
