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
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { BsThreeDotsVertical } from "react-icons/bs";

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
        <SimpleGrid columns="2" spacingX={10}>
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
            </Stack>
            <FormControl id="street">
              <FormControl>
                <FormLabel>ایمیل</FormLabel>
                <Input type="email" w="full" />
              </FormControl>
            </FormControl>
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
            <Flex gap={3} scrollBehavior="smooth" w="full" overflowX="scroll">
              <Stack
                as="button"
                borderRadius="10px"
                border="2px solid #ded9d9"
                bg="white"
                p={3}
              >
                <Text as="p" fontWeight="bold" fontSize="xl">
                  Sat
                </Text>
                <Text as="p" fontSize="lg">
                  Jul 15th
                </Text>
                <Text as="p">0 spots</Text>
              </Stack>
              <Stack
                as="button"
                borderRadius="10px"
                border="2px solid #ded9d9"
                bg="white"
                p={3}
              >
                <Text as="p" fontWeight="bold" fontSize="xl">
                  Sat
                </Text>
                <Text as="p" fontSize="lg">
                  Jul 15th
                </Text>
                <Text as="p">0 spots</Text>
              </Stack>
              <Stack
                as="button"
                borderRadius="10px"
                border="2px solid #ded9d9"
                bg="white"
                p={3}
              >
                <Text as="p" fontWeight="bold" fontSize="xl">
                  Sat
                </Text>
                <Text as="p" fontSize="lg">
                  Jul 15th
                </Text>
                <Text as="p">0 spots</Text>
              </Stack>
              <Stack
                as="button"
                borderRadius="10px"
                border="2px solid #ded9d9"
                bg="white"
                p={3}
              >
                <Text as="p" fontWeight="bold" fontSize="xl">
                  Sat
                </Text>
                <Text as="p" fontSize="lg">
                  Jul 15th
                </Text>
                <Text as="p">0 spots</Text>
              </Stack>
              <Stack
                as="button"
                borderRadius="10px"
                border="2px solid #ded9d9"
                bg="white"
                p={3}
              >
                <Text as="p" fontWeight="bold" fontSize="xl">
                  Sat
                </Text>
                <Text as="p" fontSize="lg">
                  Jul 15th
                </Text>
                <Text as="p">0 spots</Text>
              </Stack>
              <Stack
                as="button"
                borderRadius="10px"
                border="2px solid #ded9d9"
                bg="white"
                p={3}
              >
                <Text as="p" fontWeight="bold" fontSize="xl">
                  Sat
                </Text>
                <Text as="p" fontSize="lg">
                  Jul 15th
                </Text>
                <Text as="p">0 spots</Text>
              </Stack>
              <Stack
                as="button"
                borderRadius="10px"
                border="2px solid #ded9d9"
                bg="white"
                p={3}
              >
                <Text as="p" fontWeight="bold" fontSize="xl">
                  Sat
                </Text>
                <Text as="p" fontSize="lg">
                  Jul 15th
                </Text>
                <Text as="p">0 spots</Text>
              </Stack>
            </Flex>
          </Stack>
          <Card maxW="xl">
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
              <Text></Text>
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
