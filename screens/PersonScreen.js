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
import MovieList from '../components/movieList';
import Loading from '../components/loading';

const {width, height} = Dimensions.get('window');

export default function PersonScreen() {
  const navigation = useNavigation();
  const [isFavorite, toggleFavorite] = useState(false);
  const [personMovies, setPersonMovies] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [loading, setLoading] = useState(false);

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

      {loading ? (
        <Loading />
      ) : (
        <View>
          <View style={styles.personDetails}>
            <View style={styles.imageView}>
              <Image
                style={styles.image}
                source={require('../assets/images/cast1.png')}
              />
            </View>
          </View>

          <View style={styles.personDetail}>
            <Text style={styles.personText}>Kit Harington</Text>
            <Text style={styles.location}>London, United Kingdom</Text>
          </View>

          <View style={styles.detailsContainer}>
            <View style={styles.details}>
              <Text style={styles.topText}>Gender</Text>
              <Text style={styles.bottomText}>Male</Text>
            </View>
            <View style={styles.details}>
              <Text style={styles.topText}>Birthday</Text>
              <Text style={styles.bottomText}>19.07.2003</Text>
            </View>
            <View style={styles.details}>
              <Text style={styles.topText}>Known for</Text>
              <Text style={styles.bottomText}>Acting</Text>
            </View>
            <View style={styles.detailsPopularity}>
              <Text style={styles.topText}>Popularity</Text>
              <Text style={styles.bottomText}>462.825</Text>
            </View>
          </View>

          <View style={styles.biographyContainer}>
            <Text style={styles.biography}>Biography</Text>
            <Text style={styles.content}>
              Kit Harington tam adı ile Christopher Catesby Harington (26 Aralık
              1986, Londra), İngiliz televizyon ve sinema oyuncusu. 1992 ve 1998
              yılları arasında Southfield'de okudu. Daha sonra 1998 ve 2003
              yılları arasında Chantry Yüksek Okulu'na devam etti. 2003 ve 2005
              yılları arasında Drama ve Tiyatro Çalışmaları okudu, Worcester
              Sixth Form College'e katıldı. 2008 yılında Londra Üniversitesi
              merkez fakültesi konuşma ve drama bölümünden mezun oldu. Sessiz
              Tepe: Karabasan ve Seventh Son filmlerinde de rol aldı. Ayrıca,
              Game Of Thrones dizisinde Jon Snow isimli karakteri canlandırdı.
              Oyunculuk yapmadan önce gazeteci, kameraman ve savaş muhaberi
              olmak isteyen Harington, henüz drama ve tiyatro çalışmaları
              okulundayken ilk sahne deneyimini National Theatre'da War Horse
              adlı oyununda Albert adlı karakteri canlandırdı. Daha sonra ilk
              televizyon deneyimi için Game of Thrones adlı dizide Jon Snow
              karakterini canlandıran Harington'ın sahnelerinin büyük bölümü
              İzlanda ve Kuzey Irlanda'da çekildi. 2012 yılında Game of Thrones
              dizisindeki oyunculuğuyla Saturn Ödüllerinde en iyi yardımcı erkek
              oyuncu dalında aday oldu.
            </Text>
          </View>

          {/* movies */}
          <MovieList title="Movies" hideSeeAll data={personMovies} />
        </View>
      )}
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

  icons: {
    borderRadius: 6,
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

  detailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 12,
    backgroundColor: '#404040',
    borderRadius: 9999,
    marginTop: 18,
    padding: 16,
  },

  details: {
    marginLeft: 6,
    borderRightWidth: 2,
    borderRightColor: '#A3A3A3',
    paddingHorizontal: 8,
    alignItems: 'center',
  },

  topText: {
    color: 'white',
    fontWeight: 'semibold',
    textAlign: 'center',
  },

  bottomText: {
    color: '#D4D4D4',
    textAlign: 'center',
  },

  detailsPopularity: {
    marginLeft: 12,
    paddingHorizontal: 8,
    alignItems: 'center',
  },

  biographyContainer: {
    marginVertical: 24,
    marginHorizontal: 16,
    gap: 8,
  },

  biography: {
    color: 'white',
    fontSize: 20,
  },

  content: {
    color: '#A3A3A3',
    letterSpacing: 0.6,
    fontSize: 16,
  },
});
