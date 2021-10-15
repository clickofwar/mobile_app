import React from "react";
import { TextInput, View, Text, StyleSheet } from "react-native";
import { Formik } from "formik";
import Button from "./Button";
import Input from "./Input";
import { AlignView } from "./Views";

const Form = (props: any) => {
  const { callback, validate = {} } = props;
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validate={validate}
      onSubmit={(values) => callback(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
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
      )}
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

export default Form;
