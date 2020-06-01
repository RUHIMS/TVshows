const initialState={

loading:false,
channelList:[],
error:null


}

export const showReducer=(state=initialState,action)=>{
console.log(state)
console.log(action)

 switch(action.type){
     case 'GET_CHANNEL_LIST':
         return {...state,channelList:action.channelList}
     case 'GET_ERRORGET_ERROR':
         return {...state,errror:action.error}
    default: return state
 }
}