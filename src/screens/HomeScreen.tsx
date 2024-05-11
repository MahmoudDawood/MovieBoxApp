import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import AppHeader from '../components/AppHeader';
import HeroSection from '../components/HeroSection';
import MoviesList from '../components/MoviesList';
import { useState } from 'react';

const HomeScreen: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')

  return (
    <View>
    {/* <SafeAreaView style={styles.container}> */}
      <AppHeader searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <HeroSection />
      <MoviesList searchTerm={searchTerm} />
    {/* </SafeAreaView> */}
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default HomeScreen;
