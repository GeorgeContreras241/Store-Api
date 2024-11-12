import { configureStore } from "@reduxjs/toolkit"
import userReducer from "@/redux/userSlice"
import menuReducer from "@/redux/menuSlice"
const store = configureStore({
    reducer: {
        user: userReducer,
        menu: menuReducer,
    }
})

export default store;