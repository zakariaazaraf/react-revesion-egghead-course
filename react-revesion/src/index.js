import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Body from './Body'

/* ReactDOM.render(
  <React.StrictMode>
    <App />
    <Body />
  </React.StrictMode>,
  document.getElementById('root')
); */

// CREATE REACT ELEMENT USING API
const reactElement = React.createElement('div', {
  className: 'container',
  children: [
    React.createElement('p', {
      className: 'paragraph',
      children: React.createElement('span', {style: {color: 'blue'}}, 'Span Content')
    }),
    React.createElement('p', null, 'second Paragraph')
  ],  
  style: {color: 'red'}
})

ReactDOM.render(reactElement, document.getElementById('root'))
console.log(reactElement)

