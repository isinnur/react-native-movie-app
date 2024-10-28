import React from 'react';
import {View, Text, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import Carousel from 'react-native-snap-carousel';

export default function TrendingMovies({data}) {
  const renderItem = ({item}) => {
    return <MovieCard item={item} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Trending</Text>
      <Carousel
        data={data}
        renderItem={renderItem}
        sliderWidth={300}
        itemWidth={200}
        containerCustomStyle={styles.carouselContainer}
      />
    </View>
  );
}

const MovieCard = ({item}) => {
  return (
    <TouchableWithoutFeedback>
      <View style={styles.card}>
        <Text style={styles.cardText}>{item.title}</Text>
      </View>
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
    marginBottom: 5,
  },

  card: {
    backgroundColor: 'gray',
    borderRadius: 8,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  cardText: {
    color: 'white',
    fontSize: 16,
  },

  carouselContainer: {
    marginTop: 10,
  },
});
