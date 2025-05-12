import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Auth from '@screens/auth';
import Posts from '@screens/posts';

export type TypeStackNavigation = {
  auth: undefined;
  posts: undefined;
};

const Stack = createNativeStackNavigator<TypeStackNavigation>();

const Navigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="auth" component={Auth} options={{ headerShown: false }} />
      <Stack.Screen
        name="posts"
        component={Posts}
        options={{
          headerStyle: {
            backgroundColor: '#4B62FD',
          },
          headerTintColor: '#fff',
          headerBackTitle: 'Назад',
        }}
      />
    </Stack.Navigator>
  );
};

export default Navigation;
