import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IPostViewModel } from '../../features/posts';

const initialState: IPostViewModel[] = [];

export const postsSlice = createSlice({
  initialState,
  name: 'posts',
  reducers: {
    setPosts: (state, action: PayloadAction<IPostViewModel[]>) => {
      return action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPosts } = postsSlice.actions;

export const posts = postsSlice.reducer;
