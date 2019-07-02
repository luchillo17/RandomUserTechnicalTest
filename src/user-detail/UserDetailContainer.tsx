import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { StoreState } from '../store';
import { UpdateUserPhoto } from '../store/actions';
import { isSameUser } from '../utils';
import { UserDetail } from './UserDetail';

interface Props {
  navigation: any;
  users: any[];
  UpdateUserPhoto: typeof UpdateUserPhoto;
}

const mapStateToProps = (state: StoreState): Partial<Props> => ({
  users: state.users.list,
});

const bindActions = (dispatch) =>
  bindActionCreators(
    {
      UpdateUserPhoto,
    },
    dispatch,
  );

export const UserDetailContainer = connect(
  mapStateToProps,
  bindActions,
)(
  class extends Component<Props> {
    render() {
      const {
        users,
        UpdateUserPhoto,
        navigation: {
          state: { params: userParams },
        },
      } = this.props;

      const user = users.find((userItem) => isSameUser(userItem, userParams));

      return (
        <UserDetail
          navigation={this.props.navigation}
          {...{ user, UpdateUserPhoto }}
        />
      );
    }
  },
);
