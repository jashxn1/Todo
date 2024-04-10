import React from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import HomeScreen from './src/Screen/HomeScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.centerBox}>
      <StatusBar />
      <HomeScreen />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  centerBox: {
    flex: 1,
    padding: 20,
    width: '100%',
    backgroundColor: '#D3D3D3',
  }
});
export default App;
