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
} from "@chakra-ui/react";

import { registerSchema } from "@/utils/yup/authValidations";
import handleRequest from "@/utils/handleRequest";

const RegisterForm = () => {
  const [isLoading, setISLoading] = useState(false);
  const router = useRouter();
  const toast = useToast();
  const options = {
    duration: 4000,
    position: "top-right",
    variant: "left-accent",
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
        const response = await handleRequest().post("/auth/register", values);
        if (response.data.status) {
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
          ظوابط و قوانین را می پذیرم
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
          <Link href="/auth/login" style={{ margin: "0 4px", color: "red" }}>
            ورود
          </Link>
        </Text>
      </Box>
    </Box>
  );
};

export default RegisterForm;