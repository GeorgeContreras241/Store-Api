import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        users: [],
        allUsers: [],/*Todos los productos*/
        cart: [], /*Carrito de compras*/
        filterSearch: [],/*Filtro de input*/
        product:{}
    },
    reducers: {
        addUser: (state, action) => {
            const data = action.payload;
            state.users = data;
            state.allUsers = data;
        },
        filterUser: (state, action) => {
            const filter = action.payload;
            const filterUser = state.allUsers.filter((user) => user.title.toLowerCase().includes(filter.toLowerCase()));
            state.filterSearch = filterUser;
        },
        filterCategory: (state, action) => {
            const category = action.payload;
            const { option1, option2, option3, option4 } = category;

            const filtered = state.allUsers.filter((item) => {
                return (
                    (option1 && item.category === "electronics") ||
                    (option2 && item.category === "jewelery") ||
                    (option3 && item.category === "men's clothing") ||
                    (option4 && item.category === "women's clothing")                  
                );
            });
            state.users = filtered.length ? filtered : state.allUsers;
        },
        addCart: (state, action) => {
            const id = action.payload;
            const products = state.allUsers.find((user) => user.id === id);
            if (products && !state.cart.some((user) => user.id === id)) {
                state.cart.push({ ...products, cantidad: 1, priceTotal: products.price })
            }
        },
        delateCart: (state, action) => {
            const id = action.payload;
            const products = state.cart.filter((user) => user.id !== id);
            state.cart = products
        },
        aumentCant: (state, action) => {
            const id = action.payload;
            state.cart = state.cart.map((product) => (
                product.id === id ? { ...product, cantidad: product.cantidad + 1, priceTotal: product.price * ++product.cantidad } : product
            ));
        },
        disCant: (state, action) => {
            const id = action.payload;
            state.cart = state.cart.map((product) => (
                id >= 1 && product.id === id ? { ...product, cantidad: product.cantidad - 1 } : product
            ))
        },
    }
})

export const { addUser, filterUser, filterCategory, addCart, delateCart, aumentCant, disCant, addRange } = userSlice.actions;
export default userSlice.reducer;