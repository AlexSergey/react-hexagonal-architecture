import { FC } from 'react';

import { IPostViewModel } from '../../api/features/posts';

export const Post: FC<IPostViewModel> = ({ contentSnippet, readingTime, title }) => {
  return (
    <article>
      <h2>{title}</h2>
      <p>{contentSnippet}</p>
      <p>Estimated reading time: {readingTime} minutes</p>
    </article>
  );
};
