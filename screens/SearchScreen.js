import {
  View,
  Text,
  Dimensions,
  SafeAreaView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Image,
} from 'react-native';
import {debounce} from 'lodash';
import React, {useCallback, useState} from 'react';
import {XMarkIcon} from 'react-native-heroicons/outline';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native-gesture-handler';
import Loading from '../components/loading';
import {fallbackMoviePoster, image185, searchMovies} from '../api/moviedb';

const {width, height} = Dimensions.get('window');

export default function SearchScreen() {
  const navigation = useNavigation();
  const [results, setResults] = useState([]);
  let movieName = 'Squid Game';
  const [loading, setLoading] = useState(false);

  const handleSearch = value => {
    if (value && value.length > 2) {
      setLoading(true);
      searchMovies({
        query: value,
        include_adult: 'false',
        language: 'en-US',
        page: '1',
      }).then(data => {
        setLoading(false);
        // console.log('got movies:', data);
        if (data && data.results) {
          setResults(data.results);
        }
      });
    } else {
      setLoading(false);
      setResults([]);
    }
  };
  const handleTextDebounce = useCallback(value => {
    debounce(handleSearch, 400)(value);
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          onChangeText={handleTextDebounce}
          placeholder="Search Movie"
          placeholderTextColor="lightgray"
          style={styles.searchInput}
        />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}
          style={styles.search}>
          <XMarkIcon size={25} color="white" />
        </TouchableOpacity>
      </View>

      {/* results */}

      {loading ? (
        <Loading />
      ) : results.length > 0 ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{paddingHorizontal: 15}}
          style={styles.resultsContainer}>
          <Text style={styles.resultText}>Results ({results.length})</Text>
          <View style={styles.resultBox}>
            {results.map((item, index) => {
              return (
                <TouchableWithoutFeedback
                  key={index}
                  onPress={() => navigation.push('Movie', item)}>
                  <View style={styles.imageContainer}>
                    <Image
                      style={styles.image}
                      // source={require('../assets/images/poster3.webp')}
                      source={{
                        uri: image185(item?.poster_path) || fallbackMoviePoster,
                      }}
                    />
                    <Text style={styles.movieName}>
                      {item?.title?.length > 22
                        ? item?.title.slice(0, 22) + '...'
                        : item?.title}
                    </Text>
                  </View>
                </TouchableWithoutFeedback>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <View style={styles.noMovie}>
          <Image
            style={styles.image}
            source={require('../assets/images/noFoundMovie.png')}
          />
          <Text style={styles.noMovieText}>No Found a Movie</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#171717',
    flex: 1,
  },

  searchBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 12,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#E5E1DA',
    borderRadius: 9999,
    marginTop: height * 0.02,
  },

  searchInput: {
    paddingLeft: 24,
    flex: 1,
    fontSize: 16,
    letterSpacing: 0.5,
    color: 'white',
  },

  search: {
    borderRadius: 9999,
    padding: 12,
    margin: 4,
    backgroundColor: '#737373',
  },

  resultsContainer: {
    gap: 12,
  },

  resultText: {
    color: 'white',
    fontWeight: 'semibold',
    marginLeft: 4,
    marginBottom: 20,
  },

  resultBox: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },

  image: {
    borderRadius: 24,
    width: width * 0.44,
    height: height * 0.3,
  },

  imageContainer: {
    gap: 8,
    marginBottom: 16,
  },

  movieName: {
    color: '#D4D4D4',
    marginLeft: 4,
  },

  noMovie: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  noMovieText: {
    color: 'white',
    fontSize: 20,
  },
});
