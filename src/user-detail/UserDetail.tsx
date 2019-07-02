import * as ImagePicker from 'expo-image-picker';
import { ImageInfo } from 'expo-image-picker/build/ImagePicker.types';
import * as Permissions from 'expo-permissions';
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

import { UpdateUserPhoto } from '../store/actions';
import { getUserAddress, getUserName } from '../utils';
import styles from './styles';

interface Props {
  navigation: any;
  user: any;
  UpdateUserPhoto: typeof UpdateUserPhoto;
}

export class UserDetail extends Component<Props> {
  getPhoto = async (user) => {
    try {
      const { status } = await Permissions.askAsync(
        Permissions.CAMERA,
        Permissions.CAMERA_ROLL,
      );

      if (status !== 'granted') {
        return;
      }

      const result = await ImagePicker.launchCameraAsync();

      console.log('PhotoResult: ', result);

      if (result.cancelled) {
        return;
      }

      this.props.UpdateUserPhoto(user, (result as ImageInfo).uri);
    } catch (error) {
      console.log('ImagePicker error: ', error);
    }
  };

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

        <CardItem>
          <Button onPress={() => this.getPhoto(user)}>
            <Icon name='camera' />
            <Text>Take new thumbnail photo</Text>
          </Button>
        </CardItem>
      </Card>
    );
  }

  render() {
    const user = this.props.user;

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
