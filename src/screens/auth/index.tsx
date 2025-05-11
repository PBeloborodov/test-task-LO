import { View, Text, StyleSheet } from 'react-native';
import React, { FC, useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Logo from '@img/svg/logo.svg';
import FormInputText from '@components/ui/input';
import UIButton from '@components/ui/button';
import UIModal from '@components/ui/modal/modal';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import type { TypeStackNavigation } from '../navigation'; // Corrected type name
import { UseRequest } from './api/use-request';
import { FormAuth } from './types';
import { useAppStore } from '../../store/index';

type Props = NativeStackScreenProps<TypeStackNavigation, 'auth'>;

const schema = yup.object({
  token: yup
    .string()
    .min(600, 'ошибка токена, повторите попытку')
    .required('Обязателено к заполнению'),
});

const Auth: FC<Props> = ({ navigation }) => {
  const [visibleDialog, setVisibleDialog] = useState(false);
  const token = useAppStore((state) => state.token);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormAuth>({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const { getToken, authUser, isLoading } = UseRequest({
    showError: setVisibleDialog,
    setValue,
    navigation,
  });

  useEffect(() => {
    console.log('Token:', token);
    if (token) {
      setValue('token', token);
    }
  }, []);

  const onToken = useCallback(() => {
    if (!token) {
      return getToken();
    }
    setValue('token', token);
  }, [token]);

  return (
    <View style={styles.container}>
      <Logo width={200} height={200} />
      <Text style={styles.subTitle}>Введите токен или получите его</Text>
      <FormInputText
        name={'token'}
        placeholder="Введите токен"
        control={control}
        errors={errors}
        value={token}
      />
      <UIButton
        onPress={token ? handleSubmit(authUser) : onToken}
        textBtn={token ? 'Продолжить' : 'Получить токен'}
        style={styles.btn}
        disabled={isLoading}
      />
      <UIModal
        description="Ошибка авторизации"
        modalVisible={visibleDialog}
        closeModal={() => setVisibleDialog(false)}
      />
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    paddingHorizontal: 20,
  },
  btn: { marginTop: 20, height: 50 },
  subTitle: {
    fontSize: 20,
    marginTop: 10,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
