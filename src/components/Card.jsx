import {
  Card as ChakraCard,
  CardBody,
  Text,
  Container,
  Flex,
  CardFooter,
  CardHeader,
  Image,
  Box,
} from "@chakra-ui/react";

const Card = ({ describtion }) => {
  return (
    <ChakraCard m={4} w="80" bgColor="#89CFF0">
      <CardHeader>
        <Text fontSize={14} mb={3}>
          فقط 2 عدد باقی مانده ...
        </Text>
        <Box
          position="relative"
          color="white"
          _after={{
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            borderRadius: 8,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0) 39%, rgba(43,131,235,0.8911939775910365) 100%)",
          }}
        >
          <Image
            borderRadius={10}
            src="/images/software-engineer.avif"
            alt="Software Engineer"
          />
          <Box position="absolute" bottom={2.5} right={3.5} zIndex={10}>
            <Text fontSize={26} fontWeight="bold">
              احمد احمدی
            </Text>
            <Box display="flex" alignItems={"center"}>
              <Text fontSize={15} fontWeight="light">
                برنامه نویس ارشد وب در <b>ایمالز</b>
              </Text>
              <Image w="5" alt="🇮🇷" src="/images/Iran.png" mx={2} />
            </Box>
          </Box>
        </Box>
      </CardHeader>
      <CardBody>
        <Text
          fontSize={15}
          fontWeight="normal"
          textAlign="justify"
          overflow="hidden"
          noOfLines={7}
        >
          {`لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای `}
        </Text>
      </CardBody>
      <CardFooter>فوتر</CardFooter>
    </ChakraCard>
  );
};

export default Card;
