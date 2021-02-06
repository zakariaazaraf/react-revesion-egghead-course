import React from 'react';
import ReactDOM from 'react-dom';
import propTypes, { object } from 'prop-types'
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

/* const firstChildren = React.createElement('span', {style: {color: 'red'}}, 'first content')
const secondChildren = React.createElement('span', {style: {color: 'blue'}}, 'second content')
const fragment = React.createElement(React.Fragment, null, firstChildren, secondChildren) */

// FUNCTION COMPENENT
const Message = props => <div className = 'message'>{props.children}</div>

const element = (
  <>
    <h2>Funstion Compenent With children Nesting & Manipulation</h2>
    <div className='container'>
      Hello this rendrened by the <strong>jsx</strong> syntax {
        <>
          <span>Hello</span> <span>World !</span>
        </>
      }
      <p>
          paragraph conntent
      </p>
    </div>
    {/* call the func compenent */}
    <Message> {/* FIRST SYNTAX OF FUNC COMPENENT */}
      Message compenent first call
      <Message children='second call'/> {/* SECOND STNTAX OF FUNC COMPENENT */}
    </Message>
  </>
)

ReactDOM.render(element, document.getElementById('root'))
//console.log(<Message>third call</Message>)

const SayHello = ({firstProp, secondProp}) => {
  return (
    <>
      <h2>propTypes Revesion</h2>  
      Hello FirstProp: {firstProp}, secondProp: {secondProp}
    </>
  )
}

// VALIDATE THE COPMENENT Hard Coded
SayHello.propTypes = {
  // HARD CODED
  /* firstProp(prop, propName, compenentName){
    function isEmpty(object){
      for(let pr in object){
        if(object.hasOwnProperty(pr)){
          return true
        }
      }
      return false
    }
    if(!isEmpty(prop)){
      return new Error(`Hey, the ${compenentName} Compenent Required ${propName} children`)
    }
  } */  

  // USE THE REACT PACKGE
  firstProp: propTypes.string.isRequired,
  secondProp: propTypes.string.isRequired
}

ReactDOM.render(<SayHello firstProp = {23} secondProp = 'Second Prop Passed'/>, document.getElementById('propTypes'))
  




