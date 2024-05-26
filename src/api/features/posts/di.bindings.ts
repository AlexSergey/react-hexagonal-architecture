import { ContainerModule } from 'inversify';

import { POSTS_REPOSITORY, POSTS_SERVICES, POSTS_USE_CASES } from './di.constants';
import { IPostsRepository, IPostsServices, IPostsUseCases } from './interfaces';
import { PostsRepository } from './repositories';
import { PostsServices } from './services';
import { PostsUseCases } from './use-cases';

export const postsDiContainer = new ContainerModule((bind) => {
  bind<IPostsRepository>(POSTS_REPOSITORY).to(PostsRepository).inSingletonScope();
  bind<IPostsUseCases>(POSTS_USE_CASES).to(PostsUseCases).inSingletonScope();
  bind<IPostsServices>(POSTS_SERVICES).to(PostsServices).inSingletonScope();
});
