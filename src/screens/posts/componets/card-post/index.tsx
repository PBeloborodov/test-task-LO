import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import React, { FC } from 'react';

type TypePost = {
  message: string;
};

const CardPost: FC<TypePost> = ({ post }) => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.author}>{`${post.user.firstName} ${post.user.lastName}`}</Text>
      <Text>{post.message}</Text>
      {!!post.photos?.[0]?.photo && (
        <ImageBackground
          source={{ uri: post.photos?.[0]?.photo?.original }}
          style={{ width: 200, height: 200 }}
          key={post.photos?.[0]?.photo?.original}
        />
      )}
    </View>
  );
};

export default CardPost;

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderWidth: 2,
    borderRadius: 10,
    overflow: 'hidden',
  },
  author: {
    fontWeight: 'bold',
  },
});
