import { createSlice } from "@reduxjs/toolkit";


    const initialState = {
        open:false,
        data:false
    }

    const modal = createSlice({
        name:'modal',
        initialState,
        reducers:{
         openModal:(state,action)=>{
            state.open = action.payload.name
            state.data = action.payload.data || false
         },
         closeModal:(state)=>{
            state.open= false
            state.data= false
        }
    }
    })

    export const {openModal , closeModal} = modal.actions // action
    export default modal.reducer//reducers