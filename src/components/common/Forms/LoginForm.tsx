import React from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { Formik } from "formik";
import Button from "../Button";
import Input from "../Input";
import { AlignView } from "../Views";
import { emailPassword } from "../../../helpers/formValidation";

interface props {
  callback: (args: args) => any;
}

interface args {
  email: string;
  password: string;
}

interface formikProps {
  handleChange: (e: any) => any;
  handleBlur: (e: any) => any;
  handleSubmit: () => any;
  values: any;
  errors: any;
}

const LoginForm = (props: props) => {
  const { callback } = props;
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={emailPassword}
      onSubmit={(values) => callback(values)}
    >
      {(formikProps: formikProps) => {
        const { handleChange, handleBlur, handleSubmit, values, errors } =
          formikProps;
        return (
          <View>
            <Input
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              error={errors.email}
              placeholder="email"
              label="email"
            />
            <Input
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              error={errors.password}
              placeholder="password"
              label="password"
              secureTextEntry={true}
            />
            <AlignView>
              <Button
                onPress={() => handleSubmit()}
                title="Submit"
                buttonStyle={{ marginTop: 5 }}
              />
            </AlignView>
          </View>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
