export enum ActionTypes {
  LIST_LOADING = 'LIST_LOADING',
  FETCH_LIST_SUCCESS = 'FETCH_LIST_SUCCESS',
  UPDATE_USER_PHOTO = 'UPDATE_USER_PHOTO',
}

export function ListLoading(isLoading) {
  return {
    type: ActionTypes.LIST_LOADING,
    isLoading,
  };
}

export function FetchListSuccess(list) {
  return { type: ActionTypes.FETCH_LIST_SUCCESS, list };
}

export function UpdateUserPhoto(user, picture) {
  return { type: ActionTypes.UPDATE_USER_PHOTO, user, picture };
}

export function fetchUsers() {
  return (dispatch) => {
    dispatch(ListLoading(true));

    const url = 'https://randomuser.me/api?results=10';

    fetch(url)
      .then((res) => res.json())
      .then(
        (response) => {
          dispatch(FetchListSuccess(response.results));
          dispatch(ListLoading(false));
        },
        (error) => {
          console.error(error);
        },
      );
  };
}
