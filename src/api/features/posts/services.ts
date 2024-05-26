import { injectable } from 'inversify';

import type { IPostsServices } from './interfaces';

@injectable()
export class PostsServices implements IPostsServices {
  calculateReadingTime(content: string): number {
    const wordsPerMinute = 200; // Average reading speed
    const wordCount = content.split(' ').length;

    return Math.ceil(wordCount / wordsPerMinute);
  }
}
