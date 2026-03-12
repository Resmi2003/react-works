import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:'counter',
    initialState:{
        count:0
    },
    reducers:{
      increment:(state)=>{
        state.count += 1     // it is equal to state.count = state.count + 1
      },
      decrement:(state)=>{
        state.count -= 1
      },
      reset:(state)=>{
        state.count = 0
      },
      handleByIncrement:(state,action)=>{     // if we put handleByIncrement directly in button as onclick, then it will work. but no need of that if input field is empty. so for that we created another function incrementByAmount
        state.count += action.payload
      }

    }
})


export const{increment,decrement,reset,handleByIncrement} = counterSlice.actions  // counterSlice.actions → exported so components can dispatch actions
export default counterSlice.reducer  // counterSlice.reducer → exported so store can update state when actions happen