

const initState={
    user_monster:1,
    user_item:5
}



export default (state=initState,{type,payload})=>{
    switch(type){
        case "DRESSSAVE":
            state.user_monster=payload.monser
            state.user_item=payload.item
    }
    return state
}