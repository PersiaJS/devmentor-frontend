import React, { useEffect, useState } from "react";
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
} from "@chakra-ui/react";

import client from "@/utils/axios";
import useCustomToast from "@/hooks/useCutomToast";

const VerifyForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [token, setToken] = useState("");

  const router = useRouter();
  const toast = useCustomToast();

  useEffect(() => {
    setToken(router.query.registerEmailToken);
  }, [router.query]);

  const formik = useFormik({
    initialValues: {
      securityHash: token,
    },
    onSubmit: async (_, { resetForm }) => {
      try {
        setIsLoading(true);
        const response = await client.post("/auth/confirm", {
          securityHash: token,
        });

        if (response.data.status) {
          setIsLoading(false);
          resetForm();
          toast("حساب کاربری با موفقیت فعال شد", "success");
          router.replace("/auth/login");
        }
      } catch (err) {
        setIsLoading(false);
        toast("حساب کاربری فعال نشد!", "error");
        console.log(err);
      }
    },
  });

  const { errors, values, handleChange, handleSubmit } = formik;

  const handleToasts = () => {
    errors.securityHash && toast(errors.securityHash, "error");
  };

  return (
    <Box w={{ base: "full", md: "md" }} mb="12">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Input
            my={2}
            placeholder="کد امنیتی"
            name="securityHash"
            value={token}
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
