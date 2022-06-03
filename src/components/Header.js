import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {Colors} from '../config';
import NavService from './NavService';

const Header = ({title, logout = true, back = false}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {back && (
        <TouchableOpacity
          onPress={() => NavService.goBack()}
          style={{
            backgroundColor: Colors.secondary,
            padding: 10,
            borderRadius: 4,
            position: 'absolute',
            left: 20,
          }}>
          <Image
            source={require('../assets/back.png')}
            style={{
              width: 17,
              height: 17,
              resizeMode: 'contain',
              tintColor: Colors.primary,
            }}
          />
        </TouchableOpacity>
      )}
      <View>
        <Text
          style={{
            color: Colors.secondary,
            fontWeight: '700',
            fontSize: 24,
          }}>
          {title}
        </Text>
      </View>
      {logout && (
        <TouchableOpacity
          onPress={() => NavService.reset(0, [{name: 'Login'}])}
          style={{
            backgroundColor: Colors.secondary,
            padding: 10,
            borderRadius: 4,
            position: 'absolute',
            right: 20,
          }}>
          <Image
            source={require('../assets/logout.png')}
            style={{
              width: 17,
              height: 17,
              resizeMode: 'contain',
              tintColor: Colors.primary,
            }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
export default Header;
