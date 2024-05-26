import { inject, injectable } from 'inversify';

import type { IErrorHandlerServices } from '../../core/error-handler/interfaces';
import type { IPost, IPostsRepository } from './interfaces';

import { ERROR_HANDLER_SERVICES } from '../../core/error-handler/di.constants';
import { PostsNotFoundError } from '../../errors';

@injectable()
export class PostsRepository implements IPostsRepository {
  constructor(@inject(ERROR_HANDLER_SERVICES) private readonly errorHandler: IErrorHandlerServices) {}

  async getAllPosts(): Promise<IPost[] | undefined> {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      if (response.ok) {
        return response.json();
      }
      this.errorHandler.catchError(new PostsNotFoundError());
    } catch (e) {
      if (e instanceof Error) {
        this.errorHandler.catchError(e);
      }
    }

    return undefined;
  }
}
