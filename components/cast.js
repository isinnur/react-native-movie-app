import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {Image} from 'react-native';
import {fallbackPersonImage, image185} from '../api/moviedb';
export default function Cast({cast, navigation}) {
  let castPerson = 'Kit Harington';
  let characterName = 'Jon Snow';
  return (
    <View style={styles.castContainer}>
      <Text style={styles.topCast}>Top Cast</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{paddingHorizontal: 15}}>
        {cast &&
          cast.map((person, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={styles.cast}
                onPress={() => navigation.navigate('Person', person)}>
                <View style={styles.imgContainer}>
                  <Image
                    style={styles.image}
                    // source={require('../assets/images/cast1.png')}
                    source={{
                      uri:
                        image185(person?.profile_path) || fallbackPersonImage,
                    }}
                  />
                </View>

                <Text style={styles.castCharacter}>
                  {person?.character.length > 10
                    ? person?.character.slice(0, 10) + '...'
                    : person?.character}
                </Text>
                <Text style={styles.castPerson}>
                  {person?.original_name.length > 10
                    ? person?.original_name.slice(0, 10) + '...'
                    : person?.original_name}
                </Text>
              </TouchableOpacity>
            );
          })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  castContainer: {
    marginVertical: 18,
    marginTop: 45,
  },

  topCast: {
    color: 'white',
    fontSize: 18,
    marginHorizontal: 12,
    marginBottom: 15,
  },
  cast: {
    marginRight: 12,
    alignItems: 'center',
  },

  castCharacter: {
    color: 'white',
    fontSize: 15,
    marginTop: 3,
  },

  castPerson: {
    color: 'gray',
    fontSize: 15,
    marginTop: 3,
  },

  image: {
    borderRadius: 18,
    height: 72,
    width: 60,
  },

  imgContainer: {
    overflow: 'hidden',
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E1DA',
  },
});
