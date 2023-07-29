import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import { useFormik } from "formik";
import {
  Box,
  Button,
  FormControl,
  Input,
  Spinner,
  Text,
  useToast,
} from "@chakra-ui/react";

import { verifySchema } from "@/utils/yup/authValidations";
import handleRequest from "@/utils/handleRequest";

const VerifyForm = () => {
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
      securityHash: router.query.registerEmailToken,
    },
    validationSchema: verifySchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        setIsLoading(true);
        const response = await handleRequest().post("/auth/confirm", values);

        if (response.data.status) {
          setIsLoading(false);
          resetForm();
          toast("حساب کاربری با موفقیت فعال شد", {
            ...options,
            status: "success",
          });
          router.replace("/auth/login");
        }
      } catch (err) {
        setIsLoading(false);
        toast("حساب کاربری فعال نشد!", {
          ...options,
          status: "error",
        });
      }
    },
  });

  const { errors, values, handleChange, handleSubmit } = formik;

  const handleToasts = () => {
    const options = {
      duration: 4000,
      position: "top-right",
      variant: "left-accent",
    };

    errors.securityHash && toast({ title: errors.securityHash, ...options });
  };

  return (
    <Box w={{ base: "full", md: "md" }} mb="12">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Input
            my={2}
            placeholder="کد امنیتی"
            name="securityHash"
            value={values.securityHash}
            onChange={handleChange}
            isDisabled
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
          {isLoading ? <Spinner color="white" /> : "فعال سازی"}
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
        my={2}
        fontSize={{ base: "sm", md: "md" }}
      >
        حساب کاربری ندارید؟
        <Link href="/auth/register" style={{ margin: "0 4px", color: "red" }}>
          ثبت نام
        </Link>
      </Text>
    </Box>
  );
};

export default VerifyForm;
