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
import { AiFillInfoCircle } from "react-icons/ai";
import client from "@/utils/axios";

const ExperienceStep = ({ onNext, onBack, mentor }) => {
  const formik = useFormik({
    initialValues: {
      intro: "",
      article: "",
      why: "",
      achievement: "",
    },
    validationSchema: experienceStep,
    onSubmit: async (values) => {
      const data = Object.assign(mentor[0], mentor[1], values);
      console.log(data);
      try {
        const response = await client.post("/mentor/create", data);
        if (response.status === 200) {
          onNext();
        }
      } catch (err) {
        if (err.response.status === 400) {
          toast({
            title: "منتوری با این مشخصات در سیستم ثبت شده است",
            ...options,
            status: "error",
          });
        }

        if (err.response.status === 500) {
          toast({
            title: "مشکلی در سیستم به وجود آمده است ، لطفا بعدا امتحان کنید",
            ...options,
            status: "error",
          });
        }
      }
    },
  });

  const { errors, handleSubmit, getFieldProps } = formik;

  const toast = useToast();

  const options = {
    duration: 4000,
    position: "bottom-right",
    variant: "left-accent",
  };

  const handleToasts = () => {
    const { achievement, why, intro } = errors;

    intro && toast({ title: intro, ...options });
    achievement && toast({ title: achievement, ...options });
    why && toast({ title: why, ...options });
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
          متنوع با هدف بهبود ابزارهای کاربردی می باشد.
        </Text>
        <Stack fontSize="xl" position="absolute" top="8" right="2">
          <AiFillInfoCircle />
        </Stack>
      </Box>
      <form onSubmit={handleSubmit}>
        <Flex gap="4" flexFlow={{ base: "colum", md: "row" }} my="8">
          <FormControl isRequired>
            <FormLabel>ویدیوی مقدماتی</FormLabel>
            <Input
              type="text"
              name="intro"
              {...getFieldProps("intro")}
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
              name="article"
              {...getFieldProps("article")}
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
          <Textarea resize="vertical" name="why" {...getFieldProps("why")} />
        </FormControl>
        <FormControl isRequired my="4">
          <FormLabel>
            به نظر خودتان بزرگ ترین دستاورد شما تاکنون چه بوده است؟(برای عموم
            قابل مشاهده نیست)
          </FormLabel>
          <Textarea
            resize="vertical"
            name="achievement"
            {...getFieldProps("achievement")}
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
