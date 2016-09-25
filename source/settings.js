import React from 'react';
import Dom from 'react-dom';
import Settings from './components/Settings.react.js';
import debug from 'debug-menu';
import 'react-select/dist/react-select.css';

Dom.render(<Settings/>, document.getElementById('settings'));
debug.install();
