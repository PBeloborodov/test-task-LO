import { Text, TextInput, StyleSheet } from "react-native";
import React, { FC } from "react";
import { Controller } from "react-hook-form";
import { PropsInput } from "./types";

const FormInputText: FC<PropsInput> = ({
  control,
  placeholder,
  errors,
  name,
}) => {
  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
          />
        )}
      />
      {errors && <Text style={styles.error}>{errors[`${name}`]?.message}</Text>}
    </>
  );
};

export default FormInputText;

const styles = StyleSheet.create({
  input: {
    width: "100%",
    height: 50,
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    backgroundColor: "white",
  },
  error: {
    color: "red",
  },
});
