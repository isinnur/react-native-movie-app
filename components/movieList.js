import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import React from 'react';
import {indexStyles} from '../theme';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
import {fallbackMoviePoster, image185} from '../api/moviedb';

const {width, height} = Dimensions.get('window');

export default function MovieList({title, data, hideSeeAll}) {
  let movieName = 'How I Met your Mother';
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}> {title} </Text>

        {!hideSeeAll && (
          <TouchableOpacity>
            <Text style={indexStyles.text}>See All</Text>
          </TouchableOpacity>
        )}
      </View>
      {/* movie row */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}>
        {data.map((item, index) => {
          return (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => navigation.push('Movie', item)}>
              <View style={styles.wrapper}>
                <Image
                  // source={require('../assets/images/poster2.webp')}
                  source={{
                    uri: image185(item.poster_path) || fallbackMoviePoster,
                  }}
                  style={styles.posterImage}
                />
                <Text style={styles.movieName}>
                  {item.title.length > 14
                    ? item.title.slice(0, 14) + '...'
                    : item.title}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    marginTop: 30,
  },

  subContainer: {
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    color: 'white',
    fontSize: 20,
  },

  text: {
    fontSize: 18,
  },

  wrapper: {
    marginBottom: 5,
    marginRight: 10,
  },

  movieName: {
    color: '#c4c5c6',
  },

  posterImage: {
    width: width * 0.33,
    height: height * 0.22,
    borderRadius: 30,
    marginTop: 10,
  },
});
