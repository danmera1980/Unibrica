import { ActionReducer, MetaReducer } from '@ngrx/store';

import { localStorageSync } from 'ngrx-store-localstorage';

export const authFeatureKey = 'auth';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return localStorageSync({keys: [authFeatureKey]})(reducer);
}

export const authMetaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];
