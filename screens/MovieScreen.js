import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ChevronLeftIcon} from 'react-native-heroicons/outline';
import {HeartIcon} from 'react-native-heroicons/solid';
import {indexStyles} from '../theme';

var {width, height} = Dimensions.get('window');

export default function MovieScreen() {
  const navigation = useNavigation();
  const {params: item} = useRoute();
  useEffect(() => {
    //call the movie details api
  }, [item]);
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

          <TouchableOpacity>
            <HeartIcon size={35} color="white" />
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: '#262728',
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
  },
});
