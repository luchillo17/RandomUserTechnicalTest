import { isSameUser } from '../utils';
import { ActionTypes } from './actions';

export interface UsersState {
  list: [];
  isLoading: boolean;
}

export const initialState: UsersState = {
  list: [],
  isLoading: true,
};

export function usersReducer(state: UsersState = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_LIST_SUCCESS:
      return {
        ...state,
        list: action.list,
      };

    case ActionTypes.LIST_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
      };

    case ActionTypes.UPDATE_USER_PHOTO:
      const userIndex = state.list.findIndex((user) =>
        isSameUser(action.user, user),
      );

      const newUser = {
        ...action.user,
        picture: {
          large: action.picture,
          medium: action.picture,
          thumbnail: action.picture,
        },
      };

      return {
        ...state,
        list: state.list.splice(userIndex, 1, newUser),
      };

    default:
      return state;
  }
}
