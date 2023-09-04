import LayoutWfull from "@/components/LayoutWfull/LayoutWfull";
import ReadMore from "@/components/ReadMore";
import ReviewCard from "@/components/ReviewCard";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import {
  Heading,
  Avatar,
  Box,
  Flex,
  Text,
  Stack,
  Button,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Icon,
  IconButton,
  Container,
  Tag,
  TagLeftIcon,
  List,
  ListItem,
  ListIcon,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Divider,
} from "@chakra-ui/react";
import { BiMessageRoundedDots } from "react-icons/bi";
import {
  FaClock,
  FaComment,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaLocationArrow,
  FaSitemap,
  FaStar,
} from "react-icons/fa";

export default function singleMentor() {
  return (
    <LayoutWfull>
      <Box bgColor={"red.500"} h={"200px"} m={0} p={0}>
        <Container maxW="container.xl">
          <Box p={10}>
            <Breadcrumb
              spacing="8px"
              separator={<ChevronLeftIcon color="gray.500" />}
              color={"white"}
            >
              <BreadcrumbItem>
                <BreadcrumbLink href="#">
                  <Icon as={FaHome} />
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="#">منتورها</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">سیناکوشا</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>
        </Container>
      </Box>
      <Container maxW="container.xl">
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justify={"start"}
          mt={"-130px"}
          p={10}
        >
          <Stack
            as={Flex}
            alignItems={"center"}
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={"center"}
          >
            <Avatar
              size={"2xl"}
              src={
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
              }
              alt={"Author"}
              css={{
                border: "2px solid white",
              }}
            />
            <Tag py={2} mt={-10}>
              <TagLeftIcon boxSize="12px" as={FaStar} />
              منتور برتر
            </Tag>
            <Box
              as={Flex}
              gap={2}
              alignItems={"center"}
              mt={{ base: "0", md: "-10" }}
            >
              <IconButton
                variant="outline"
                color={{ base: "red.500", md: "white" }}
                aria-label="Call Sage"
                colorScheme="red"
                fontSize="20px"
                icon={<FaLinkedin />}
                _hover={{
                  bg: "red.600",
                  color: "white",
                }}
              />
              <IconButton
                color={{ base: "red.500", md: "white" }}
                variant="outline"
                colorScheme="red"
                aria-label="Call Sage"
                fontSize="20px"
                icon={<FaGithub />}
                _hover={{
                  bg: "red.600",
                  color: "white",
                }}
              />
              <IconButton
                color={{ base: "red.500", md: "white" }}
                variant="outline"
                colorScheme="red"
                aria-label="Call Sage"
                fontSize="20px"
                icon={<FaSitemap />}
                _hover={{
                  bg: "red.600",
                  color: "white",
                }}
              />
            </Box>
          </Stack>
        </Flex>

        <Flex flexDirection={{ base: "column", md: "row" }}>
          <Stack spacing={0} align={"start"} mb={5} flex={1}>
            <Heading as={"h2"} fontSize={"2xl"}>
              سینا کوشا
            </Heading>
            <Text color={"red.600"}>برنامه نویس فول استک</Text>
            <Text textAlign={"justify"}>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
              ستون و سطرآنچنان که لازم است{" "}
            </Text>
            <List spacing={3} backgroundColor={"white"} mt={5}>
              <ListItem lineHeight={1} fontWeight={500}>
                <ListIcon as={FaLocationArrow} color={"red.500"} />
                ایران ، تهران
              </ListItem>
              <ListItem lineHeight={1} fontWeight={500}>
                <ListIcon as={FaStar} color={"red.500"} />5 (14 نظر)
              </ListItem>
              <ListItem fontWeight={500}>
                <ListIcon as={FaClock} color={"red.500"} />5 روز در هفته
              </ListItem>
              {/* You can also use custom icons from react-icons */}
            </List>
          </Stack>

          <Stack direction={"row"} justify={"center"} flex={2} w={"100%"}>
            <Stack spacing={0} align={"start"}>
              <Heading as={"h2"} fontSize={"2xl"}>
                تخصص ها
              </Heading>
              <Box as={Flex} gap={2} spacing={2} mt={10}>
                <Tag>Html</Tag>
                <Tag>ریکت</Tag>
                <Tag>ریداکس</Tag>
                <Tag>جاوا اسکریپت</Tag>
              </Box>
            </Stack>
          </Stack>

          <Tabs
            flex={2}
            boxShadow={"2xl"}
            rounded={"md"}
            p={5}
            mt={{ base: "0", md: "-130" }}
            backgroundColor={"white"}
          >
            <TabList borderBottomColor={"red"}>
              <Tab fontWeight={600} _selected={{ color: "red" }}>
                پلن برنزی
              </Tab>
              <Tab fontWeight={600} _selected={{ color: "red" }}>
                پلن نقره ایی
              </Tab>
              <Tab fontWeight={600} _selected={{ color: "red" }}>
                پلن طلایی
              </Tab>
            </TabList>

            <TabPanels>
              <TabPanel P={5}>
                <Heading as={"h3"} fontSize={"xl"}>
                  پنل برنزی 350 هزارتومان/ ماهانه
                </Heading>
                <Text textAlign={"justify"} mt={5}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است{" "}
                </Text>
                <List spacing={3} backgroundColor={"white"} mt={5}>
                  <ListItem lineHeight={1} fontWeight={500}>
                    <ListIcon as={FaComment} color={"red.500"} />
                    ارسال تیکت بصورت نامحدود
                  </ListItem>
                  <ListItem lineHeight={1} fontWeight={500}>
                    <ListIcon as={FaClock} color={"red.500"} />
                    ارسال پاسخ حداکثر در دو روز
                  </ListItem>
                </List>
                <Button mt={8} colorScheme={"red"} width={"100%"}>
                  ثبت سفارش
                </Button>
              </TabPanel>
              <TabPanel>
                <Heading as={"h3"} fontSize={"xl"}>
                  پنل نقره ایی 600 هزارتومان/ ماهانه
                </Heading>
                <Text textAlign={"justify"} mt={5}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است{" "}
                </Text>
                <List spacing={3} backgroundColor={"white"} mt={5}>
                  <ListItem lineHeight={1} fontWeight={500}>
                    <ListIcon as={FaComment} color={"red.500"} />
                    ارسال تیکت بصورت نامحدود
                  </ListItem>
                  <ListItem lineHeight={1} fontWeight={500}>
                    <ListIcon as={FaClock} color={"red.500"} />
                    ارسال پاسخ حداکثر در دو روز
                  </ListItem>
                </List>
                <Button mt={8} colorScheme={"red"} width={"100%"}>
                  ثبت سفارش
                </Button>
              </TabPanel>
              <TabPanel>
                <Heading as={"h3"} fontSize={"xl"}>
                  پنل طلایی 1 میلیون تومان/ ماهانه
                </Heading>
                <Text textAlign={"justify"} mt={5}>
                  لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                  استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و
                  مجله در ستون و سطرآنچنان که لازم است{" "}
                </Text>
                <List spacing={3} backgroundColor={"white"} mt={5}>
                  <ListItem lineHeight={1} fontWeight={500}>
                    <ListIcon as={FaComment} color={"red.500"} />
                    ارسال تیکت بصورت نامحدود
                  </ListItem>
                  <ListItem lineHeight={1} fontWeight={500}>
                    <ListIcon as={FaClock} color={"red.500"} />
                    ارسال پاسخ حداکثر در دو روز
                  </ListItem>
                  <Button mt={8} colorScheme={"red"} width={"100%"}>
                    ثبت سفارش
                  </Button>
                </List>
              </TabPanel>
            </TabPanels>
          </Tabs>
        </Flex>
        <Flex flexDir="column" marginTop="3rem">
          <Divider />
          <Heading as="h1" mt={8}>
            درباره
          </Heading>
          <Box mt={4}>
            <ReadMore
              maxLength={200}
              text={`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را `}
            />
          </Box>

          <Flex
            alignItems="center"
            borderRadius="16px"
            my="1.5rem"
            px="4rem"
            py="1.25rem"
            bgColor="teal.50"
          >
            <BiMessageRoundedDots fontSize="30px" />
            <Flex
              justifyContent={{ base: "start", md: "space-between" }}
              flexDirection={{ base: "column", md: "row" }}
              width="full"
              ms="1rem"
              alignItems={{ base: "start", md: "center" }}
            >
              <Flex flexDir="column">
                <Heading as="h6" size="md">
                  آماده پاسخ به پرسش‌ها
                </Heading>
                <Text my="8px">
                  شما می‌توانید به سینا پیام بفرستید تا قبل از رزرو خدماتشان
                  سوالات خود را بپرسید.
                </Text>
              </Flex>
              <Button width="fit-content">در تماس باشید</Button>
            </Flex>
          </Flex>
        </Flex>
        <Flex flexDir="column" marginTop="3rem">
          <Divider />
          <Heading as="h2" mt={8}>
            نظرات راهنمایی گیرندگان
          </Heading>

          {/* review lists */}
          <Flex flexDirection="column">
            <ReviewCard
              name="محمد"
              date={1689631202}
              rate={3}
              text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
            />
            <ReviewCard
              name="سینا"
              date={1689631202}
              rate={5}
              image="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
              text="لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد."
            />
          </Flex>
        </Flex>
      </Container>
    </LayoutWfull>
  );
}
