import axios from 'axios'


export const getUser=()=>{

return async dispatch=>{
dispatch(fetchUserBegins())
axios.get(`https://jsonplaceholder.typicode.com/todos`)
.then(res => {
console.log(res)
dispatch(addUser(res.data))
}).catch(error=>{
    console.log(error)
//dispatch(showError(error))
})


}
}

export const fetchUserBegins=()=>{

    return{
        type:"FETCH_USER_BEGIN"
    }
}

export const addUser=(payload)=>{
    console.log(payload)
    return {
        type:"ADD_USER",
        payload
    }
}

export const deleteUser=(id)=>{
    console.log(id)
return{
    type:"DELETE_USER",
    id
}
}
