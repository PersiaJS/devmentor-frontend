import SiteBreadcrumb from "@/components/Breadcrumb";
import Layout from "@/components/Layout/Layout";
import { ArrowRightIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";

const BookASession = () => {
  return (
    <Layout>
      <SiteBreadcrumb />

      <Box
        as="form"
        bg="bg-surface"
        boxShadow={useColorModeValue("sm", "sm-dark")}
        borderRadius="lg"
      >
        <SimpleGrid columns={{ xl: 2, lg: 2, base: 1 }} spacingX={10}>
          <Stack
            spacing="5"
            px={{
              base: "4",
              md: "6",
            }}
            py={{
              base: "5",
              md: "6",
            }}
          >
            <Text as="h3" fontSize="2xl">
              اطلاعات تماس
            </Text>
            <SimpleGrid
              columns={{ xl: 2, lg: 2, base: 1 }}
              spacing="6"
              direction={{
                base: "column",
                md: "column",
                sm: "column",
              }}
            >
              <FormControl>
                <FormLabel>نام</FormLabel>
                <Input type="text" />
              </FormControl>
              <FormControl>
                <FormLabel>نام خانوادگی</FormLabel>
                <Input type="text" />
              </FormControl>
            </SimpleGrid>
            <FormControl mb={4}>
              <FormLabel>ایمیل</FormLabel>
              <Input type="email" w="full" />
            </FormControl>
            <Divider />
            <Text as="h3" fontSize="2xl">
              اطلاعات جلسه
            </Text>
            <Text as="p" fontSize="sm">
              بعد از تأیید رزرو، شما قادر خواهید بود زمانی را انتخاب و تأیید
              کنید.
            </Text>
            <Text as="h3" fontSize="2xl">
              زمان های در دسترس
            </Text>
            <Flex gap={3} overflowX="scroll" whiteSpace="nowrap" py={10}>
              <Stack
                as="button"
                borderRadius="10px"
                border="2px solid #ded9d9"
                bg="white"
                p={3}
                _hover={{ bgColor: "gray.200" }}
              >
                <Text as="p" fontWeight="bold" fontSize="xl">
                  شنبه
                </Text>
                <Text as="p" fontSize="lg">
                  23 تیر
                </Text>
                <Text as="p" color="red.500">
                  تکمیل ظرفیت
                </Text>
              </Stack>
              <Stack
                as="button"
                borderRadius="10px"
                border="2px solid #ded9d9"
                bg="white"
                p={3}
              >
                <Text as="p" fontWeight="bold" fontSize="xl">
                  یکشنبه
                </Text>
                <Text as="p" fontSize="lg">
                  24 تیر
                </Text>
                <Text as="p" color="red.500">
                  تکمیل ظرفیت
                </Text>
              </Stack>
              <Stack
                as="button"
                borderRadius="10px"
                border="2px solid #ded9d9"
                bg="white"
                p={3}
              >
                <Text as="p" fontWeight="bold" fontSize="xl">
                  دوشنبه
                </Text>
                <Text as="p" fontSize="lg">
                  25 تیر
                </Text>
                <Text as="p" color="green.500">
                  دو جای خالی
                </Text>
              </Stack>
              <Stack
                as="button"
                borderRadius="10px"
                border="2px solid #ded9d9"
                bg="white"
                p={3}
              >
                <Text as="p" fontWeight="bold" fontSize="xl">
                  سه شنبه
                </Text>
                <Text as="p" fontSize="lg">
                  26 تیر
                </Text>
                <Text as="p" color="red.500">
                  تکمیل ظرفیت
                </Text>
              </Stack>
              <Stack
                as="button"
                borderRadius="10px"
                border="2px solid #ded9d9"
                bg="white"
                p={3}
              >
                <Text as="p" fontWeight="bold" fontSize="xl">
                  چهارشنبه
                </Text>
                <Text as="p" fontSize="lg">
                  27 تیر
                </Text>
                <Text as="p" color="green.500">
                  1 جای خالی
                </Text>
              </Stack>
              <Stack
                as="button"
                borderRadius="10px"
                border="2px solid #ded9d9"
                bg="white"
                p={3}
              >
                <Text as="p" fontWeight="bold" fontSize="xl">
                  پنجشنبه
                </Text>
                <Text as="p" fontSize="lg">
                  28 تیر
                </Text>
                <Text as="p" color="red.500">
                  تکمیل ظرفیت
                </Text>
              </Stack>
              <Stack
                as="button"
                borderRadius="10px"
                border="2px solid #ded9d9"
                bg="white"
                p={3}
              >
                <Text as="p" fontWeight="bold" fontSize="xl">
                  جمعه
                </Text>
                <Text as="p" fontSize="lg">
                  29 تیر
                </Text>
                <Text as="p" color="red.500">
                  تکمیل ظرفیت
                </Text>
              </Stack>
            </Flex>
            <Divider />
            <SimpleGrid columns={4} spacing={5} mb={10}>
              <Button> 14:30 </Button>
              <Button> 14:30 </Button>
              <Button> 14:30 </Button>
              <Button> 14:30 </Button>
              <Button> 14:30 </Button>
              <Button> 14:30 </Button>
              <Button> 14:30 </Button>
              <Button> 14:30 </Button>
              <Button> 14:30 </Button>
              <Button> 14:30 </Button>
            </SimpleGrid>
            <Box>
              <Text as="p" mb={3}>
                پیام شما به احسان گازار(اختیاری)
              </Text>
              <Textarea placeholder="پیام شما" size="lg" />
            </Box>
          </Stack>
          <Box
            alignSelf="flex-start"
            display={{ md: "flex" }}
            flexDirection={{ md: "column" }}
            mx={{ md: "12px", sm: "12px" }}
          >
            <Text as="h3" fontSize="2xl" my={8}>
              اطلاعات جلسه
            </Text>
            <Card maxW="xl" p={4}>
              <CardHeader>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar name="Segun Adebayo" src="" />

                    <Box>
                      <Heading size="sm" mb={2}>
                        احسان گازار
                      </Heading>
                      <Text>Team Lead , Software Engineer</Text>
                    </Box>
                  </Flex>
                </Flex>
              </CardHeader>
              <CardBody>
                <Stack spacing={10}>
                  <Flex justifyContent="space-between">
                    <span> قیمت هر جلسه</span>
                    <span>رایگان</span>
                  </Flex>
                  <Flex justifyContent="space-between">
                    <span> مدت زمان</span>
                    <span>30 دقیقه</span>
                  </Flex>
                  <Link href="#">کد تخفیف +</Link>
                  <Flex justifyContent="space-between">
                    <span> جمع کل</span>
                    <span>0</span>
                  </Flex>
                </Stack>
              </CardBody>

              <CardFooter
                justify="space-between"
                flexWrap="wrap"
                sx={{
                  "& > button": {
                    minW: "136px",
                  },
                }}
              >
                <Button flex="1" variant="solid" leftIcon={<ArrowRightIcon />}>
                  رزرو جلسه
                </Button>
              </CardFooter>
            </Card>
          </Box>
        </SimpleGrid>
      </Box>
    </Layout>
  );
};

export default BookASession;
{
  /* <SimpleGrid columns={2} spacing={10}>
<SimpleGrid columns={2} spacing={10} mb={5}>
  <Stack
    spacing="5"
    px={{
      base: "4",
      md: "6",
    }}
    py={{
      base: "5",
      md: "6",
    }}
  >
    <Stack
      spacing="6"
      direction={{
        base: "column",
        md: "row",
      }}
    >
      <FormControl>
        <FormLabel>نام</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>نام خانوادگی</FormLabel>
        <Input type="text" />
      </FormControl>
      <FormControl>
        <FormLabel>ایمیل</FormLabel>
        <Input type="email" w="full" />
      </FormControl>
    </Stack>
  </Stack>
</SimpleGrid>

<Box>
  <Text as="h3">اطلاعات جلسه</Text>
</Box>
<Card maxW="lg">
  <CardHeader>
    <Flex spacing="4">
      <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
        <Avatar
          name="Segun Adebayo"
          src="https://bit.ly/sage-adebayo"
        />

        <Box>
          <Heading size="sm">Segun Adebayo</Heading>
          <Text>Creator, Chakra UI</Text>
        </Box>
      </Flex>
      <IconButton
        variant="ghost"
        colorScheme="gray"
        aria-label="See menu"
        icon={<BsThreeDotsVertical />}
      />
    </Flex>
  </CardHeader>
  <CardBody>
    <Text>
      With Chakra UI, I wanted to sync the speed of development with the
      speed of design. I wanted the developer to be just as excited as
      the designer to create a screen.
    </Text>
  </CardBody>

  <CardFooter
    justify="space-between"
    flexWrap="wrap"
    sx={{
      "& > button": {
        minW: "136px",
      },
    }}
  >
    <Button flex="1" variant="solid" leftIcon={<ArrowRightIcon />}>
      رزرو جلسه
    </Button>
  </CardFooter>
</Card>
</SimpleGrid> */
}
