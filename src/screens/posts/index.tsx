import React, { useEffect, useState } from 'react';
import { UsePosts } from './api/use-request';
import { FlashList } from '@shopify/flash-list';
import { mockPosts } from './mock';
import { Text, View } from 'react-native';
import CardPost from './componets/card-post';

const Posts = () => {
  const { posts, getPosts, isLoading, refetchPosts } = UsePosts();

  useEffect(() => {
    getPosts();
  }, []);

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
      />
      {isLoading && <Text>Loading...</Text>}
    </View>
  );
};

export default Posts;
