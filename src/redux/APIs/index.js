import Toast from 'react-native-toast-message';
import {store} from '../index';
import axios from 'axios';
import {Common, NavService} from '../../config';

var passwordValidator = require('password-validator');
var schema = new passwordValidator();
schema.is().min(6).is().max(100);

let token = store.getState()?.reducer?.token;

axios.defaults.baseURL = Common.baseURL;

function storeUpdate() {
  token = store.getState()?.reducer?.token;

  console.log(token);

  axios.defaults.headers.common['Authorization'] = `Token ${token}`;
}

function dispatch(action) {
  store.dispatch(action);
}

function loaderStart() {
  dispatch({type: 'LOADER_START'});
}

function loaderStop() {
  dispatch({type: 'LOADER_STOP'});
}

export async function login(username, password) {
  if (!username && !password)
    return Toast.show({
      text1: 'Please enter all info',
      type: 'error',
      visibilityTime: 3000,
    });
  if (!schema.validate(password))
    return Toast.show({
      text1: 'Password not valid (Use at least six character)',
      type: 'error',
      visibilityTime: 3000,
    });

  const params = {
    username,
    password,
  };

  try {
    loaderStart();
    const response = await axios.post('api-token-auth/', params);
    console.log(response);
    if (response.status === 200) {
      Toast.show({
        text1: 'Login Successful',
        type: 'success',
        visibilityTime: 3000,
      });
      dispatch({type: 'SAVE_TOKEN', payload: response?.data?.token});
      NavService.reset(0, [{name: 'AppStack'}]);
    }
    loaderStop();
  } catch (e) {
    loaderStop();
    console.log(e.response);
    Toast.show({
      text1: 'Invalid username or password',
      type: 'error',
      visibilityTime: 3000,
    });
  }
}

export async function getChats() {
  storeUpdate();

  try {
    loaderStart();
    const response = await axios.get('messages/');
    console.log(response);
    loaderStop();

    if (response.status === 200) {
      return response?.data?.reverse();
    }
    return [];
  } catch (e) {
    loaderStop();
    console.log(e.response);
    Toast.show({
      text1: e.response?.data?.detail || 'Something went wrong',
      type: 'error',
      visibilityTime: 3000,
    });
    NavService.reset(0, [{name: 'Login'}]);
    return [];
  }
}

export async function sendMessage(title, body, receiver) {
  storeUpdate();
  const params = {
    title,
    body,
    receiver,
  };
  try {
    loaderStart();
    console.log(params);
    const response = await axios.post('messages/', params);
    console.log(response);
    loaderStop();

    if (response.status === 200) {
      Toast.show({
        text1: 'Message sent',
        type: 'success',
        visibilityTime: 3000,
      });
      NavService.goBack();
    }
    return;
  } catch (e) {
    loaderStop();
    console.log(e.response);
    Toast.show({
      text1: e.response?.data?.detail || 'Something went wrong',
      type: 'error',
      visibilityTime: 3000,
    });
    // NavService.reset(0, [{name: 'Login'}]);
    return [];
  }
}

export async function getSentChats() {
  storeUpdate();

  try {
    loaderStart();
    const response = await axios.get('messages/sent/');
    console.log(response);
    loaderStop();

    if (response.status === 200) {
      return response?.data?.reverse();
    }
    return [];
  } catch (e) {
    loaderStop();
    console.log(e.response);
    Toast.show({
      text1: e.response?.data?.detail || 'Something went wrong',
      type: 'error',
      visibilityTime: 3000,
    });
    NavService.reset(0, [{name: 'Login'}]);
    return [];
  }
}

export async function getMessageDetails(id) {
  storeUpdate();

  try {
    loaderStart();
    const response = await axios.get(`messages/${id}/`);
    console.log(response);
    loaderStop();

    if (response.status === 200) {
      return response?.data;
    }
    return [];
  } catch (e) {
    loaderStop();
    console.log(e.response);
    Toast.show({
      text1: e.response?.data?.detail || 'Something went wrong',
      type: 'error',
      visibilityTime: 3000,
    });
    return [];
  }
}

export async function deleteMessage(id) {
  storeUpdate();

  try {
    loaderStart();
    const response = await axios.delete(`messages/${id}/`);
    console.log(response);
    loaderStop();

    if (response.status === 200) {
      Toast.show({
        text1: 'Message deleted',
        type: 'success',
        visibilityTime: 3000,
      });
    }
    return;
  } catch (e) {
    loaderStop();
    console.log(e.response);
    Toast.show({
      text1: e.response?.data?.detail || 'Something went wrong',
      type: 'error',
      visibilityTime: 3000,
    });
    return;
  }
}
