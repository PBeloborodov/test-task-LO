import { useState } from 'react';
import axios from 'axios';
import { UseFormSetValue } from 'react-hook-form';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TypeStackNavigation } from '@screens/navigation';

import { FormAuth } from '../types';
import { useAppStore } from '../../../store/index';

type TypeUseRequest = {
  showError: (v: boolean) => void;
  setValue: UseFormSetValue<FormAuth>;
  navigation: NativeStackNavigationProp<TypeStackNavigation, 'auth'>; // Specific to "auth" screen
};

export const UseRequest = ({ showError, navigation }: TypeUseRequest) => {
  const setToken = useAppStore((state) => state.setToken);

  const [isLoading, seIsLoading] = useState<boolean>(false);
  const getToken = () => {
    seIsLoading(true);
    axios
      .post(
        'https://api.lo.ink/v1/identity/token',
        {
          client_id: '2',
          display: 'none',
          grant_type: 'password',
          password: 'Secret2020',
          redirect_uri: 'default',
          username: 'const.bpa@gmail.com',
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )
      .then((response) => {
        if (response.data.data.access_token) {
          setToken(response.data.data.access_token);
          showError(false);
        } else {
          showError(true);
        }
      })
      .catch((error) => {
        console.error('Ошибка при получении токена:', error);
        showError(true);
      })
      .finally(() => {
        seIsLoading(false);
      });
  };

  const authUser = () => {
    navigation.navigate('posts');
  };

  return { authUser, getToken, isLoading };
};
