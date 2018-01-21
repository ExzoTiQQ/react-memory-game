import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GameField from './GameField';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<GameField />, document.getElementById('root'));
registerServiceWorker();
