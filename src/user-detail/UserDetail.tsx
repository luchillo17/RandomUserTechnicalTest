import {
  Body,
  Button,
  Card,
  CardItem,
  Container,
  Content,
  Header,
  Icon,
  Left,
  Right,
  Text,
  Thumbnail,
  Title,
} from 'native-base';
import React, { Component } from 'react';

import { getUserAddress, getUserName } from '../utils';
import styles from './styles';

interface Props {
  navigation: any;
}

export class UserDetail extends Component<Props> {
  renderUserDetails(user) {
    return (
      <Card transparent>
        <CardItem>
          <Left>
            <Thumbnail large source={{ uri: user.picture.large }} />
            <Body>
              <Text>{getUserName(user)}</Text>
              <Text>
                <Text style={{ fontWeight: 'bold' }}>Gender:</Text>{' '}
                {user.gender}
              </Text>
              <Text>
                <Text style={{ fontWeight: 'bold' }}>Age:</Text> {user.dob.age}
              </Text>
            </Body>
          </Left>
        </CardItem>

        <CardItem>
          <Body>
            <Text>
              <Text style={{ fontWeight: 'bold' }}>Email:</Text> {user.email}
            </Text>
            <Text>
              <Text style={{ fontWeight: 'bold' }}>Phone:</Text> {user.phone}
            </Text>
            <Text>
              <Text style={{ fontWeight: 'bold' }}>Cellphone:</Text> {user.cell}
            </Text>
            <Text>
              <Text style={{ fontWeight: 'bold' }}>State:</Text>{' '}
              {user.location.state}
            </Text>
            <Text>
              <Text style={{ fontWeight: 'bold' }}>Address:</Text>{' '}
              {getUserAddress(user)}
            </Text>
            <Text>
              <Text style={{ fontWeight: 'bold' }}>Postal Code:</Text>{' '}
              {user.location.postcode}
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }

  render() {
    const user = this.props.navigation.state.params;

    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name='ios-arrow-back' />
            </Button>
          </Left>

          <Body style={{ flex: 3 }}>
            <Title>{user ? getUserName(user) : 'Invalid User'}</Title>
          </Body>

          <Right />
        </Header>

        <Content padder>
          {!user ? <Text>"Invalid User."</Text> : this.renderUserDetails(user)}
        </Content>
      </Container>
    );
  }
}
