import { useCallback, useState } from 'react';
import axios from 'axios';
import { useAppStore } from '../../../store';
import { PostItem } from '../types';
const POST_COUNT = 5;

export const UsePosts = ({ navigation }) => {
  const [isLoading, seIsLoading] = useState<boolean>(false);

  const token = useAppStore((state) => state.token);
  const clearToken = useAppStore((state) => state.clearToken);

  const [posts, setPosts] = useState<PostItem[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const [hasMore, setHasMore] = useState<boolean>(true);

  const getPosts = useCallback(async () => {
    if (isLoading || !hasMore || !token) {
      return;
    }
    seIsLoading(true);
    axios
      .get('https://api.lo.ink/v1/posts/feed', {
        params: {
          offset: offset,
          count: 5,
        },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setPosts((prev) => [...prev, ...response.data.data.items]);
        setHasMore(response?.data.data.items?.length === POST_COUNT);
        setOffset((prev) => prev + POST_COUNT);
      })
      .catch((error) => {
        if (error.response?.status === 302) {
          console.error('Редирект на:', error.response.headers.location);
        }
        if (error.response?.status === 401) {
          navigation.navigate('auth');
          clearToken();
        }
        console.error('Ошибка при получении списка постов:', error);
      })
      .finally(() => {
        seIsLoading(false);
      });
  }, [clearToken, hasMore, isLoading, offset, token]);

  const refetchPosts = useCallback(() => {
    setPosts([]);
    setOffset(0);
  }, [setPosts]);

  return { posts, getPosts, isLoading, refetchPosts };
};
