import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useFormik } from "formik";
import { BsUpload } from "react-icons/bs";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Input,
  Select,
  Stack,
  Text,
  useToast,
} from "@chakra-ui/react";

import { aboutYouSchema } from "@/utils/yup/becomeAMentorValidation";
import { AiFillInfoCircle } from "react-icons/ai";
import { citys } from "./data";
import Cookies from "universal-cookie";
import client from "@/utils/axios";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  jobTitle: "",
  company: "",
  location: "تهران",
};

const AboutYouStep = ({ onNext }) => {
  const [file, setFile] = useState({});
  const [url, setUrl] = useState("");
  const [user, setUser] = useState(initialValues);

  const cookies = new Cookies();
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
    setFile(acceptedFiles[0]);
    const blob = URL.createObjectURL(acceptedFiles[0]);
    setUrl(blob);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const formik = useFormik({
    initialValues: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      jobTitle: "",
      company: "",
      location: "تهران",
    },
    enableReinitialize: true,
    validationSchema: aboutYouSchema,
    onSubmit: async (values) => {
      console.log(values);
      onNext();
    },
  });

  const { errors, values, handleChange, handleSubmit } = formik;

  const toast = useToast();

  const handleToasts = () => {
    const options = {
      duration: 4000,
      position: "bottom-right",
      variant: "left-accent",
    };
    const { firstName, lastName, email, password, jobTitle, location } = errors;

    firstName && toast({ title: firstName, ...options });
    lastName && toast({ title: lastName, ...options });
    email && toast({ title: email, ...options });
    password && toast({ title: password, ...options });
    jobTitle && toast({ title: jobTitle, ...options });
    location && toast({ title: location, ...options });
  };

  useEffect(() => {
    const handleGetProfile = async () => {
      const token = cookies.get("auth");

      try {
        const response = await client("/profile/get", {
          headers: {
            Authorization: token,
          },
        });
        if (response.data.status) {
          setUser(response.data.user);
          setUrl(response.data.user.image);
        }
      } catch (err) {
        console.log(err);
      }
    };
    handleGetProfile();
  }, []);

  return (
    <>
      <Box
        position="relative"
        p="8"
        bg="blue.100"
        rounded="md"
        my="4"
        color="blue.600"
      >
        <Text>
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته،
        </Text>
        <Stack fontSize="xl" position="absolute" top="8" right="2">
          <AiFillInfoCircle />
        </Stack>
      </Box>
      <Box my="8">
        <form onSubmit={handleSubmit}>
          <HStack
            justifyContent="center"
            alignItems="center"
            w="fit-content"
            mx="auto"
            {...getRootProps()}
          >
            <Input {...getInputProps()} />
            <Avatar
              _hover={{ cursor: "pointer" }}
              src={url ? url : null}
              alt="mentor image"
              size="xl"
            />
            <Button colorScheme="red">
              <Text mx="2">بارگزاری تصویر</Text>
              <BsUpload mx="2" />
            </Button>
          </HStack>
          <Grid
            gap={6}
            my="4"
            templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          >
            <GridItem
              display="flex"
              justifyContent="center"
              w="full"
              colSpan={{ base: 2, md: 1 }}
            >
              <FormControl isRequired>
                <FormLabel>نام</FormLabel>
                <Input
                  type="text"
                  name="firstName"
                  placeContent={user.firstName}
                  value={values.firstName}
                  onChange={handleChange}
                  isDisabled
                />
              </FormControl>
            </GridItem>
            <GridItem
              display="flex"
              justifyContent="center"
              w="full"
              colSpan={{ base: 2, md: 1 }}
            >
              <FormControl isRequired>
                <FormLabel>نام خانوادگی</FormLabel>
                <Input
                  type="text"
                  name="lastName"
                  value={values.lastName}
                  onChange={handleChange}
                  isDisabled
                />
              </FormControl>
            </GridItem>
            <GridItem
              display="flex"
              justifyContent="center"
              w="full"
              colSpan={2}
            >
              <FormControl isRequired>
                <FormLabel>ایمیل</FormLabel>
                <Input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  isDisabled
                />
              </FormControl>
            </GridItem>
            <GridItem
              display="flex"
              justifyContent="center"
              w="full"
              colSpan={{ base: 2, md: 1 }}
            >
              <FormControl isRequired>
                <FormLabel>عنوان شغلی</FormLabel>
                <Input
                  type="text"
                  name="jobTitle"
                  value={values.jobTitle}
                  onChange={handleChange}
                />
              </FormControl>
            </GridItem>
            <GridItem
              display="flex"
              justifyContent="center"
              w="full"
              colSpan={{ base: 2, md: 1 }}
            >
              <FormControl>
                <FormLabel>شرکت</FormLabel>
                <Input
                  type="text"
                  name="company"
                  value={values.company}
                  onChange={handleChange}
                />
              </FormControl>
            </GridItem>
            <GridItem
              display="flex"
              justifyContent="center"
              w="full"
              colSpan={2}
            >
              <FormControl>
                <FormLabel>موقعیت مکانی</FormLabel>
                <Select
                  name="location"
                  value={values.location}
                  onChange={handleChange}
                  paddingRight={3}
                >
                  {citys.map((city, index) => (
                    <option key={index} value={city}>
                      {city}
                    </option>
                  ))}
                </Select>
              </FormControl>
            </GridItem>
          </Grid>
          <Button colorScheme="red" type="submit" onClick={handleToasts}>
            بعدی
          </Button>
        </form>
      </Box>
    </>
  );
};

export default AboutYouStep;
