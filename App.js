import React from 'react';
import { View } from 'react-native';
import HomeScreen from "./screens/HomeScreen";
import { render } from 'react-dom';

export default class App extends React.Component {
  render() {
  return (
    <View>
      <HomeScreen/>
    </View>
  );
  }
}