import Link from "next/link";
import ConfettiExplosion from "react-confetti-explosion";
import {
  Button,
  Container,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ListItem, UnorderedList } from "@chakra-ui/react";
import Logo from "../Logo/logo";

const ApplyingMentor = () => {
  return (
    <Container
      maxW={1300}
      my="20"
      rounded="md"
      border="1px solid #e9e9e9"
      py="8"
      boxShadow="md"
    >
      <Flex justifyContent="center">
        <ConfettiExplosion particleCount={500} />
      </Flex>
      <Logo />
      <Stack w="full" mt="10">
        <Heading as="h1">با تشکر از شما</Heading>
        <Text my="4">
          ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
        </Text>
        <Heading as="h2" fontSize="lg">
          قدم بعدی؟
        </Heading>
        <Text>
          ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
        </Text>
        <UnorderedList my="4">
          <ListItem color="blue">
            <Link href="#">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </Link>
          </ListItem>
          <ListItem color="blue">
            <Link href="#">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </Link>
          </ListItem>
          <ListItem color="blue">
            <Link href="#">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </Link>
          </ListItem>
          <ListItem color="blue">
            <Link href="#">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </Link>
          </ListItem>
        </UnorderedList>
        <Button colorScheme="red" w={{ base: "full", md: "xs" }}>
          <Link href="/">برو به صفحه اصلی</Link>
        </Button>
      </Stack>
    </Container>
  );
};

export default ApplyingMentor;
