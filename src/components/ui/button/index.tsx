import React, { FC } from "react";
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

type PropsUIBtn = {
  onPress: () => void;
  textBtn: string;
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
};
const UIButton: FC<PropsUIBtn> = ({ onPress, textBtn, style, disabled }) => {
  return (
    <TouchableOpacity
      style={[styles.wraper, disabled && styles.disabled, style]}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={styles.btn}>{textBtn}</Text>
    </TouchableOpacity>
  );
};

export default UIButton;

const styles = StyleSheet.create({
  wraper: {
    width: "100%",
    backgroundColor: "#4B62FD",
    padding: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btn: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  disabled: {
    opacity: 0.5,
  },
});
