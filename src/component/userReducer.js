const initialState={
    userdet:[],
    loading:false
};

export const userRed=(state=initialState,action)=>{

switch(action.type){

case "FETCH_USER_BEGIN":

return {
    ...state,
    loading:true
}

case "ADD_USER":
        return {
            ...state,
            userdet:action.payload,
            loading:false
        }
case "DELETE_USER":
    { 
        console.log(state.userdet)
        console.log(action.id)
        var userdet=state.userdet.filter(row=>row.id!=action.id)
        console.log(userdet)
        return{
        ...state,
        userdet,
        loading:false
    }
}
   
        default:
            return state

}



}