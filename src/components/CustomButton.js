import React from 'react';
import {Dimensions, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../config';
const {width} = Dimensions.get('screen');

export default function CustomButton(props) {
  const {color, title, onPress, buttonStyle} = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[
        {
          width: width - 80,
          height: 50,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: color ? color : Colors.primary,
          marginTop: 30,
          borderRadius: 7,
        },
        buttonStyle,
      ]}>
      <Text style={{fontSize: 14, color: Colors.white, fontWeight: '600'}}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
