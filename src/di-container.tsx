import { createContext } from 'react';

import { IPostsRepository } from './features/posts';
import { PostsRepository } from './features/posts/repositories';

export interface IDiContainer {
  postsRepository: IPostsRepository;
}

export const di = {
  postsRepository: new PostsRepository(),
};
export const DIContext = createContext<IDiContainer>(di);
