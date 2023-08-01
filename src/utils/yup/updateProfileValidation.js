import * as Yup from "yup";

const nameRegex = /^[^\u0600-\u06FF\u0750-\u077F\uFB50-\uFDFF\uFE70-\uFEFF]+$/;

const UpdateProfileSchema = Yup.object({
  firstName: Yup.string(),
  lastName: Yup.string(),
  username: Yup.string().matches(
    nameRegex,
    "نام کاربری باید شامل حروف انگلیسی باشد"
  ),
  description: Yup.string(),
  website: Yup.string(),
  facebook: Yup.string(),
  twitter: Yup.string(),
  linkedin: Yup.string(),
  telegram: Yup.string(),
});

export default UpdateProfileSchema;
