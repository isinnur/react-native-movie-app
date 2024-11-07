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
        inactiveSlideOpacity={0.6}
        sliderWidth={width}
        itemWidth={width * 0.62}
        slideStyle={{display: 'flex', alignItems: 'center'}}
      />
    </View>
  );
}

const MovieCard = ({item, handleClick}) => {
  return (
    <TouchableWithoutFeedback onPress={() => handleClick(item)}>
      <Image
        source={require('../assets/images/poster1.webp')}
        // style={{width: width * 0.6, height: height * 0.4}}
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
