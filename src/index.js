import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from './store'
import App from './components/App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore()

ReactDOM.render(
<Provider store={store}>
  <Router>
    <App />
  </Router>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
