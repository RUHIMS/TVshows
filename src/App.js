import React from 'react';
import {connect} from 'react-redux';
import {inc,dec} from "./action"

class Counter extends React.Component{
constructor(props){
  super(props);
  this.state={
    count:0
  }
}

inc=()=>{
  this.props.inc()
}
dec=()=>{
  this.props.dec();
}
reset=()=>{
  this.props.dispatch({type:"RESET"})
}
render(){
  return(
<div>
  <span>
  <button onClick={this.inc}>+</button>
  <span>{this.props.count}</span>
  <button onClick={this.dec}>-</button>

  </span>
  <button onClick={this.reset}>RESET</button>


</div>

  )

  }

  
}
const mapStateToProps=(state)=>{
  console.log(state)
return {count:state.count}
}

const mapDispatchToProps={
inc,
dec

}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)