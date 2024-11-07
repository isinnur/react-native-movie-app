import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import {useRoute} from '@react-navigation/native';

export default function MovieScreen() {
  const {params: item} = useRoute();
  useEffect(() => {
    //call the movie details api
  }, [item]);
  return (
    <ScrollView contentContainerStyle={{paddingBottom: 20}}>
      <Text>MovieScreen</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
