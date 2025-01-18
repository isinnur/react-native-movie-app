import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import HomeScreen from './screens/HomeScreen';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer, StackRouter} from '@react-navigation/native';
import MovieScreen from './screens/MovieScreen';
import PersonScreen from './screens/PersonScreen';

const Stack = createStackNavigator();
const App = () => {
  return (
    // <View style={styles.container}>
    //   <HomeScreen />
    // </View>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Movie"
          component={MovieScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Person"
          component={PersonScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
