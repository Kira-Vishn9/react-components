import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';

export function render(url: string) {
  const html = ReactDOMServer.renderToString(<div>hoooooool</div>);
  return html;
}
