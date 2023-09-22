import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: null,
        loading: false
    },
    reducers: {
        addUser: (state, action)=>{
            state.user = action.payload;
        },
        removeUser: (state, action)=>{
            state.user = null;
        },
        setUserLoading: (state, action)=>{
            state.loading = action.payload
        }
    }
})

export const {addUser, removeUser, setUserLoading} = userSlice.actions;
export default userSlice.reducer;