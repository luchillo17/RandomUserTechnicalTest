import {
  Body,
  Container,
  Content,
  Header,
  Icon,
  Left,
  List,
  ListItem,
  Right,
  Root,
  Spinner,
  Text,
  Thumbnail,
  Title,
} from 'native-base';
import React, { Component } from 'react';
import { FlatList } from 'react-native';

import { getUserName } from '../utils';
import styles from './styles';

interface Props {
  users: any[];
  isLoading: boolean;
  navigation: any;
  triggerFetchUsers: () => void;
}

export class Home extends Component<Props> {
  goToUser(user) {
    this.props.navigation.navigate('UserDetail', user);
  }

  fetchMoreUsers = () => {
    if (this.props.isLoading) {
      return;
    }

    this.props.triggerFetchUsers();
  };

  renderListFooter = () => {
    return this.props.isLoading ? <Spinner></Spinner> : null;
  };

  render() {
    return (
      <Root>
        <Container style={styles.container}>
          <Header>
            <Body>
              <Title>Home</Title>
            </Body>
            <Right />
          </Header>

          <Content style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }}>
            <List>
              <FlatList
                data={this.props.users}
                keyExtractor={(user: any) => user.login.uuid}
                renderItem={({ item: user }) => (
                  <ListItem avatar onPress={() => this.goToUser(user)}>
                    <Left>
                      <Thumbnail source={{ uri: user.picture.thumbnail }} />
                    </Left>
                    <Body style={{ alignItems: 'flex-start' }}>
                      <Text>{getUserName(user)}</Text>
                    </Body>
                    <Right>
                      <Icon active name='arrow-forward' />
                    </Right>
                  </ListItem>
                )}
                ListFooterComponent={this.renderListFooter}
                onEndReached={this.fetchMoreUsers}
                onEndReachedThreshold={0.5}
              ></FlatList>
            </List>
          </Content>
        </Container>
      </Root>
    );
  }
}
