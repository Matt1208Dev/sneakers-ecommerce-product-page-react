import { createSlice } from "@reduxjs/toolkit";
import productInfos from "../Data/productInfos";

export const cartSlice = createSlice({
    name: "cart",
    initialState: [{ ...productInfos }],
    reducers: {
        addItem: (state, action) => {
            // On vérifie si l'item est déjà présent dans le panier
            const item = state.find((item) => item.id === action.payload.id);
            if (item && item !== -1) {
                // Si oui, on incrémente sa quantité
                item.quantity = item.quantity + action.payload.quantity;
            } else {
                // Sinon on l'ajoute
                const newItem = {
                    id: action.payload.id,
                    brand: action.payload.brand,
                    title: action.payload.title,
                    price: action.payload.price,
                    discount: action.payload.discount,
                    quantity: 1,
                    thumbnail: action.payload.thumbnail,
                };

                state.push(newItem);
            }
        },
        deleteItem: (state, action) => {
            // On supprime l'élément cible de notre panier en filtrant celui-ci
            state = state.filter((item) => item.id !== action.payload);
            return state;
        },
    },
});
