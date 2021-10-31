import React from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { Formik } from "formik";
import Button from "../Button";
import Input from "../Input";
import { AlignView } from "../Views";
import { emailValidation } from "../../../helpers/formValidation";

interface props {
  callback: (args: args) => any;
}

interface args {
  email: string;
}

interface formikProps {
  handleChange: (e: any) => any;
  handleBlur: (e: any) => any;
  handleSubmit: () => any;
  values: any;
  errors: any;
}

const EmailForm = (props: props) => {
  const { callback } = props;
  return (
    <Formik
      initialValues={{ email: "" }}
      validate={emailValidation}
      onSubmit={(values: args) => callback(values)}
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

export default EmailForm;
