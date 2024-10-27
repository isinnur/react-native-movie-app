import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

export default function trendingMovies() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Trending</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
  },

  heading: {
    color: 'white',
    fontSize: 20,
    marginHorizontal: 4,
    marginBottom: 5,
  },
});
