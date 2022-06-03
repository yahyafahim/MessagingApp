import React, {useState} from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import {Colors} from '../config';

export default function CustomTextInput(props) {
  return (
    <View style={{width: '100%', marginTop: 15}}>
      <View
        style={[
          {
            width: '100%',
            height: 60,
            backgroundColor: Colors.secondary,
            paddingHorizontal: 15,
            borderRadius: 7,
            flexDirection: 'row',
            alignItems: 'center',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 1,
            },
            shadowOpacity: 0.22,
            shadowRadius: 2.22,

            elevation: 3,
          },
          props.containerStyle,
        ]}>
        <TextInput
          style={{
            marginLeft: 10,
            flex: 1,
            color: Colors.white,
            height: '100%',
          }}
          placeholderTextColor={Colors.white}
          {...props}
        />
      </View>
    </View>
  );
}
export function ProfileTextInput(props) {
  const {placeholder} = props;
  return (
    <View style={{width: '100%', marginTop: 40}}>
      <Text style={{color: 'black', fontWeight: '600', fontSize: 14}}>
        {placeholder}
      </Text>
      <View
        style={{
          width: '100%',
          borderBottomWidth: 1,
          borderBottomColor: '#858595',
        }}>
        <TextInput
          style={{width: '100%', height: 50, color: 'black'}}
          placeholderTextColor={'#7E7E7E'}
          {...props}
        />
      </View>
    </View>
  );
}
