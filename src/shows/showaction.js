
import axios from "axios"

export const showApiCall=()=>{

return (dispatch)=>{

    axios.get(`http://api.tvmaze.com/shows`).then(resp=>{
     console.log(resp)

     dispatch(getchannelList(resp.data))
     


    }).catch(error=>{
        dispatch(getError(error))  
    })
}


}
export const getchannelList=(channelList)=>{

    return {
        type:"GET_CHANNEL_LIST",
        channelList
    }

}
export const getError=(error)=>{
    return {
        type:"GET_ERROR",
        error
    }

}