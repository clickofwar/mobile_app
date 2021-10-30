import React from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { Formik } from "formik";
import Button from "../Button";
import Input from "../Input";
import { AlignView } from "../Views";
import { emailValidation } from "../../../helpers/formValidation";

const EmailForm = (props: any) => {
  const { callback } = props;
  return (
    <Formik
      initialValues={{ email: "" }}
      validate={emailValidation}
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

export default EmailForm;
