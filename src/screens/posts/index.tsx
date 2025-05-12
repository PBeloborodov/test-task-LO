import React, { FC, useEffect, useLayoutEffect } from 'react';
import { UsePosts } from './api/use-posts';
import { FlashList } from '@shopify/flash-list';
import { Text, View } from 'react-native';
import CardPost from './componets/card-post';
import HeaderPostsScreens from './componets/header-posts-screens';

type TypePostsScreen = {
  navigation: any;
};

const Posts: FC<TypePostsScreen> = ({ navigation }) => {
  const { posts, getPosts, isLoading, refetchPosts } = UsePosts({ navigation });

  useEffect(() => {
    getPosts();
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => <HeaderPostsScreens />,
      headerLeftTitleStyle: { fontSize: 20 },
    });
  }, [navigation]);
  useEffect(() => {}, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <FlashList
        renderItem={({ item }) => <CardPost post={item} />}
        data={posts}
        keyExtractor={(item) => item.id.toString()}
        refreshing={isLoading}
        onRefresh={refetchPosts}
        onEndReached={getPosts}
        estimatedItemSize={400}
        onEndReachedThreshold={0.1}
        ListEmptyComponent={<Text>{isLoading ? '' : 'Постов пока нет'}</Text>}
      />
      {isLoading && <Text>Loading...</Text>}
    </View>
  );
};

export default Posts;
