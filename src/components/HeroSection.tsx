import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import AppHeader from './AppHeader';

const HeroSection: React.FC = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../public/k2.jpg')} style={styles.image} />
      <Text style={styles.text}>Featured Movie</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 260,
    justifyContent: 'flex-end'
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "white",
    fontSize: 20,
    lineHeight: 30,
    fontWeight: 'bold',
    margin: 10,
    justifyContent: 'flex-start'
  }
});

export default HeroSection;
