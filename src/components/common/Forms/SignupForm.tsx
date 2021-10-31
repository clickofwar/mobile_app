import React from "react";
import { View, StyleSheet } from "react-native";
import { Formik } from "formik";
import Button from "../Button";
import Input from "../Input";
import { AlignView } from "../Views";
import { usernameEmailPassword } from "../../../helpers/formValidation";

interface props {
  callback: (args: args) => any;
}

interface args {
  username: string;
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

const SignupForm = (props: props) => {
  const { callback } = props;
  return (
    <Formik
      initialValues={{ username: "", email: "", password: "" }}
      validate={usernameEmailPassword}
      onSubmit={(values) => callback(values)}
    >
      {(formikProps: formikProps) => {
        const { handleChange, handleBlur, handleSubmit, values, errors } =
          formikProps;
        return (
          <View>
            <Input
              onChangeText={handleChange("username")}
              onBlur={handleBlur("username")}
              value={values.username}
              error={errors.username}
              placeholder="username"
              label="username"
            />
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

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e6e6e6",
    width: 350,
    height: 50,
  },
});

export default SignupForm;
