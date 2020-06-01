import React from 'react';
import {connect} from "react-redux";
import {showApiCall} from "./showaction"
 
class App extends React.Component{

    async componentDidMount(){

        this.props.showApiCall()
    }
    renderShows=(row)=>{
console.log(row)
console.log(row.name)
return(<div style={{borderBottom:"1px solid black"}}>
<h5 style={{display:"inline"}}>
  Title:  </h5><span>{row.name}</span>

  <h5>Language:</h5><i>{row.language}</i>


</div>)

    }
    render(){
        console.log(this.props.channelList)
        return(<div>
            channel list
            {this.props.channelList.map(row=>{
            return(<div>{this.renderShows(row)}</div>)

            })}
        </div>)
    }
    
   
}



const mapDispatchToProps={
    showApiCall
}
const mapStateToProps=(state)=>{
console.log(state)
return{channelList:state.channelList}

}

export default connect(mapStateToProps,mapDispatchToProps)(App);
