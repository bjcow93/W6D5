import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './frontend/clock';

const panes = [
  {title: 'one', content: 'I am the first'},
  {title: 'two', content: 'Second pane here'},
  {title: 'three', content: 'Third pane here'}
];

const Root = () => (
  <div>React is working!!
    <Clock />
    <Tabs panes={panes} />
  </div>


  // return new Clock();
);

export default Root;
