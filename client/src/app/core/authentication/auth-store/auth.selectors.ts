import { createFeatureSelector, createSelector } from '@ngrx/store';

import { AuthState } from '../auth.interfaces';
import { authFeatureKey } from '.';

const selectAuth = createFeatureSelector<AuthState>(authFeatureKey)

export const selectError = createSelector(
    selectAuth,
    (state) => state.error
);

export const selectIsLoading = createSelector(
    selectAuth,
    (state) => state.isLoading
);

export const selectUser = createSelector(
    selectAuth,
    (state) => state.user
);