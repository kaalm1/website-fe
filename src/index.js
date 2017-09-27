import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import "react-pdf-reader/dist/TextLayerBuilder.css"
import "react-pdf-reader/dist/PdfReader.css";

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
