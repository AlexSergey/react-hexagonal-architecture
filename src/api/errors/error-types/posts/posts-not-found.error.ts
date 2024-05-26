import type { IError } from '../../common/error.interface';

import { BaseError } from '../../common/base.error';
import { POST_NOT_FOUND } from '../../constants/messages';
import { getStatus } from '../../utils/get-status';

export class PostsNotFoundError extends BaseError implements IError {
  public override code = POST_NOT_FOUND.code;

  public override message = POST_NOT_FOUND.message;

  public override status = getStatus(POST_NOT_FOUND.statusCode);

  public override statusCode = POST_NOT_FOUND.statusCode;

  constructor() {
    super();
    this.name = 'PostsNotFoundError';
    Error.captureStackTrace(this, this.constructor);
  }
}
