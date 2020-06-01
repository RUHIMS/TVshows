import React from 'react';
import {connect} from 'react-redux';
import {getUser} from './userAction';
import {deleteUser} from './userAction';



class Test extends React.Component{
    async componentDidMount(){
        this.props.getUser()

    }
    deleteRow=(id)=>{
console.log("hi")
        this.props.deleteUser(id)
    }
   
    render(){
        console.log(this.props.userDet)
        return(
            <div>
                Learning Redux Thunk
                {   this.props.userDet.map(row=>{
            return (
                <div style={
                    {
                        borderBottom:"2px solid black"
                    }
                }>
                <p>
              <b>Id:</b>  {row.id}
                
                </p>


<p>
<b>Title</b>  {row.title}
  
  </p>
  <button onClick={()=>this.deleteRow(row.id)}>Delete</button>
  </div>
            )
              
            
        }) }
            </div>
        )
    }
}

const mapDispatchToProps={
    getUser,
    deleteUser
}
const mapStateToProps=(state)=>{
    console.log(state.userdet)
   return {userDet:state.userdet} 
}

export default connect(mapStateToProps,mapDispatchToProps)(Test);