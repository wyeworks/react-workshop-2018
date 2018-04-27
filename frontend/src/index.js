import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WyeTrello from './WyeTrello';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<WyeTrello />, document.getElementById('root'));
registerServiceWorker();
