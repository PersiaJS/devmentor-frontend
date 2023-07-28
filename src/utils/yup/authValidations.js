import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  firstName: Yup.string().required("نام الزامی است"),
  lastName: Yup.string().required("نام خانوادگی الزامی است"),
  email: Yup.string().email("ایمیل معتبر نیست").required("ایمیل الزامی است"),
  password: Yup.string()
    .min(8, "کلمه عبور نمی تواند کمتر از 8 کاراکتر باشد")
    .required("کلمه عبور الزامی است"),
  terms: Yup.bool().oneOf([true], "لطفا ظوابط و قوانین را تایید کنید"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("ایمیل معتبر نیست").required("ایمیل الزامی است"),
  password: Yup.string()
    .min(8, "کلمه عبور نمی تواند کمتر از 8 کاراکتر باشد")
    .required("کلمه عبور الزامی است"),
});

export const forgetSchema = Yup.object().shape({
  email: Yup.string().email("ایمیل معتبر نیست").required("ایمیل الزامی است"),
});

export const resetSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "کلمه عبور نمی تواند کمتر از 8 کاراکتر باشد")
    .required("کلمه عبور الزامی است"),
  confirmPassword: Yup.string()
    .min(8, ".تایید کلمه عبور نمی تواند کمتر از 8 کاراکتر باشد ")
    .required(" تکرار کلمه عبور الزامی است ")
    .oneOf([Yup.ref("password"), null], "تایید کلمه عبور یکسان نیست "),
});
