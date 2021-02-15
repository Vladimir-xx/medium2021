import {AuthStateInterface} from '../types/auth-state-interface';
import {Action, createReducer, on} from '@ngrx/store';
import {registerAction} from './actions/register.action';

const initialState: AuthStateInterface = {
  isSubmitting: false,
  name: 'Vladimir'
};

const authReducer = createReducer(
  initialState,
  on(registerAction, (state): AuthStateInterface => ({
    ...state,
    isSubmitting: true,
    name: 'Vladimir-ok!))'
  }))
);

// tslint:disable-next-line:typedef
export function reducer(state: AuthStateInterface, action: Action) {

  return authReducer(state, action);
}
