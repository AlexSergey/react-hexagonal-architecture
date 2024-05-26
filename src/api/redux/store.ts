import { configureStore } from '@reduxjs/toolkit';

import { posts } from './posts/posts.slice';

export const store = configureStore({
  reducer: {
    posts,
  },
});

export const dispatcher = store.dispatch;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
