import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './component/App';
import registerServiceWorker from './js/registerServiceWorker';

if (module.hot) {
    module.hot.accept();
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
