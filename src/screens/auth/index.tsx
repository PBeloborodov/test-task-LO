import { View, Text, StyleSheet, TextInput, Button } from "react-native";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { FormAuth } from "./types";
import Logo from "@img/svg/logo.svg";
import FormInputText from "@components/ui/input";
import UIButton from "@components/ui/button";

type Props = {};

const Auth: FC<Props> = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormAuth>();

  const onSubmit = (data: FormAuth) => {
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <Logo width={200} height={200} />
      <FormInputText
        name={"token"}
        placeholder="Введите токен"
        control={control}
        errors={errors?.token}
      />
      <UIButton
        onPress={handleSubmit(onSubmit)}
        textBtn={"Получить токен"}
        style={styles.btn}
      />
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
    alignItems: "center",
    backgroundColor: "#EFEFEF",
    paddingHorizontal: 20,
  },
  btn: { marginTop: 20, height: 50 },
});
