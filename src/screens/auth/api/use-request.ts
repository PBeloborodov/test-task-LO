import { useState } from "react";
import axios from "axios";
import { UseFormSetValue } from "react-hook-form";
import { FormAuth } from "../types";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TypeStackNavigation } from "@screens/navigation";

type TypeUseRequest = {
  showError: (v: boolean) => void;
  setValue: UseFormSetValue<FormAuth>;
  navigation: NativeStackNavigationProp<TypeStackNavigation, "auth">; // Specific to "auth" screen
};
export const UseRequest = ({
  showError,
  setValue,
  navigation,
}: TypeUseRequest) => {
  const [isLoading, seIsLoading] = useState<boolean>(false);
  const getToken = () => {
    seIsLoading(true);
    axios
      .post(
        "https://api.lo.ink/v1/identity/token",
        {
          client_id: "2",
          display: "none",
          grant_type: "password",
          password: "Secret2020",
          redirect_uri: "default",
          username: "const.bpa@gmail.com",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("Токен:", response?.data?.data?.access_token?.length);
        if (response.data.data.access_token) {
          setValue("token", response.data.data.access_token);
          showError(false);
        } else {
          showError(true);
        }
      })
      .catch((error) => {
        console.error("Ошибка при получении токена:", error);
        showError(true);
      })
      .finally(() => {
        seIsLoading(false);
      });
  };

  const authUser = () => {
    // можно реализовать логику авторизации здесь
    navigation.navigate("posts");
  };

  return { authUser, getToken, isLoading };
};
