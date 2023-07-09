import {
  Box,
  Heading,
  Text,
  Flex,
  Container,
  Link,
  Center,
} from "@chakra-ui/react";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <Container as={"flex"} maxWidth={"100%"} justifyContent={"center"}>
        <Center>
          <Box p={4} maxW="650px">
            <Heading as="h1" size="xl" mb={4}>
              درباره DevMentor
            </Heading>
            <Text fontSize="lg">
              ما در DevMentor به ارائه یک بستر آموزشی شگفت‌انگیز و جامع برای
              توسعه‌دهندگان مبتدی و حرفه‌ای متمرکز شده‌ایم. هدف ما ایجاد یک
              جامعه فعال و پویا از توسعه‌دهندگان است که از طریق مشارکت، همکاری و
              یادگیری مستمر با یکدیگر رشد می‌کنند.
            </Text>
            <Text fontSize="lg" mt={4}>
              با استفاده از DevMentor، شما قادر خواهید بود به طور مؤثری
              مهارت‌های خود را توسعه دهید، از جمله برنامه‌نویسی وب، تکنولوژی‌های
              روز و بهترین شیوه‌های صنعتی. ما ابزارها و منابعی را فراهم می‌کنیم
              که به شما کمک می‌کنند مسیر حرفه‌ایتان را از سطح مبتدی تا حرفه‌ای
              طی کنید.
            </Text>
            <Text fontSize="lg" mt={4}>
              همچنین، ما به ایجاد فرصت‌های شبکه‌سازی و ارتباط با توسعه‌دهندگان
              دیگر بسیار اهمیت می‌دهیم. شما می‌توانید در دوره‌های آموزشی ما شرکت
              کنید، به جلسات گفتگوی آنلاین دسترسی پیدا کنید و از طریق انجمن‌های
              گفتگوی ما با دیگر اعضای جامعه ارتباط برقرار کنید.
            </Text>
            <Text fontSize="lg" mt={4}>
              ما به دنبال ارتقای همیشگی شما هستیم و معتقدیم هر روزه می‌توانید در
              مسیری بهتر و بهتر برای خودتان باشید. پس بیایید با هم به سوی
              یادگیری مستمر و رشد شخصی و حرفه‌ای برویم.
            </Text>
            <Text fontSize="lg" mt={4}>
              برای ارتباط با ما روی این{" "}
              <Link
                href="contact"
                color="blue.600"
                _hover={{ textColor: "red" }}
              >
                لینک
              </Link>{" "}
              کلیک کن.{" "}
            </Text>
            <Flex
              mx={"auto"}
              gap={"15px"}
              justifyContent={"center"}
              wrap={"wrap"}
              maxWidth={"rem"}
              mt={5}
            ></Flex>
          </Box>
        </Center>
      </Container>
    </Layout>
  );
};

export default About;
