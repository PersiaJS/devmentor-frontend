import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  Input,
  Spinner,
  Text,
  useToast,
  Flex,
} from "@chakra-ui/react";

import { registerSchema } from "@/utils/yup/authValidations";
import client from "@/utils/axios";

const RegisterForm = () => {
  const [isLoading, setISLoading] = useState(false);

  const router = useRouter();
  const toast = useToast();
  const options = {
    duration: 4000,
    position: "bottom-right",
    variant: "left-accent",
  };

  const handleSendVerificationRequest = async (values) => {
    try {
      const confirm = await client.post("/auth/send-verification-email", {
        email: values.email,
      });
      if (confirm.status) {
        return confirm.status;
      }
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      terms: false,
    },
    validationSchema: registerSchema,
    onSubmit: async (values, { resetForm }) => {
      setISLoading(true);
      try {
        const response = await client.post("/auth/register", values);
        if (response.status === 200) {
          //! send verification request
          const confirm = await handleSendVerificationRequest(values);
          setISLoading(false);
          resetForm();
          router.push("/auth/login");
          toast({
            title: "ثبت نام با موفقیت انجام شد. لطفا ایمیل خود را بررسی کنید",
            ...options,
            status: "success",
          });
        }
      } catch (err) {
        setISLoading(false);
        toast({
          title: "کاربری با این مشخصات ثبت شده است",
          ...options,
          status: "error",
        });
        console.log(err);
      }
    },
  });

  const { errors, values, handleChange, handleSubmit } = formik;

  const handleToasts = () => {
    errors.firstName && toast({ title: errors.firstName, ...options });
    errors.lastName && toast({ title: errors.lastName, ...options });
    errors.email && toast({ title: errors.email, ...options });
    errors.password && toast({ title: errors.password, ...options });
    errors.terms && toast({ title: errors.terms, ...options });
  };

  return (
    <Box w={"100%"} mb="12">
      <form onSubmit={handleSubmit}>
        <FormControl>
          <Input
            my={2}
            placeholder="نام"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl>
          <Input
            my={2}
            placeholder="نام خانوادگی"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
        </FormControl>
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
          name="terms"
          value={values.terms}
          onChange={handleChange}
        >
          <Flex gap={"5px"}>
            <Link href='/terms-and-conditions' style={{ color: "#d63031" }}>
              ضوابط و قوانین
            </Link>
            را می پذیرم
          </Flex>
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
          {isLoading ? <Spinner color="white" /> : "ثبت نام"}
        </Button>
      </form>
      <Box mt={4}>
        <Text
          textAlign="right"
          w="100%"
          as="span"
          mx="2"
          fontSize={{ base: "sm", md: "md" }}
        >
          حساب کاربری دارید؟
          <Link href="/auth/login" style={{ margin: "0 4px", color: "#d63031" }}>
            ورود
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default RegisterForm;
