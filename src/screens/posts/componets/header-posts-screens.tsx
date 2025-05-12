import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function HeaderPostsScreens() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>Посты LO</Text>
    </View>
  );
}

export default HeaderPostsScreens;
const styles = StyleSheet.create({
  wrapper: { flexDirection: 'row', alignItems: 'center' },
  text: { fontSize: 20, fontWeight: 'bold', color: 'white' },
});
