import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { User } from '../model/user.model';
import { AuthActionTypes } from '../auth/auth.actions';

type AuthState = {
  loggedIn: boolean,
  user: User
}

const initialAuthState: AuthState = {
  loggedIn: false,
  user: undefined
}

function authReducer(state: AuthState = initialAuthState, action) : AuthState {
  switch(action.type) {
    case AuthActionTypes.LoginAction: 
      return {
        loggedIn: true,
        user: action.payload.user
      }

    default: 
      return state;
  }
}
 
export interface AppState {
  auth: AuthState
}

export const reducers: ActionReducerMap<AppState> = {
  auth: authReducer
};


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
