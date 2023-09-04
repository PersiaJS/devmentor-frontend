import { profileStepSchema } from "@/utils/yup/becomeAMentorValidation";
import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Grid,
  GridItem,
  HStack,
  Input,
  Select,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import { useFormik } from "formik";

const ProfileStep = ({ onBack, onNext, onMentor }) => {
  const formik = useFormik({
    initialValues: {
      category: "",
      skills: "",
      bio: "",
      twitter: "",
      linkdin: "",
      website: "",
    },
    validationSchema: profileStepSchema,
    onSubmit: async (values) => {
      onMentor(values);
      onNext();
    },
  });

  const { errors, handleSubmit, getFieldProps } = formik;

  const toast = useToast();

  const handleToasts = () => {
    const options = {
      duration: 4000,
      position: "bottom-right",
      variant: "left-accent",
    };
    const { category, skills, bio } = errors;

    category && toast({ title: category, ...options });
    skills && toast({ title: skills, ...options });
    bio && toast({ title: bio, ...options });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Flex flexFlow="column" gap="8">
        <FormControl isRequired>
          <FormLabel>دسته بندی</FormLabel>
          <Select name="category" {...getFieldProps("category")} pr={3}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </Select>
          <FormHelperText>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </FormHelperText>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>مهارت ها</FormLabel>
          <Input
            type="text"
            placeholder="مهارت جدید اضافه کنید"
            name="skills"
            {...getFieldProps("skills")}
          />
          <FormHelperText>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </FormHelperText>
        </FormControl>
        <FormControl isRequired>
          <FormLabel>زندگی نامه</FormLabel>
          <Textarea resize="vertical" name="bio" {...getFieldProps("bio")} />
          <FormHelperText>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
          </FormHelperText>
        </FormControl>
        <Grid gap="8"></Grid>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(2, 1fr)" }}
          gap={6}
        >
          <GridItem>
            <FormControl>
              <FormLabel>Twitter (اختیاری)</FormLabel>
              <Input type="text" name="twitter" {...getFieldProps("twitter")} />
              <FormHelperText>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </FormHelperText>
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <FormLabel>Linkdin URL (اختیاری)</FormLabel>
              <Input type="text" name="linkdin" {...getFieldProps("linkdin")} />
              <FormHelperText>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </FormHelperText>
            </FormControl>
          </GridItem>
          <GridItem>
            <FormControl>
              <FormLabel>وب سایت شخصی (اختیاری)</FormLabel>
              <Input type="text" name="website" {...getFieldProps("website")} />
              <FormHelperText>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
              </FormHelperText>
            </FormControl>
          </GridItem>
        </Grid>
      </Flex>
      <HStack p="4" justifyContent="space-between">
        <Button colorScheme="red" type="submit" onClick={handleToasts}>
          بعدی
        </Button>
        <Button colorScheme="gray" onClick={onBack}>
          قبلی
        </Button>
      </HStack>
    </form>
  );
};

export default ProfileStep;
