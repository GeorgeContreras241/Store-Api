const { createSlice } = require("@reduxjs/toolkit");

const menuSlice = createSlice({
    name: "menu",
    initialState:{
        menu : false,
    },
    reducers:{
        handleMenu:(state, action)=> {
            state.menu = action.payload;
        }
    }
})

export const { handleMenu } = menuSlice.actions;
export default menuSlice.reducer;