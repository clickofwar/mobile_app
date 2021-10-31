import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import { Formik } from "formik";
import Button from "../Button";
import Input from "../Input";
import { AlignView } from "../Views";
import { passwordValidation } from "../../../helpers/formValidation";

interface props {
  callback: (args: args) => any;
}

interface args {
  password: string;
  password2: string;
}

interface formikProps {
  handleChange: (e: any) => any;
  handleBlur: (e: any) => any;
  handleSubmit: () => any;
  values: any;
  errors: any;
}

const PasswordForm = (props: props) => {
  const { callback } = props;
  return (
    <Formik
      initialValues={{ password: "", password2: "" }}
      validate={passwordValidation}
      onSubmit={(values) => callback(values)}
    >
      {(formikProps: formikProps) => {
        const { handleChange, handleBlur, handleSubmit, values, errors } =
          formikProps;
        return (
          <View>
            <Input
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              error={errors.password}
              placeholder="password"
              label="password"
              secureTextEntry={true}
            />
            <Input
              onChangeText={handleChange("password2")}
              onBlur={handleBlur("password2")}
              value={values.password2}
              error={errors.password2}
              placeholder="re-enter password"
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

export default PasswordForm;
