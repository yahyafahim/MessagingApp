import React from 'react';
import {View, Text, TouchableOpacity, Alert} from 'react-native';
import {Colors, NavService} from '../config';
import {deleteMessage} from '../redux/APIs';

export default function Chat({item, type, onDelete = () => {}}) {
  const deleteAlert = () =>
    Alert.alert('Delete', 'Are you sure you want to delete this message?', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Yes',
        onPress: async () => {
          await deleteMessage(item.id);
          onDelete();
        },
      },
    ]);
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onLongPress={deleteAlert}
      onPress={() => NavService.navigate('ChatScreen', {id: item?.id})}
      style={{
        backgroundColor: Colors.secondary,
        padding: 10,
        marginTop: 15,
        borderRadius: 7,
        flex: 1,
      }}>
      <View activeOpacity={0.8} style={{flexDirection: 'row', flex: 1}}>
        <View style={{marginLeft: 10, flex: 1}}>
          <Text
            style={{
              color: Colors.white,
              fontSize: 14,
              fontWeight: '600',
              marginTop: 3,
            }}>
            {type === 'inbox' ? item?.sender : item?.receiver}
          </Text>
          <Text
            style={{
              color: Colors.primary,
              fontSize: 10,
              fontWeight: '500',
              marginTop: 3,
            }}
            numberOfLines={3}>
            {item?.title}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
