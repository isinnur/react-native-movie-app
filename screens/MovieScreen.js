import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {HeartIcon} from 'react-native-heroicons/solid';
import {indexStyles, theme} from '../theme';
import {Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Cast from '../components/cast';
import MovieList from '../components/movieList';
import Loading from '../components/loading';
import {
  fallbackMoviePoster,
  fetchMovieCredits,
  fetchMovieDetails,
  fetchSimilarMovies,
  image500,
} from '../api/moviedb';

const {width, height} = Dimensions.get('window');

export default function MovieScreen() {
  const {params: item} = useRoute();
  const [isFavorite, toggleFavorite] = useState(false);
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const navigation = useNavigation();
  let movieName = 'Game of Thrones';
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // console.log('itemid', item.id);
    setLoading(true);
    getMovieDetails(item.id);
    getmovieCredits(item.id);
    getSimilarMovies(item.id);
  }, [item]);

  const getMovieDetails = async id => {
    const data = await fetchMovieDetails(id);
    // console.log('got movie details', data);
    if (data) {
      setMovie(data);
    }
    setLoading(false);
  };

  const getmovieCredits = async id => {
    const data = await fetchMovieCredits(id);
    if (data && data.cast) {
      setCast(data.cast);
    }
    setLoading(false);
  };

  const getSimilarMovies = async id => {
    const data = await fetchSimilarMovies(id);
    if (data && data.results) {
      setSimilarMovies(data.results);
    }
    setLoading(false);
  };

  return (
    <ScrollView
      contentContainerStyle={{paddingBottom: 20}}
      style={styles.container}>
      {/* back button and movie poster  */}
      <View style={styles.wrapper}>
        <SafeAreaView style={styles.box}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={[styles.icons, indexStyles.background]}>
            <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => toggleFavorite(!isFavorite)}>
            <HeartIcon
              size={35}
              color={isFavorite ? theme.background : 'white'}
            />
          </TouchableOpacity>
        </SafeAreaView>

        {loading ? (
          <Loading />
        ) : (
          <View>
            <Image
              // source={require('../assets/images/poster5.jpg')}
              source={{uri: image500(movie.poster_path) || fallbackMoviePoster}}
              style={styles.heroImage}
            />
            <LinearGradient
              colors={['transparent', 'rgba(23,23,23,0.8)', 'rgba(23,23,23,1)']}
              style={styles.gradientSection}
              start={{x: 0.5, y: 0}}
              end={{x: 0.5, y: 1}}
            />
          </View>
        )}
      </View>

      {/* movie details */}
      <View style={styles.movieDetailContainer}>
        {/* title */}
        <Text style={styles.detailText}>{movie?.title}</Text>
      </View>

      {/* status,relese,runtime */}
      {movie?.id ? (
        <Text style={styles.movieStatus}>
          {movie?.status} · {movie?.release_date?.split('-')[0]} ·{' '}
          {movie?.runtime} min
        </Text>
      ) : null}

      {/* genres */}
      <View style={styles.movieGenres}>
        {movie?.genres?.map((genre, index) => {
          let showDot = index + 1 !== movie.genres.length;
          return (
            <Text style={styles.genre}>
              {' '}
              {genre?.name} {showDot ? '·' : null}{' '}
            </Text>
          );
        })}
        {/* <Text style={styles.genre}> Thrill · </Text>
        <Text style={styles.genre}> Comedy </Text> */}
      </View>
      {/* description */}
      <Text style={styles.description}>{movie?.overview}</Text>

      {/* cast */}
      {cast.length > 0 && <Cast cast={cast} navigation={navigation} />}

      {/* similar movies */}
      {similarMovies.length > 0 && (
        <MovieList
          title="Similar Movies"
          hideSeeAll={true}
          data={similarMovies}
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#171717',
  },

  wrapper: {
    width: '100%',
  },

  box: {
    width: width,
    position: 'absolute',
    zIndex: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    marginTop: 12,
  },

  icons: {
    borderRadius: 6,
    padding: 0.8,
  },

  heroImage: {
    width: width,
    height: height * 0.55,
  },

  gradientSection: {
    width: width,
    height: height * 0.4,
    position: 'absolute',
    bottom: 0,
  },

  movieDetailContainer: {
    marginTop: -(height * 0.09),
    marginVertical: 12,
  },

  detailText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 30,
    fontStyle: 'bold',
    letterSpacing: 1.5,
  },

  movieStatus: {
    fontWeight: 'semibold',
    textAlign: 'center',
    color: '#E5E1DA',
    fontSize: 16,
  },

  movieGenres: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 4,
    paddingHorizontal: 2,
    marginTop: 5,
  },

  genre: {
    color: '#E5E1DA',
    fontWeight: 'semibold',
    textAlign: 'center',
    fontSize: 16,
  },

  description: {
    marginTop: 10,
    color: '#E5E1DA',
    marginHorizontal: 12,
    letterSpacing: 0.8,
    fontSize: 15,
  },
});
