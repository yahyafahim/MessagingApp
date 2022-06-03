import React, {Component} from 'react';

// Navigation here
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {NavService} from './config';
import {connect} from 'react-redux';

//Screens
import {Login, Inbox, Compose, Sent, ChatScreen} from './containers';

const Stack = createNativeStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {backgroundColor: 'transparent'},
        animation: 'fade',
      }}
      initialRouteName={'Inbox'}>
      <Stack.Screen
        name="Inbox"
        component={Inbox}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Compose"
        component={Compose}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sent"
        component={Sent}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ChatScreen"
        component={ChatScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

class Navigation extends Component {
  state = {
    ready: false,
    // ready: true,
    initialRouteName: 'Login',
  };
  componentDidMount() {
    setTimeout(() => {
      const {token} = this.props;
      if (token) {
        this.setState({initialRouteName: 'AppStack'});
      }
      this.setState({ready: true});
    }, 2000);
  }
  render() {
    const {initialRouteName, ready} = this.state;
    if (!ready) return null;
    return (
      <NavigationContainer
        ref={ref => NavService.setTopLevelNavigator(ref)}
        screenOptions={{animation: 'simple_push'}}>
        <Stack.Navigator
          screenOptions={{
            contentStyle: {backgroundColor: 'transparent'},
            animation: 'simple_push',
          }}
          initialRouteName={initialRouteName}>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="AppStack"
            component={AppStack}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

function mapStateToProps({reducer: {token}}) {
  return {
    token,
  };
}

export default connect(mapStateToProps)(Navigation);
