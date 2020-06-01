import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import App from "./shows/app"
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux'
import Test from './component/test';
import thunk from 'redux-thunk';
import {userRed} from './component/userReducer'
import {showReducer} from "./shows/showReducer"

/*const initialstate={
  count:0
}
const reducer=(state=initialstate,action)=>{
  switch(action.type){
    case "INC":
      return {count:state.count+1}
      case "DEC":
        return {count:state.count-1}
        case "RESET":
          return {count:0}
default: return state
  }
}



const store=createStore(reducer);

*/
//store.dispatch({type:"INC"})

//const store=createStore(userRed,applyMiddleware(thunk))
const store=createStore(showReducer,applyMiddleware(thunk))
console.log(store.getState())
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
