import { configureStore } from "@reduxjs/toolkit"
import userReducer from "../redux/UserReducer";


const Store = configureStore({
    reducer: {
        users: userReducer,
    }
})

export default Store;  
