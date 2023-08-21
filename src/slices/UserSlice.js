import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    initialState:{
        product:[]
        
    },
    name: "counter",
    reducers : {
        increase : (state,actions)=>{
            let found =state.product.find((val)=>val.id==actions.payload);
            if(found){
                // found.id=actions.payload;
                found.number=found.number+1;
                console.log(state.product)
                return state
            }else{
                state.product =[...state.product,{id:actions.payload,number:1}] 
                return state
            }
        },
        decrease : (state,actions)=>{
            let found =state.product.find((val)=>val.id==actions.payload);
            if(found){
                // found.id=actions.payload;
                found.number=found.number-1;
                console.log(state.product)
                return state
            }else{
                state.product =[...state.product,{id:actions.payload,number:1}] 
                return state
            }
        },
        Reset:(state,actions)=>{
            state.product=actions.payload
        },
        
    },
})

export const counterReducer = counterSlice.reducer;
export const {increase, decrease, profile,Reset} = counterSlice.actions