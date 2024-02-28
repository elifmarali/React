import * as yup from "yup";
const passwordRules = "^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{5,}";
export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Gecerli bir email adresi giriniz")
    .required("Email girmek zorunludur"),
  age: yup
    .number()
    .positive("Lutfen pozitif bir yas giriniz")
    .integer("Lutfen yasinizi tam sayi formatinda giriniz")
    .required("Yas girmek zorunludur"),
  password: yup
    .string()
    .min(5, "Lutfen minimum 5 karakter giriniz")
    .matches(passwordRules, {
      message: "Lutfen en az 1 buyuk harf 1 kucuk harf ve 1 sayi giriniz",
    })
    .required("Sifre girmek zorunludur"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Sifreler eslesmiyor")
    .required("Terkar sifre girmek zorunludur"),
});

export const advencedSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, "Kullanici adi minimum 3 karakter olmalidir")
    .required("Kullanici adi girmek zorunludur"),
  university: yup
    .string()
    .oneOf(["bogazici", "gsu", "odtu", "itu"], "Lutfen universitenizi seciniz")
    .required("Universite secmek zorunludur"),
  isAccepted: yup
    .string()
    .oneOf([true], "Kullanim kosullarini kabul ediniz")
    .required(),
});
