import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {Bars3CenterLeftIcon} from 'react-native-heroicons/outline';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      {/* search bar and logo */}
      <SafeAreaView style={styles.subContainer}>
        <StatusBar barStyle={'light-content'} />
        <View style={styles.content}>
          <Bars3CenterLeftIcon size="24" strokeWidth={2} color="white" />
          <Text style={styles.barsText}>Movies</Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E201D',
  },

  subContainer: {
    margin: 5,
  },

  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  barsText: {
    color: 'white',
    fontSize: 24,
  },
});

export default HomeScreen;
