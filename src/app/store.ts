import { configureStore } from '@reduxjs/toolkit'
import lightLevelSlice from '../features//lightLevel/lightLevelSlice'
//import optionsLevelSlice from '../features//lightLevel/lightLevelSlice'

export const store = configureStore({
  reducer: {
    lightLevels: lightLevelSlice,
    //options: optionsReducer,
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
