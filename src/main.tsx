import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import { I18nextProvider } from 'react-i18next';
import { Root } from './Root';
import { store } from './app/store';
import i18n from './utils/i18n';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <I18nextProvider i18n={i18n}>
          <Root />
        </I18nextProvider>
      </Provider>
    </HashRouter>
  </React.StrictMode>,
);
