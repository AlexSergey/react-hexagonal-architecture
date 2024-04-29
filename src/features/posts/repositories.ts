import { IPost, IPostsRepository } from './interfaces';

export class PostsRepository implements IPostsRepository {
  async getAllPosts(): Promise<IPost[]> {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');

    return response.json();
  }
}
