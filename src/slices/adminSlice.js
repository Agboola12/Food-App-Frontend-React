import { createSlice } from "@reduxjs/toolkit";

const adminSlice = createSlice({
    initialState: {
        loginAdmin: {}
    },
    name: "admin",
    reducers: {
        setAdmin:(state,actions)=>{
            state.loginAdmin = actions.payload
        }
    }
})


export const adminReducer = adminSlice.reducer;
export const {setAdmin } = adminSlice.actions