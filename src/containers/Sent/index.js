import React, {Component} from 'react';
import {FlatList} from 'react-native';
import Header from '../../components/Header';
import Chat from '../../components/Chat';
import {getSentChats} from '../../redux/APIs';
import CustomBackground from '../../components/CustomBackground';
import BottomTab from '../../components/Bottomtab';

class App extends Component {
  state = {myChatList: []};

  async componentDidMount() {
    this._unsubscribe = this.props.navigation.addListener('focus', async () => {
      const myChatList = await getSentChats();
      console.log(myChatList);
      this.setState({myChatList});
    });
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  render() {
    const {myChatList} = this.state;
    return (
      <CustomBackground>
        <Header title={'Sent'} />
        <FlatList
          showsVerticalScrollIndicator={false}
          data={myChatList}
          contentContainerStyle={{
            paddingHorizontal: 20,
            paddingBottom: 20,
          }}
          style={{flex: 1, marginTop: 15}}
          renderItem={({item}) => (
            <Chat
              item={item}
              onDelete={async () => {
                const myChatList = await getSentChats();
                this.setState({myChatList});
              }}
            />
          )}
        />
        <BottomTab />
      </CustomBackground>
    );
  }
}

export default App;
