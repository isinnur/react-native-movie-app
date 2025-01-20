import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableWithoutFeedback,
  Dimensions,
  Button,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {image500} from '../api/moviedb';

const {width, height} = Dimensions.get('window');
export default function TrendingMovies({data}) {
  const navigation = useNavigation();

  const handleClick = item => {
    navigation.navigate('Movie', item);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Trending</Text>
      <Carousel
        data={data}
        renderItem={({item}) => (
          <MovieCard item={item} handleClick={handleClick} />
        )}
        firstItem={1}
        inactiveSlideOpacity={0.3}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{display: 'flex', alignItems: 'center'}}
      />
    </View>
  );
}

const MovieCard = ({item, handleClick}) => {
  console.log('item.poster_path: ', item.poster_path);

  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <Image
        // source={require('../assets/images/poster1.webp')}
        source={{uri: image500(item.poster_path)}}
        style={styles.posterImage}
      />
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 8,
  },

  heading: {
    color: 'white',
    fontSize: 20,
    marginHorizontal: 4,
    marginVertical: 10,
  },

  posterImage: {
    width: width * 0.6,
    height: height * 0.4,
    borderRadius: 20,
    marginTop: 10,
  },
});
