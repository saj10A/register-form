import * as Yup from "yup";

export const initialValues = {
  name: "",
  user_name: "",
  email: "",
  password: "",
  c_password: "",
  phone: "",
  birth_date: "",
};

export const onSubmit = (values, actions) => {
  setTimeout(() => {
    actions.setSubmitting(false);
  }, 3000);
};

export const validationSchema = Yup.object({
  name: Yup.string()
    .required("این فیلد الزامی است")
    .matches(
      /^[\u0600-\u06FF\sa-zA-Z@$%-]+$/,
      "از حروف فارسی، لاتین و کاراکتر های مجاز استفاده شود"
    ),

  user_name: Yup.string()
    .required("این فیلد الزامی است")
    .matches(
      /^[\u0600-\u06FFa-zA-Z0-9_]+$/,
      "از حروف فارسی، لاتین و کاراکتر زیرخط استفاده شود"
    ),

  email: Yup.string()
    .required("این فیلد الزامی است")
    .email("لطفا قالب ایمیل را رعایت کنید"),

  password: Yup.string()
    .required("رمز عبور را وارد کنید")
    .min(5, "رمز عبور نباید کمتر از ۵ کاراکتر باشد")
    .matches(
      /^[\u0600-\u06FF\sa-zA-Z0-9-@$%_!.?&]+$/,
      "از کاراکتر های مجاز استفاده شود"
    ),

  c_password: Yup.string()
    .oneOf([Yup.ref("password"), ""], "با رمز عبور مطابقت ندارد")
    .required("تایید رمز عبور الزامی است"),

  phone: Yup.string()
    .required("این فیلد الزامی است")
    .matches(/^[0-9]+$/, "شماره موبایل فقط عدد باشد")
    .length(11, "شماره موبایل باید ۱۱ رقم باشد"),

  birth_date: Yup.string().matches(
    /^[0-9\s/\-]+$/,
    "فقط از اعداد و خط تیره استفاده شود"
  ),
});
