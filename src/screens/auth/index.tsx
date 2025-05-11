import { View, Text, StyleSheet } from "react-native";
import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { FormAuth } from "./types";
import Logo from "@img/svg/logo.svg";

type Props = {};

const Auth: FC<Props> = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormAuth>();

  return (
    <View style={styles.container}>
      <View>
        <Logo />
      </View>
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F8FAFF",
  },
});
