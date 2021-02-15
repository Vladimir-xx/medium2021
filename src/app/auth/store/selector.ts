import {createFeatureSelector, createSelector} from '@ngrx/store';
import {AuthStateInterface} from '../types/auth-state-interface';
import {AppStateIntarface} from '../../shared/appState.intarface';

export const authFeatureSelector = createFeatureSelector<AppStateIntarface, AuthStateInterface>('auth');

export const isSubmittingSelector = createSelector(
  authFeatureSelector,
  (authState) => authState.isSubmitting
);

