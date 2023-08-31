import * as Yup from "yup";

export const aboutYouSchema = Yup.object().shape({
  job: Yup.string().required("عنوان شغلی الزامی است"),
  location: Yup.string().required("موقعیت مکانی الزامی است"),
});

export const profileStepSchema = Yup.object().shape({
  category: Yup.string().required("دسته بندی الزامی است"),
  skills: Yup.string().required("مهارت الزامی است"),
  bio: Yup.string().required("زندگی نامه الزامی است"),
});
export const experienceStep = Yup.object().shape({
  intro: Yup.string().required("لطفا لینک ویدیوی خود را وارد کنید"),
  why: Yup.string()
    .required("لطفا هدف خود را برای مربی شدن وارد کنید")
    .min(10, "دلیل شما برای مربی شدن نباید کمتر از 10 کاراکتر باشد"),
  achievement: Yup.string()
    .required("لطفا بزرگترین دستاوردی که داشته اید را وارد کنید")
    .min(10, "فیلد بزرگترین دستاورد شما نباید کمتر از 10 کاراکتر باشد"),
});
