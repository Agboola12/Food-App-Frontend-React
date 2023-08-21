import { configureStore } from "@reduxjs/toolkit";
import { loginReducer } from "./slices/loginSlice";
import { counterReducer } from "./slices/UserSlice";
import { adminReducer } from "./slices/adminSlice";


const store = configureStore({
    reducer :{
        counter: counterReducer ,
        login: loginReducer,
        admin: adminReducer
    }
})

export default store