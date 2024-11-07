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

const {width, height} = Dimensions.get('window');

export default function MovieList({title, data}) {
  let movieName =
    'How I Met your MotherMotherMotherMotherMotherMotherMotherMotherMother';
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text style={styles.title}> {title} </Text>
        <TouchableOpacity>
          <Text style={indexStyles.text}>See All</Text>
        </TouchableOpacity>
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
              onPress={() => navigation.navigate('Movie', item)}>
              <View style={styles.wrapper}>
                <Image
                  source={require('../assets/images/poster2.webp')}
                  style={styles.posterImage}
                />
                <Text style={styles.movieName}>
                  {movieName.length > 14
                    ? movieName.slice(0, 14) + '...'
                    : movieName}
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
