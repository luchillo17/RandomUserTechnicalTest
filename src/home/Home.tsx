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
  Text,
  Thumbnail,
  Title,
} from 'native-base';
import React, { Component } from 'react';

import { getUserName } from '../utils';
import styles from './styles';

interface Props {
  navigation: any;
  users: any;
}

export class Home extends Component<Props> {
  goToUser(user) {
    this.props.navigation.navigate('UserDetail', user);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Body>
            <Title>Home</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List>
            {this.props.users.map((user, i) => (
              <ListItem avatar key={i} onPress={() => this.goToUser(user)}>
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
            ))}
          </List>
        </Content>
      </Container>
    );
  }
}
