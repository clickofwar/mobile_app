import React from "react";
import { View } from "react-native";
import { Formik } from "formik";
import Button from "../Button";
import Input from "../Input";
import { AlignView } from "../Views";
import { codeValidation } from "../../../helpers/formValidation";

interface props {
  callback: (args: args) => any;
}

interface args {
  code: string;
}

interface formikProps {
  handleChange: (e: any) => any;
  handleBlur: (e: any) => any;
  handleSubmit: () => any;
  values: any;
  errors: any;
}

const CodeForm = (props: props) => {
  const { callback } = props;
  return (
    <Formik
      initialValues={{ code: "" }}
      validate={codeValidation}
      onSubmit={(values: args) => callback(values)}
    >
      {(formikProps: formikProps) => {
        const { handleChange, handleBlur, handleSubmit, values, errors } =
          formikProps;
        return (
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
        );
      }}
    </Formik>
  );
};

export default CodeForm;
