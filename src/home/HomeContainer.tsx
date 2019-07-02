import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { StoreState } from '../store';
import { fetchUsers } from '../store/actions';
import { Home } from './Home';

interface Props {
  users: any[];
  isLoading: boolean;
  navigation: any;
  fetchUsers: () => void;
}

const mapStateToProps = (state: StoreState): Partial<Props> => ({
  users: state.users.list,
  isLoading: state.users.isLoading,
});

const bindActions = (dispatch) =>
  bindActionCreators(
    {
      fetchUsers,
    },
    dispatch,
  );

export const HomeContainer = connect(
  mapStateToProps,
  bindActions,
)(
  class extends Component<Props> {
    constructor(props) {
      super(props);
    }

    componentDidMount() {
      this.props.fetchUsers();
    }

    render() {
      return (
        <Home
          navigation={this.props.navigation}
          users={this.props.users}
          isLoading={this.props.isLoading}
          triggerFetchUsers={() => this.props.fetchUsers()}
        ></Home>
      );
    }
  },
);
