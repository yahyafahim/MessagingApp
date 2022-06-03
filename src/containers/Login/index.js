import React, {Component} from 'react';
import {View, Text, ScrollView, Image, Dimensions} from 'react-native';
import {Colors, NavService} from '../../config';
import CustomBackground from '../../components/CustomBackground';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import {login} from '../../redux/APIs';
import Header from '../../components/Header';

const {width} = Dimensions.get('screen');

class App extends Component {
  state = {
    username: 'test',
    password: 'test123!',
  };

  setLogin = () => {
    this.setState({loggedIn: true});
  };

  render() {
    const {username, password} = this.state;
    return (
      <CustomBackground>
        <ScrollView
          bounces={false}
          showsVerticalScrollIndicator={false}
          style={{flex: 1}}
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'space-between',
            flexGrow: 1,
          }}>
          <Header title={'Login'} logout={false} />
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flex: 1,
              paddingHorizontal: 40,
            }}>
            <CustomTextInput
              placeholder={'Username'}
              onChangeText={value => this.setState({username: value})}
            />
            <CustomTextInput
              placeholder={'Password'}
              onChangeText={value => this.setState({password: value})}
              secureTextEntry
            />

            <CustomButton
              title={'LOGIN'}
              color={Colors.secondary}
              onPress={async () =>
                await login(username, password, this.setLogin)
              }
            />
          </View>
        </ScrollView>
      </CustomBackground>
    );
  }
}

export default App;
