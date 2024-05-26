import { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { appDiContainer } from '../../core/di-container';
import { IPostViewModel, IPostsUseCases, POSTS_USE_CASES } from '../../features/posts';
import { RootState } from '../../redux/store';

export const usePosts = (): IPostViewModel[] => {
  const postsUseCases = useMemo<IPostsUseCases>(
    () => appDiContainer.get<IPostsUseCases>(POSTS_USE_CASES),
    [appDiContainer],
  );
  const posts = useSelector((state: RootState) => state.posts);

  useEffect(() => {
    postsUseCases.fetchPosts();
  }, [postsUseCases]);

  return posts;
};
