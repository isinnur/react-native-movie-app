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
import MovieList from '../components/movieList';
import {useNavigation} from '@react-navigation/native';
import Loading from '../components/loading';

const HomeScreen = () => {
  const [trending, setTrending] = useState([1, 2, 3]);
  const [upcoming, setUpcoming] = useState([1, 2, 3]);
  const [topRated, setTopRated] = useState([1, 2, 3]);
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

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
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <MagnifyingGlassIcon size={30} strokeWidth={2} color="white" />
          </TouchableOpacity>
        </View>
      </SafeAreaView>

      {loading ? (
        <Loading />
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingBottom: 10}}>
          {/* trending movies carousel */}
          <TrendingMovies data={trending} />

          {/* upcoming movies row */}
          <MovieList title="Upcoming" data={upcoming} />

          {/* top rated movies row */}
          <MovieList title="Top Rated" data={topRated} />
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
  },

  subContainer: {
    marginBottom: 3,
  },

  content: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
  },

  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
