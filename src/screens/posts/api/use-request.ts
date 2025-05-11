import { useState } from 'react';
import axios from 'axios';

type TypeUseRequest = {};
export const UsePosts = ({}: TypeUseRequest) => {
  const [isLoading, seIsLoading] = useState<boolean>(false);
  const getPosts = () => {
    seIsLoading(true);
    axios
      .get('https://api.lo.ink/v1/post/feed', {
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then((response) => {
        console.log('Токен:', response);
        if (response.data.data.access_token) {
        } else {
        }
      })
      .catch((error) => {
        console.error('Ошибка при получении списка постов:', error);
      })
      .finally(() => {
        seIsLoading(false);
      });
  };

  const authUser = () => {};

  return { authUser, getPosts, isLoading };
};
