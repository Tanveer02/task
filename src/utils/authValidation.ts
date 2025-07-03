import { I18N } from "../i18n/i18n";

export function validateSigningForm(email: string, password: string | any[]) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email?.trim()) {
    return { isValid: false, message: I18N("loginScreen.emailEmptyVali") };
  }
  if (!emailRegex?.test(email)) {
    return { isValid: false, message: I18N("loginScreen.emailVali") };
  }
  if (!password) {
    return {
      isValid: false,
      message: "Password is required",
    };
  }
  // if (password?.length < 8) {
  //   return {
  //     isValid: false,
  //     message: I18N('loginScreen.passVali'),
  //   };
  // }
  return { isValid: true, message: "" };
}
export function validateSignupForm(
  name: string,
  email: string,
  password: string,
  confirmPassword: string
) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!name?.trim()) {
    return { isValid: false, message: I18N("signUpScreen.nameVali") };
  }
  if (!email?.trim()) {
    return { isValid: false, message: I18N("loginScreen.emailEmptyVali") };
  }
  if (!emailRegex.test(email)) {
    return { isValid: false, message: I18N("loginScreen.emailVali") };
  }
  if (!password) {
    return {
      isValid: false,
      message: "Password is required",
    };
  }
  // if (password?.length < 8) {
  //   return {
  //     isValid: false,
  //     message: I18N("loginScreen.passVali"),
  //   };
  // }
  if (password !== confirmPassword) {
    return { isValid: false, message: I18N("signUpScreen.confirmPassVali") };
  }
  return { isValid: true, message: "" };
}
