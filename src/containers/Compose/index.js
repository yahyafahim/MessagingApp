import React, {Component} from 'react';
import {View} from 'react-native';
import Header from '../../components/Header';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';
import {sendMessage} from '../../redux/APIs';
import CustomBackground from '../../components/CustomBackground';
import BottomTab from '../../components/Bottomtab';
import {Colors} from '../../config';

class App extends Component {
  state = {
    title: '',
    body: '',
    recipient: '',
  };

  render() {
    const {title, body, recipient} = this.state;
    return (
      <CustomBackground>
        <Header title={'Compose'} />
        <View style={{flex: 1, paddingHorizontal: 20, alignItems: 'center'}}>
          <CustomTextInput
            placeholder={'Recipient'}
            onChangeText={value => this.setState({recipient: value})}
          />
          <CustomTextInput
            placeholder={'Title'}
            onChangeText={value => this.setState({title: value})}
          />
          <CustomTextInput
            placeholder={'Body'}
            onChangeText={value => this.setState({body: value})}
            multiline={true}
            containerStyle={{
              height: 200,
              alignItems: 'flex-start',
              paddingVertical: 10,
            }}
          />
          <CustomButton
            title={'SEND'}
            color={Colors.secondary}
            onPress={async () =>
              await sendMessage(title, body, recipient.toLowerCase())
            }
          />
        </View>
        <BottomTab />
      </CustomBackground>
    );
  }
}

export default App;
