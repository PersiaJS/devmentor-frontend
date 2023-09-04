import { useEffect, useState } from "react";
import Cookies from "universal-cookie";

import {
  Button,
  Center,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useFormik } from "formik";

import UpdateProfileSchema from "@/utils/yup/updateProfileValidation";
import client from "@/utils/axios";
import useCustomToast from "@/hooks/useCutomToast";
import { InputFile } from "../InputFile";

const initialValues = {
  firstName: "",
  lastName: "",
  username: "",
  description: "",
  website: "",
  facebook: "",
  twitter: "",
  linkedin: "",
  telegram: "",
  newsletter: true,
};

const UpdateProfileForm = () => {
  const [user, setUser] = useState(initialValues);
  const [imgSrc, setImgSrc] = useState("");
  const cookies = new Cookies();
  const token = cookies.get("auth");

  const toast = useCustomToast();

  const formik = useFormik({
    initialValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      username: user.username,
      description: user.description,
      website: user.website,
      facebook: user.facebook,
      twitter: user.twitter,
      linkedin: user.linkedin,
      telegram: user.telegram,
      newsletter: user.newsletter,
      image: user.image,
    },
    enableReinitialize: true,
    validationSchema: UpdateProfileSchema,
    onSubmit: async (values) => {
      try {
        const response = await client.put(
          "/profile/update",
          {
            ...values,
            image: imgSrc,
          },
          {
            headers: {
              Authorization: token,
            },
          }
        );
        if (response.data.status) {
          toast("مشخصات با موفقیت به روز رسانی شد", "success");
        } else {
          toast("مشکلی به وجود آمده است", "error");
        }
      } catch (err) {
        return err;
      }
    },
  });

  const handleGetProfileRequest = async () => {
    try {
      const response = await client.get("/profile/get", {
        headers: {
          Authorization: token,
        },
      });
      if (response.data.status) {
        const { data } = response;
        setUser(data.user);
      }
    } catch (err) {
      console.log(err);
      return err;
    }
  };

  useEffect(() => {
    handleGetProfileRequest();
  }, []);

  const handleChange = function (url) {
    setImgSrc(url);
  };

  const handleRequest = () => {
    formik.errors.username && toast(formik.errors.username, "error");
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <InputFile handleChange={handleChange} imgSrc={imgSrc} />
      <Flex gap={5}>
        <FormControl>
          <FormLabel>نام</FormLabel>
          <Input
            placeholder={
              user.firstName ? user.firstName : "نام خود را وارد کنید"
            }
            type="text"
            name="firstName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
          />
        </FormControl>
        <FormControl>
          <FormLabel>نام خانوادگی</FormLabel>
          <Input
            placeholder={
              user.lastName ? user.lastName : "نام خانوادگی خود را وارد کنید"
            }
            type="text"
            name="lastName"
            value={formik.values.lastName}
            onChange={formik.handleChange}
          />
        </FormControl>
      </Flex>
      <FormControl mt="4">
        <FormLabel>نام کاربری</FormLabel>
        <Input
          placeholder={user.username ? user.username : "مثلا : Ali-Mohamadi"}
          type="text"
          name="username"
          value={formik.values.username}
          onChange={formik.handleChange}
        />
      </FormControl>
      <FormControl mt="4">
        <FormLabel>وب سایت</FormLabel>
        <Input
          placeholder={
            user.website ? user.website : "https://www.your-site.com"
          }
          name="website"
          type="text"
          value={formik.values.website}
          onChange={formik.handleChange}
        />
      </FormControl>
      <Flex gap="4" flexDir={{ base: "column", md: "row" }}>
        <FormControl mt="4">
          <FormLabel>facebook</FormLabel>
          <Input
            placeholder={
              user.facebook
                ? user.facebook
                : "https://www.facebook.com/your-profile"
            }
            name="facebook"
            type="text"
            value={formik.values.facebook}
            onChange={formik.handleChange}
          />
        </FormControl>
        <FormControl mt="4">
          <FormLabel>twitter</FormLabel>
          <Input
            placeholder={
              user.twitter
                ? user.twitter
                : "https://www.twitter.com/your-profile"
            }
            name="twitter"
            type="text"
            value={formik.values.twitter}
            onChange={formik.handleChange}
          />
        </FormControl>
      </Flex>
      <Flex gap="4" flexDir={{ base: "column", md: "row" }}>
        <FormControl mt="4">
          <FormLabel>linkedin</FormLabel>
          <Input
            placeholder={
              user.linkedin
                ? user.linkedin
                : "https://www.linkedin.com/your-profile"
            }
            name="linkedin"
            type="text"
            value={formik.values.linkedin}
            onChange={formik.handleChange}
          />
        </FormControl>
        <FormControl mt="4">
          <FormLabel>telegram</FormLabel>
          <Input
            placeholder={
              user.telegram ? user.telegram : "https://telegram.me/your-profile"
            }
            name="telegram"
            type="text"
            value={formik.values.telegram}
            onChange={formik.handleChange}
          />
        </FormControl>
      </Flex>
      <FormControl mt="4">
        <FormLabel>بیوگرافی</FormLabel>
        <Textarea
          placeholder={
            user.description
              ? user.description
              : "توضیحاتی درباه خودتان و تجربیاتی که داشته اید بنویسید"
          }
          name="description"
          teyp="text"
          value={formik.values.description}
          onChange={formik.handleChange}
        />
      </FormControl>
      <FormControl mt="4">
        <Flex gap="4" alignItems="center">
          <Checkbox
            defaultChecked={user.newsletter}
            name="newsletter"
            colorScheme="red"
            value={formik.values.newsletter}
            onChange={formik.handleChange}
          />
          <FormLabel>خبرنامه</FormLabel>
        </Flex>
      </FormControl>
      <Center>
        <Button
          colorScheme="red"
          my="8"
          w="md"
          mx="auto"
          type="submit"
          onClick={handleRequest}
        >
          ثبت تغییرات
        </Button>
      </Center>
    </form>
  );
};

export default UpdateProfileForm;
