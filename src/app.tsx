import { FC } from 'react';

import { BlogComponent } from './containers/blog/blog.component';
import { DIContext, di } from './di-container';

export const App: FC = () => {
  return (
    <div>
      <DIContext.Provider value={di}>
        <BlogComponent />
      </DIContext.Provider>
    </div>
  );
};
