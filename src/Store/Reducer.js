// const iState={
//     name:'Abdul basit',
//     wishes:["eat","sleep","code"]
// }
// reducer get 2 arg on is state and other is action
const nameReducer=(state="",action)=>{
    // mapDispatchToprops action come here
    if(action.type==="CHANGE_VALUE"){
        return action.payload
    }
    return state
    
}
const wishReducer=(state=[],action)=>{
    // mapDispatchToprops action come here
    if(action.type==="CHNAGE_VALUE"){
        return [...state,action.payload]
    }
    
    return state
    
}
export {nameReducer,wishReducer}