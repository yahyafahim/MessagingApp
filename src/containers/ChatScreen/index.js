import React, {Component} from 'react';
import {
  Dimensions,
  FlatList,
  ScrollView,
  Text,
  TextInput,
  View,
} from 'react-native';
import CustomBackground from '../../components/CustomBackground';
import Header from '../../components/Header';
import {Colors, Common} from '../../config';
import {getMessageDetails} from '../../redux/APIs';

class ChatScreen extends Component {
  state = {messageDetails: []};
  async componentDidMount() {
    const {id} = this.props?.route?.params;
    const messageDetails = await getMessageDetails(id);
    this.setState({messageDetails});
  }

  render() {
    const {messageDetails} = this.state;
    return (
      <CustomBackground>
        <Header title={'Message Details'} back />
        <ScrollView
          bounces={false}
          style={{flex: 1, marginVertical: 20}}
          showsVerticalScrollIndicator={false}>
          <View
            style={{
              backgroundColor: Colors.secondary,
              marginHorizontal: 20,
              borderRadius: 7,
              padding: 20,
            }}>
            <Text
              style={{
                color: Colors.primary,
                fontWeight: '500',
                fontSize: 18,
              }}>
              From:{' '}
              <Text
                style={{
                  color: Colors.white,
                }}>
                {messageDetails?.sender}
              </Text>
            </Text>
            <Text
              style={{
                color: Colors.primary,
                fontWeight: '500',
                fontSize: 18,
                marginTop: 10,
              }}>
              To:{' '}
              <Text
                style={{
                  color: Colors.white,
                }}>
                {messageDetails?.receiver}
              </Text>
            </Text>
            <Text
              style={{
                color: Colors.primary,
                fontWeight: '500',
                fontSize: 18,
                marginTop: 10,
              }}>
              Title:{' '}
              <Text
                style={{
                  color: Colors.white,
                }}>
                {messageDetails?.title}
              </Text>
            </Text>
            <Text
              style={{
                color: Colors.primary,
                fontWeight: '500',
                fontSize: 18,
                marginTop: 10,
              }}>
              Body:{' '}
              <Text
                style={{
                  color: Colors.white,
                }}>
                {messageDetails?.body}
              </Text>
            </Text>
          </View>
        </ScrollView>
      </CustomBackground>
    );
  }
}

export default ChatScreen;
