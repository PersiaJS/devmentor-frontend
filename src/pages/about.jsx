import {
  Box,
  Heading,
  Text,
  Flex,
  Container,
  Link,
  Center,
  Button,
} from "@chakra-ui/react";
import CardUser from "@/components/UserCard/CardUser";
import Layout from "@/components/Layout";

const About = () => {
  return (
    <Layout>
      <Container as={"flex"} maxWidth={"100%"} justifyContent={"center"}>
        <Center>
          <Box p={4} maxW="650px">
            <Flex
              mx={"auto"}
              gap={"20px"}
              justifyContent={"center"}
              wrap={"wrap"}
            >
              <Heading as="h1" size="xl" mb={4}>
                منبع معتبر شما برای راهنمایی و مربیگری
              </Heading>
              <Text fontSize="lg">
                در عصری که برقراری ارتباط آسان‌تر از همیشه است، ما نباید به
                تنهایی همه چیز را بفهمیم. بیایید به تجربه دیگران اعتماد کنیم.
              </Text>
            </Flex>
            <Flex m="10" gap={"30px"} justifyContent={"center"} wrap={"wrap"}>
              <Button minW="150" bg="blue.700" colorScheme="blue">
                یک مربی پیدا کنید
              </Button>
              <Button minW="150" colorScheme="green">
                مربی شوید
              </Button>
            </Flex>
            <Heading mt="45" as="h2" size="lg" mb={4}>
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
        <Flex mx={"auto"} gap={"50px"} justifyContent={"center"} wrap={"wrap"}>
          <CardUser
            name="حسین کاربخش راوری"
            image="Hossein.jpg"
            bio=" هدف من در دنیای فناوری و نرم‌افزار ایجاد تغییری مثبت در جامعه است که همه بتوانند از تکنولوژی های جدید آگاه باشند و از آن ها به راحتی استفاده کنند."
            linkedin="https://www.linkedin.com/in/hossein-karbakhsh-ravari/"
            github="https://github.com/Hossein-K-R"
          />
          <CardUser />
        </Flex>
      </Container>
    </Layout>
  );
};

export default About;
