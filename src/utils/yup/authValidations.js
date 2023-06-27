import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
  firstName: Yup.string().required("نام الزامی می باشد"),
  lastName: Yup.string().required("نام خانوادگی الزامی می باشد"),
  email: Yup.string()
    .email("ایمیل معتبر نیست")
    .required("ایمیل الزامی می باشد"),
  password: Yup.string()
    .min(8, "کلمه عبور نمی تواند کمتر از 8 کاراکتر باشد")
    .required("کلمه عبور الزامی می باشد"),
  terms: Yup.bool().oneOf([true], "لطفا ظوابط و قوانین را تایید کنید"),
});

export const loginSchema = Yup.object().shape({
  email: Yup.string()
    .email("ایمیل معتبر نیست")
    .required("ایمیل الزامی می باشد"),
  password: Yup.string()
    .min(8, "کلمه عبور نمی تواند کمتر از 8 کاراکتر باشد")
    .required("کلمه عبور الزامی می باشد"),
});

export const forgetSchema = Yup.object().shape({
  email: Yup.string()
    .email("ایمیل معتبر نیست")
    .required("ایمیل الزامی می باشد"),
});

export const resetSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, "کلمه عبور نمی تواند کمتر از 8 کاراکتر باشد")
    .required("کلمه عبور الزامی می باشد"),
  confirmPassword: Yup.string()
    .min(8, ".تایید کلمه عبور نمی تواند کمتر از 8 کاراکتر باشد ")
    .required(" تکرار کلمه عبور الزامی می باشد ")
    .oneOf([Yup.ref("password"), null], "تایید کلمه عبور یکسان نیست "),
});

export const verifySchema = Yup.object().shape({
  code: Yup.string()
    .min(6, "کد امنیتی نمی تواند کمتر از 6 کاراکتر باشد")
    .required("کد امنیتی الزامی می باشد"),
});
