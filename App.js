import React, {Component} from 'react';
import {
  View,
  StatusBar,
  LogBox,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Nav from './src';
import {store} from './src/redux';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {Loader} from './src/config';
import Toast from 'react-native-toast-message';

LogBox.ignoreAllLogs(true);

class App extends Component {
  render() {
    return (
      <Wrapper>
        <GestureHandlerRootView style={{flex: 1, backgroundColor: 'white'}}>
          <StatusBar
            translucent={true}
            backgroundColor="transparent"
            barStyle="dark-content"
          />
          <Provider store={store}>
            <Loader />
            <Nav />
            <Toast ref={ref => Toast.setRef(ref)} />
          </Provider>
        </GestureHandlerRootView>
      </Wrapper>
    );
  }
}

export default App;

function Wrapper({children}) {
  if (Platform.OS === 'ios')
    return (
      <KeyboardAvoidingView style={{flex: 1}} behavior="padding">
        {children}
      </KeyboardAvoidingView>
    );
  return <View style={{flex: 1}}>{children}</View>;
}
