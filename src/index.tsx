import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Hello from './containers/hello';
import './index.css';
import { interest } from './reducers/index';
import registerServiceWorker from './registerServiceWorker';
import { IStoreState } from './types/index';

const store = createStore<IStoreState,any,any,any>(interest, {
  interest: 1,
  name: 'TypeScript',
});

ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
