import React from 'react';
import ReactDOM from 'react-dom';
import propTypes, { object } from 'prop-types'
import './index.css';
import App from './App';
import Body from './Body'
import './styledCompenent.css'


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

ReactDOM.render(<SayHello firstProp ='First Prop Passed' secondProp = 'Second Prop Passed'/>, document.getElementById('propTypes'))

// STARTING THE STYLE REVESION
const StyledCompenent = ({className, size, style, ...restProps}) => {
  const generateSize = size ? `box--${size}` : ''
  return (
    <div className={`box ${generateSize}`} style={{fontStyle: 'italic', ...style}} {...restProps} />
  )
}

const styledCompenent = <div>
  <h2>Styled Compenent</h2>
  <StyledCompenent size='small' style= {{ backgroundColor: 'blue' }}>Smaller Box</StyledCompenent>
  <StyledCompenent size='medium' style={{ backgroundColor: 'pink' }}>Medium Box</StyledCompenent>
  <StyledCompenent size='larger' style={{ backgroundColor: 'greenyellow' }}>Larger Box</StyledCompenent>
</div>

ReactDOM.render(styledCompenent, document.getElementById('styledCompenent'))

// CURRENT STATET
  const state = {counter: 0, username: ''}

// HANDEL EVENT 
function StateHard (){

  function handelClick(){
    setState({counter: state.counter + 1})
  }

  function handelChange(e){
    setState({username: e.target.value})
  }

  return (
    <>
      <h2>Hnadel Event Hard Coded</h2>
      <div>
        <p>There have been {state.counter} events</p>
        <div><button onClick={handelClick}>Click Me</button></div>
      </div>

      <div>
        <div><input onChange={handelChange} type='text' name='counter'/></div>
        <p>You Typed: {state.username}</p>
      </div>
    </>
  )
}

function setState(newState){
      Object.assign(state, newState)
      renderApp()
  }

function renderApp () {
  ReactDOM.render(<StateHard/>, document.getElementById('handelEvenet'))
}
renderApp()

// UEE HOCK STATE

function useLocalStorageState(key, defaultValue){
  const [state, setState] = React.useState(() => localStorage.getItem(key) || defaultValue)

  React.useEffect(()=>{
    localStorage.setItem(key, state)
  }, [key, state])
  return [state, setState]
}

const Greeting = () => {

  /* const [prenom, setPrenom] = React.useState(localStorage.getItem('firstname') || '') */
  //Use Lazy Initilizer With useState => Get data when it's nessary {First Time In Thhis Case}
  /* const [prenom, setPrenom] = React.useState(() => localStorage.getItem('firstname') || '') */
  const [prenom, setPrenom] = useLocalStorageState('firstname', '')
  const handelFirstname = e => setPrenom(e.target.value)

  const [lastname, setLastname] = React.useState( localStorage.getItem('lastname') || '')
  const handelLastname = e => setLastname(e.target.value)

  // USE useEffect
  React.useEffect(()=>{
    //window.localStorage.setItem('firstname', prenom)
    window.localStorage.setItem('lastname', lastname)
  },)

  return (
    <>
      <h2>Handel useState hock</h2>
      <form style={{fontSize: '1.5rem', margin: '1rem'}}>
        <div>
          <label htmlFor='firstname'>firstName</label>
          <input id='firstname' onChange={handelFirstname} value={prenom}/>
          {prenom ?  <>Hello, <strong>{prenom}</strong> </> : 'Enter First Name'}
        </div>

        <div>
          <label htmlFor='lastname'>lastname</label>
          <input id='lastname' onChange= {handelLastname} value={lastname}/>
          {lastname ? <> Hello, <strong>{lastname}</strong> </> : 'Enter Last Name'}
        </div>
      </form>
    </>
  )
}

ReactDOM.render(<Greeting />, document.getElementById('stateHock'))

// FROM AND VALIDATION ON THE FLY
function Form(){

  return(
    <>
      <h2>Form Validation</h2>
      <form>
        <div>
          <label htmlForm='username'>Username:</label>
          <input id='username' type='text'/>
          <p></p>
        </div>
        
        <div>
          <label htmlForm='email'>Email</label>
          <input id='email' type='email'/>
          <p></p>
        </div>
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

ReactDOM.render(<Form />, document.getElementById('formValidate'))


  




