import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Auth from "@screens/auth";

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="auth"
        component={Auth}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
