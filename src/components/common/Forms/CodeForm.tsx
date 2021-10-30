import React from "react";
import { View, KeyboardAvoidingView } from "react-native";
import { Formik } from "formik";
import Button from "../Button";
import Input from "../Input";
import { AlignView } from "../Views";
import { codeValidation } from "../../../helpers/formValidation";

const CodeForm = (props: any) => {
  const { callback } = props;
  return (
    <Formik
      initialValues={{ code: "" }}
      validate={codeValidation}
      onSubmit={(values) => callback(values)}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors }) => (
        <View>
          <Input
            onChangeText={handleChange("code")}
            onBlur={handleBlur("code")}
            value={values.code}
            error={errors.code}
            placeholder="code"
            label="code"
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

export default CodeForm;
