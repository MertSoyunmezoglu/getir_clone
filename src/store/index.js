import { configureStore } from "@reduxjs/toolkit";
import auth from "./auth";
import modal from "./modal";

const store = configureStore({
    reducer:{
        auth,
        modal
    }
})
export default store