import React from 'react';
import { StyleSheet, Text, View,Button } from 'react-native';
import { Checkbox } from 'react-native-paper';
import EmojiDict from './EmojiDict'
export default function App() {
  
  return (
    <View style={styles.container}>
      <Text>H! app</Text>
      <Checkbox></Checkbox>
      <EmojiDict></EmojiDict>
      <Button title="sfghd"></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
