import React, { Component } from 'react';

import { UserDetail } from './UserDetail';

interface Props {
  navigation: any;
}

export class UserDetailContainer extends Component<Props> {
  render() {
    return <UserDetail navigation={this.props.navigation} />;
  }
}
