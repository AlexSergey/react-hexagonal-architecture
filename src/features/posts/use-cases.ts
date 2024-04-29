import { IPost, IPostViewModel, IPostsRepository } from './interfaces';
import { calculateReadingTime } from './services';

export const fetchPostsUseCase = async (postsRepository: IPostsRepository): Promise<IPostViewModel[]> => {
  const posts: IPost[] = await postsRepository.getAllPosts();

  return posts.map((post) => ({
    contentSnippet: `${post.body.substring(0, 100)}...`,
    readingTime: calculateReadingTime(post.body),
    title: post.title,
  }));
};
