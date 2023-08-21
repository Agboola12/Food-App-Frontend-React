import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
    initialState: {
        loginUser: {}
    },
    name: "login",
    reducers: {
        setuser:(state,actions)=>{
            state.loginUser = actions.payload
        }
    }
})


export const loginReducer = loginSlice.reducer;
export const {setuser } = loginSlice.actions