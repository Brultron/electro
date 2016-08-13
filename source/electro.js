import React from 'react';
import Dom from 'react-dom';
import Electro from './components/Electro.react.js';
import debug from 'debug-menu'

Dom.render( < Electro / > , document.getElementById('electro-app'))
debug.install();
