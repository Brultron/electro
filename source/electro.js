import React from 'react';
import Dom from 'react-dom';
import Crate from './components/crate/Crate.react.js';
import Deck from './components/deck/Deck.react.js';
import Remote from 'remote';

const windowType = Remote.require('./index').getWindowType();
console.log(windowType);

let component;
switch (windowType) {
  case 'crate':
    component = <Crate/>;
    break;
  case 'deck':
    component = <Deck/>;
    break;
  default:
    component = <div></div>;
    break;
}
Dom.render(component, document.getElementById('electro-app'))
