import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MpgApp from './mpgApp';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <MpgApp />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
