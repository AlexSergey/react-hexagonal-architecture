import { inject, injectable } from 'inversify';

import type { IErrorHandlerServices } from '../../core/error-handler/interfaces';
import type { ILoggerServices } from '../../core/logger/interfaces';
import type { IPostsRepository, IPostsServices } from './interfaces';

import { ERROR_HANDLER_SERVICES } from '../../core/error-handler/di.constants';
import { LOGGER_SERVICES } from '../../core/logger/di.constants';
import { PostsNotFoundError } from '../../errors';
import { setPosts } from '../../redux/posts/posts.slice';
import { dispatcher } from '../../redux/store';
import { POSTS_REPOSITORY, POSTS_SERVICES } from './di.constants';

@injectable()
export class PostsUseCases {
  public constructor(
    @inject(POSTS_REPOSITORY) private readonly postsRepository: IPostsRepository,
    @inject(POSTS_SERVICES) private readonly postsServices: IPostsServices,
    @inject(LOGGER_SERVICES) private readonly logger: ILoggerServices,
    @inject(ERROR_HANDLER_SERVICES) private readonly errorHandler: IErrorHandlerServices,
  ) {}

  async fetchPosts(): Promise<void> {
    const posts = await this.postsRepository.getAllPosts();

    if (!posts) {
      this.errorHandler.catchError(new PostsNotFoundError());

      return;
    }

    const modifiedPosts = posts.map((post) => ({
      contentSnippet: `${post.body.substring(0, 100)}...`,
      readingTime: this.postsServices.calculateReadingTime(post.body),
      title: post.title,
    }));

    this.logger.log('Posts were fetched');

    dispatcher(setPosts(modifiedPosts));
  }
}
