import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Select,
  Alert,
  AlertIcon,
  ScaleFade,
  useToast,
} from "@chakra-ui/react";
import { MdFacebook, MdOutlineEmail } from "react-icons/md";
import * as Yup from "yup";
import { BsGithub, BsDiscord, BsPerson } from "react-icons/bs";
import { ErrorMessage, Field, Formik } from "formik";
import Layout from "@/components/Layout/Layout";
import client from "@/utils/axios";
import { useEffect, useState } from "react";

const contactSchema = Yup.object().shape({
  firstName: Yup.string().required("پرکردن این فیلد اجباری است "),
  lastName: Yup.string().required("پرکردن این فیلد اجباری است "),
  section: Yup.string().required("Required"),
  email: Yup.string()
    .email("فرمت ایمیل صحیح نیست")
    .required("پرکردن این فیلد اجباری است "),
  website: Yup.string().url("Invalid URL").nullable(),
  message: Yup.string().required("پرکردن این فیلد اجباری است "),
});
const Contact = () => {
  const toast = useToast();
  const [isPending, setIsPending] = useState(false);

  return (
    <>
      <Layout>
        <Container maxW="full" mt={0} centerContent overflow="hidden">
          <Flex>
            <Box color="white" borderRadius="lg">
              <Box p={4}>
                <Wrap mt={{ lg: 10, md: 10 }}>
                  <WrapItem>
                    <Box>
                      <Heading as={"h1"} color={"black"}>
                        ارتباط ما
                      </Heading>

                      <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                        <VStack pl={0} spacing={3} alignItems="flex-start">
                          <Text color={"black"} fontWeight={"300"}>
                            شما در این قسمت می توانید با اعضای تیم دومنتور در
                            ارتباط باشد{" "}
                          </Text>
                        </VStack>
                      </Box>
                      <HStack
                        mt={{ lg: 10, md: 10 }}
                        spacing={5}
                        px={5}
                        alignItems="flex-start"
                      >
                        <IconButton
                          aria-label="facebook"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{
                            bg: "blue.500",
                            color: "white",
                            transitionDuration: "0.7s",
                            transitionTimingFunction: "ease-in-out",
                          }}
                          icon={<MdFacebook size="28px" />}
                        />
                        <IconButton
                          aria-label="github"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{
                            bg: "blue.500",
                            color: "white",
                            transitionDuration: "0.7s",
                            transitionTimingFunction: "ease-in-out",
                          }}
                          icon={<BsGithub size="28px" />}
                        />
                        <IconButton
                          aria-label="discord"
                          variant="ghost"
                          size="lg"
                          isRound={true}
                          _hover={{
                            bg: "blue.500",
                            color: "white",

                            transitionDuration: "0.7s",
                            transitionTimingFunction: "ease-in-out",
                          }}
                          icon={<BsDiscord size="28px" />}
                        />
                      </HStack>
                    </Box>
                  </WrapItem>
                  <WrapItem>
                    <Box bg="white" borderRadius="lg">
                      <Box m={8} color="#0B0E3F">
                        <Formik
                          initialValues={{
                            firstName: "",
                            lastName: "",
                            section: "",
                            email: "",
                            website: "",
                            message: "",
                          }}
                          validationSchema={contactSchema}
                          onSubmit={async (values, { resetForm }) => {
                            try {
                              setIsPending(true);
                              const response = await client.post(
                                "/contact/send",
                                values
                              );
                              if (response.data.status) {
                                setIsPending(false);
                                toast({
                                  title: "پیام شما با موفیت ارسال شد",
                                  position: "top",
                                  status: "success",
                                  duration: 9000,
                                  isClosable: true,
                                });
                                resetForm();
                              }
                            } catch (error) {
                              setIsPending(false);
                              toast({
                                title: "خطایی رخ داده",

                                status: "error",
                                duration: 9000,
                                isClosable: true,
                              });
                            }
                          }}
                        >
                          {({
                            handleSubmit,
                            errors,
                            touched,
                            setFieldValue,
                          }) => (
                            <form onSubmit={handleSubmit}>
                              <VStack spacing={5}>
                                <Flex
                                  gap={2}
                                  direction={{ base: "column", md: "row" }}
                                >
                                  <FormControl
                                    id="name"
                                    isInvalid={
                                      errors.firstName && touched.firstName
                                    }
                                  >
                                    <FormLabel>نام</FormLabel>
                                    <InputGroup borderColor="#E0E1E7">
                                      <InputLeftElement pointerEvents="none">
                                        <BsPerson color="gray.800" />
                                      </InputLeftElement>
                                      <Field
                                        as={Input}
                                        type="text"
                                        size="md"
                                        borderRadius={0}
                                        name="firstName"
                                        placeholder={"نام"}
                                      />
                                    </InputGroup>
                                    <ErrorMessage
                                      fontSize={"sm"}
                                      name="firstName"
                                      component={Text}
                                      color="red"
                                    />
                                  </FormControl>

                                  <FormControl
                                    id="lastname"
                                    isInvalid={
                                      errors.lastName && touched.lastName
                                    }
                                  >
                                    <FormLabel> نام خانوادگی</FormLabel>
                                    <InputGroup borderColor="#E0E1E7">
                                      <InputLeftElement pointerEvents="none">
                                        <BsPerson color="gray.800" />
                                      </InputLeftElement>
                                      <Field
                                        placeholder={"نام خانوادگی"}
                                        as={Input}
                                        type="text"
                                        size="md"
                                        borderRadius={0}
                                        name="lastName"
                                      />
                                    </InputGroup>
                                    <ErrorMessage
                                      fontSize={"sm"}
                                      name="lastName"
                                      component={Text}
                                      color="red"
                                    />
                                  </FormControl>
                                </Flex>
                                <FormControl>
                                  <FormLabel
                                    htmlFor="sections"
                                    fontSize="sm"
                                    color="gray.700"
                                    _dark={{
                                      color: "gray.50",
                                    }}
                                  >
                                    بخش مربوطه
                                  </FormLabel>
                                  <Select
                                    id="sections"
                                    name="section"
                                    autoComplete="section"
                                    placeholder="انتخاب کنید"
                                    shadow="sm"
                                    w="full"
                                    rounded="md"
                                    textAlign={"center"}
                                    onChange={(e) =>
                                      setFieldValue("section", e.target.value)
                                    }
                                  >
                                    <option value={"js"}>جاوااسکریت</option>
                                    <option value={"react"}>ریکت</option>
                                    <option value={"node"}>نود جی اس</option>
                                  </Select>
                                </FormControl>

                                <Flex
                                  gap={2}
                                  direction={{ base: "column", md: "row" }}
                                >
                                  <FormControl
                                    id="email"
                                    isInvalid={errors.email && touched.email}
                                  >
                                    <FormLabel>ایمیل</FormLabel>
                                    <InputGroup borderColor="#E0E1E7">
                                      <InputLeftElement pointerEvents="none">
                                        <MdOutlineEmail color="gray.800" />
                                      </InputLeftElement>

                                      <Field
                                        placeholder={"ایمیل خودرا وارد کنید "}
                                        as={Input}
                                        size="md"
                                        borderRadius={0}
                                        name="email"
                                      />
                                    </InputGroup>
                                    <ErrorMessage
                                      name="email"
                                      color="red"
                                      component={Text}
                                      fontSize={"sm"}
                                    />
                                  </FormControl>
                                  <FormControl
                                    id="website"
                                    isInvalid={
                                      errors.website && touched.website
                                    }
                                  >
                                    <FormLabel>وب سایت</FormLabel>
                                    <InputGroup borderColor="#E0E1E7">
                                      <InputLeftElement pointerEvents="none">
                                        <MdOutlineEmail color="gray.800" />
                                      </InputLeftElement>
                                      <Field
                                        as={Input}
                                        size="md"
                                        borderRadius={0}
                                        name="website"
                                      />
                                    </InputGroup>
                                    <ErrorMessage
                                      name="website"
                                      fontSize={"sm"}
                                    />
                                  </FormControl>
                                </Flex>

                                <FormControl
                                  id="name"
                                  isInvalid={errors.message && touched.message}
                                >
                                  <FormLabel>توضیحات </FormLabel>
                                  <Field
                                    name="message"
                                    as={Textarea}
                                    borderRadius={0}
                                    borderColor="gray.300"
                                    _hover={{
                                      borderRadius: "gray.300",
                                    }}
                                    placeholder="پیغام خود را وارد کنید "
                                  />
                                  <ErrorMessage
                                    component={Text}
                                    color="red"
                                    name="message"
                                    fontSize={"sm"}
                                  />
                                </FormControl>
                                <FormControl id="name" float="right">
                                  <Button
                                    isLoading={isPending}
                                    type="submit"
                                    colorScheme="red"
                                    variant="solid"
                                    bg="red"
                                    color="white"
                                    _hover={{}}
                                  >
                                    ارسال
                                  </Button>
                                </FormControl>
                              </VStack>
                            </form>
                          )}
                        </Formik>
                      </Box>
                    </Box>
                  </WrapItem>
                </Wrap>
              </Box>
            </Box>
          </Flex>
        </Container>
      </Layout>
    </>
  );
};

export default Contact;
