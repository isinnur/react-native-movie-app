import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  Bars3CenterLeftIcon,
  MagnifyingGlassIcon,
} from 'react-native-heroicons/outline';
import {indexStyles} from '../theme';
import TrendingMovies from '../components/trendingMovies';

const HomeScreen = () => {
  const [trending, setTrending] = useState([1, 2, 3]);
  return (
    <View style={styles.container}>
      {/* search bar and logo */}
      <SafeAreaView style={styles.subContainer}>
        <StatusBar barStyle={'light-content'} />
        <View style={styles.content}>
          <Bars3CenterLeftIcon size={30} strokeWidth={2} color="white" />
          <Text style={styles.title}>
            <Text style={indexStyles.text}>M</Text>ovies
          </Text>
          <TouchableOpacity>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 10}}>
        {/* trending movies carousel */}
        <TrendingMovies data={trending} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E201D',
  },

  subContainer: {
    marginBottom: 3,
  },

  content: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 3,
  },

  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
