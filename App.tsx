import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { Root, StyleProvider, Spinner } from 'native-base';
import React, { Component } from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import { HomeContainer } from './src/home';
import { store } from './src/store';
import getTheme from './src/theme/components';
import variables from './src/theme/variables/platform';
import { UserDetailContainer } from './src/user-detail';

const Navigator = createAppContainer(
  createStackNavigator(
    {
      Home: { screen: HomeContainer },
      UserDetail: { screen: UserDetailContainer },
    },
    {
      initialRouteName: 'Home',
      headerMode: 'none',
    },
  ),
);

export default class App extends Component {
  state = {
    isReady: false,
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.loadFonts();
  }

  async loadFonts() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });

    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <Spinner></Spinner>;
    }

    return (
      <Root>
        <StyleProvider style={getTheme(variables)}>
          <Provider store={store}>
            <Navigator />
          </Provider>
        </StyleProvider>
      </Root>
    );
  }
}
