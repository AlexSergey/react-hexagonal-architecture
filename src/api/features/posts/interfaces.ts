export interface IPost {
  body: string;
  title: string;
}

export interface IPostViewModel {
  contentSnippet: string;
  readingTime: number;
  title: string;
}

export interface IPostsRepository {
  getAllPosts(): Promise<IPost[] | undefined>;
}

export interface IPostsUseCases {
  fetchPosts(): Promise<void>;
}

export interface IPostsServices {
  calculateReadingTime(content: string): number;
}
