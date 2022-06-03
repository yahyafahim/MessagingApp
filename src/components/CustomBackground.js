import React from 'react';
import {ImageBackground} from 'react-native';
import {getStatusBarHeight} from 'react-native-status-bar-height';

const BGImage = require('../assets/background.jpeg');

export default ({children}) => {
  return (
    <ImageBackground
      source={BGImage}
      style={{flex: 1, paddingTop: getStatusBarHeight()}}>
      {children}
    </ImageBackground>
  );
};
