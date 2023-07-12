import { experienceStep } from "@/utils/yup/becomeAMentorValidation";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import React from "react";
import { AiFillInfoCircle } from "react-icons/ai";

const ExperienceStep = ({ onNext, onBack }) => {
  const formik = useFormik({
    initialValues: {
      introVideo: "",
      featuredArticle: "",
      goal: "",
      echivment: "",
    },
    validationSchema: experienceStep,
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
      position: "top-right",
      variant: "left-accent",
    };
    const { echivment, goal } = errors;

    echivment && toast({ title: echivment, ...options });
    goal && toast({ title: goal, ...options });
  };

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
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد. لورم
          ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
          طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </Text>
        <Stack fontSize="xl" position="absolute" top="8" right="2">
          <AiFillInfoCircle />
        </Stack>
      </Box>
      <form onSubmit={handleSubmit}>
        <Flex gap="4" flexFlow={{ base: "colum", md: "row" }} my="8">
          <FormControl>
            <FormLabel>ویدیوی مقدماتی</FormLabel>
            <Input
              type="text"
              name="introVideo"
              value={values.introVideo}
              onChange={handleChange}
              placeholder="http://your-intro-video-URL"
            />
            <FormHelperText>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </FormHelperText>
          </FormControl>
          <FormControl>
            <FormLabel>مقالات ویژه</FormLabel>
            <Input
              type="text"
              name="featuredArticle"
              value={values.featuredArticle}
              onChange={handleChange}
              placeholder="http://your-featured-article-URL"
            />
            <FormHelperText>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
            </FormHelperText>
          </FormControl>
        </Flex>
        <FormControl isRequired my="4">
          <FormLabel>
            چرا میخواهید مربی شوید؟(برای عموم قابل مشاهده نیست)
          </FormLabel>
          <Textarea
            resize="vertical"
            name="goal"
            value={values.goal}
            onChange={handleChange}
          />
        </FormControl>
        <FormControl isRequired my="4">
          <FormLabel>
            به نظر خودتان بزرگ ترین دستاورد شما تاکنون چه بوده است؟(برای عموم
            قابل مشاهده نیست)
          </FormLabel>
          <Textarea
            resize="vertical"
            name="echivment"
            value={values.echivment}
            onChange={handleChange}
          />
        </FormControl>
        <HStack p="4" justifyContent="space-between">
          <Button colorScheme="red" type="submit" onClick={handleToasts}>
            بعدی
          </Button>
          <Button colorScheme="gray" onClick={onBack}>
            قبلی
          </Button>
        </HStack>
      </form>
    </>
  );
};

export default ExperienceStep;
