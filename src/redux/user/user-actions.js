import { UserActionTypes } from './user-types';

export const setCurrentUser = hidden => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: hidden
});