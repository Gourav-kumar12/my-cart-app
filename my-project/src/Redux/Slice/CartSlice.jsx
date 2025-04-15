import {createSlice} from "@reduxjs/toolkit";

// 1. sabse phle slice ko create krna pdta h fhir 
//2. object bna kr 3 parameters dene pdte h {name ,initialState,reducers/functionality}
///3. export krna hota h phle reducer ki value ko //actions se // and CartSlice ko .reducer se 
 export const CartSlice = createSlice({
    name:"cart",
    initialState:[],

    reducers:{
        //action 
        add:(state,action)=>{
            state.push(action.payload)
        },
        remove:(state,action)=>{
            return state.filter((item)=> item.id !== action.payload);
        },
    },
})

export const {add,remove} = CartSlice.actions;
export default CartSlice.reducer;