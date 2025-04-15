import { configureStore } from "@reduxjs/toolkit";
import {CartSlice} from "./Slice/CartSlice";

// Redux follows camelCase for objects and lowercase variable names:
// Use store (lowercase) because it's a variable/object, not a class.
// ✅ Store (capital S) is not mandatory, but it’s unconventional and may cause errors.
export const store = configureStore({

    //key or value pass krni padti h slice ki 
    //reducer me kitne slice add krne h 
    reducer:{
        cart:CartSlice.reducer,
    }
});
