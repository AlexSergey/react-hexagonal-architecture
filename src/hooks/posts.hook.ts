import { useContext, useEffect, useState } from 'react';

import { DIContext, IDiContainer } from '../di-container';
import { IPostViewModel, fetchPostsUseCase } from '../features/posts';

export const usePosts = (): IPostViewModel[] => {
  const [posts, setPosts] = useState<IPostViewModel[]>([]);
  const { postsRepository } = useContext<IDiContainer>(DIContext);
  useEffect(() => {
    fetchPostsUseCase(postsRepository).then((p) => setPosts(p));
  }, [postsRepository]);

  return posts;
};
