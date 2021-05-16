import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import { ChunkExtractor } from '@loadable/server';
import Routes from '../Routes';

export default (req, store) => {
  const statsFile = path.resolve('./build/loadable-stats.json');
  const extractor = new ChunkExtractor({ statsFile });
  extractor.getScriptElements();
  extractor.getLinkElements();
  extractor.getStyleElements();

  const content = renderToString(
    extractor.collectChunks(
      <Provider store={store}>
        <StaticRouter location={req.path}>
          <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
      </Provider>,
    ),
  );

  return `
    <html>
      <body>
        <div id="root">${content}</div>
        <script src="./bundle.js"></script>
      </body>
    </html>
  `;
};
