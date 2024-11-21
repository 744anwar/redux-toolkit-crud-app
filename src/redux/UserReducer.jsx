import { createSlice } from "@reduxjs/toolkit";
import { userListData } from "../data/Data";

const userReducer = createSlice({
    name:"Users",
    initialState: userListData,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload);
        },
        updateUser: (state, action) => {
            const {id, name, email} = action.payload;
            const update = state.find(user => user.id == id);
            if(update) {
                update.name = name;
                update.email = email;
            }
        },
        deleteUser: (state, action) => {
            const {id} = action.payload;
            const update = state.find(user => user.id == id);
            if(update) {
                return state.filter(userdelete => userdelete.id !== id);
            }
        },
    },
});

export const {addUser, updateUser, deleteUser} = userReducer.actions; 
export default userReducer.reducer;