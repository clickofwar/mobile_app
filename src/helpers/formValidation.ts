export const passwordValidation = (values: any) => {
  const errors: any = {};

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 6) {
    errors.password = "Must be 6 characters or more";
  }

  if (!values.password2) {
    errors.password2 = "Required";
  } else if (values.password.length < 6) {
    errors.password2 = "Must be 6 characters or more";
  } else if (values.password !== values.password2) {
    errors.password2 = "Passwords must match";
  }

  return errors;
};

export const codeValidation = (values: any) => {
  const errors: any = {};

  if (!values.code) {
    errors.code = "Required";
  } else if (values.code.length !== 6) {
    errors.code = "Code Must be 6 Digits";
  }

  return errors;
};

export const emailValidation = (values: any) => {
  const errors: any = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  return errors;
};

export const emailPassword = (values: any) => {
  const errors: any = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 6) {
    errors.password = "Must be 6 characters or more";
  }

  return errors;
};

export const usernameEmailPassword = (values: any) => {
  const errors: any = {};

  if (!values.username) {
    errors.username = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 6) {
    errors.password = "Must be 6 characters or more";
  }

  return errors;
};
