import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {Colors, NavService} from '../config';

const BottomTab = () => (
  <View
    style={{
      backgroundColor: Colors.white,
      height: 80,
      width: '100%',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.0,

      elevation: 24,
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 40,
      alignItems: 'center',
    }}>
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => NavService.navigate('Inbox')}
      style={{alignItems: 'center'}}>
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: Colors.primary,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../assets/inbox.png')}
          style={{
            width: 15,
            height: 15,
            tintColor: Colors.white,
            resizeMode: 'contain',
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 10,
          color: Colors.primary,
          marginTop: 5,
          fontWeight: '700',
        }}>
        INBOX
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => NavService.navigate('Compose')}
      style={{alignItems: 'center', marginBottom: 50}}>
      <View
        style={{
          width: 80,
          height: 80,
          borderRadius: 40,
          backgroundColor: Colors.primary,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../assets/add.png')}
          style={{
            width: 30,
            height: 30,
            tintColor: Colors.white,
            resizeMode: 'contain',
          }}
        />
      </View>
    </TouchableOpacity>
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => NavService.navigate('Sent')}
      style={{alignItems: 'center'}}>
      <View
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
          backgroundColor: Colors.primary,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../assets/sent.png')}
          style={{
            width: 15,
            height: 15,
            tintColor: Colors.white,
            resizeMode: 'contain',
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 10,
          color: Colors.primary,
          marginTop: 5,
          fontWeight: '700',
        }}>
        SENT
      </Text>
    </TouchableOpacity>
  </View>
);

export default BottomTab;
