import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text>Hi</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
    borderWidth: 2,
    borderColor: '#14278963',
    width: 'auto',
    padding: 10,
    maxWidth: 40,
    borderRadius: 8,
  },
});

export default App;
