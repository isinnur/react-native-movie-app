import {
  View,
  Text,
  Dimensions,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {ChevronLeftIcon, HeartIcon} from 'react-native-heroicons/solid';
import {useNavigation} from '@react-navigation/native';
import {indexStyles} from '../theme';

const {width, height} = Dimensions.get('window');

export default function PersonScreen() {
  const navigation = useNavigation();
  const [isFavorite, toggleFavorite] = useState(false);
  return (
    <ScrollView
      style={styles.personContainer}
      contentContainerStyle={{paddingBottom: 20}}>
      {/* back button */}
      <SafeAreaView style={styles.box}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={[styles.icons, indexStyles.background]}>
          <ChevronLeftIcon size="28" strokeWidth={2.5} color="white" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => toggleFavorite(!isFavorite)}>
          <HeartIcon size={35} color={isFavorite ? 'red' : 'white'} />
        </TouchableOpacity>
      </SafeAreaView>

      {/* person details */}

      <View>
        <View style={styles.personDetails}>
          <View style={styles.imageView}>
            <Image
              style={styles.image}
              source={require('../assets/images/cast1.png')}
            />
          </View>
        </View>
      </View>

      <View style={styles.personDetail}>
        <Text style={styles.personText}>Kit Harington</Text>
        <Text style={styles.location}>London, United Kingdom</Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  personContainer: {
    flex: 1,
    backgroundColor: '#171717',
  },
  box: {
    width: width,
    zIndex: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingRight: 16,
    paddingLeft: 16,
    marginTop: 12,
  },

  personDetails: {
    flexDirection: 'row',
    justifyContent: 'center',
  },

  image: {
    height: height * 0.43,
    width: width * 0.74,
  },

  imageView: {
    alignItems: 'center',
    borderRadius: 9999,
    overflow: 'hidden',
    height: 288,
    width: 288,
    borderWidth: 1,
    borderColor: '#E5E1DA',
    shadowColor: 'gray',
    elevation: 8,
  },

  personDetail: {
    marginTop: 18,
  },

  personText: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  location: {
    fontSize: 16,
    color: 'gray',
    fontStyle: 'bold',
    textAlign: 'center',
  },
});
