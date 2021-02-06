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

/* // CREATE REACT ELEMENT USING API
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
}) */

// TRY RENDRENING BY THE JSX SYNTAX

const firstChildren = React.createElement('span', {style: {color: 'red'}}, 'first content')
const secondChildren = React.createElement('span', {style: {color: 'blue'}}, 'second content')
const fragment = React.createElement(React.Fragment, null, firstChildren, secondChildren)
const element = (
  <div className='container'>
    Hello this rendrened by the <strong>jsx</strong> syntax {fragment}
    <p>
        paragraph conntent
    </p>
  </div>
  
)

ReactDOM.render(element, document.getElementById('root'))
console.log(fragment)


