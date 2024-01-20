import { ActionReducer, ActionReducerMap, MetaReducer, createReducer } from "@ngrx/store";
import { localStorageSync } from "ngrx-store-localstorage";
import { merge } from "rxjs";
import { Action } from "rxjs/internal/scheduler/Action";


export interface AppState {
}

export const initialState: AppState = {
}

export const reducer: ActionReducerMap<AppState> = createReducer(
    initialState
)



export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
   return localStorageSync({
    keys: ['auth'],
    rehydrate: true,
    removeOnUndefined:true
  })(reducer);
}
  

export const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];