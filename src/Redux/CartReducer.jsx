import { createSlice } from '@reduxjs/toolkit'

const Cartreducer = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    addcart(State, action) {
      let temp = State.findIndex((cur) => cur._id == action.payload._id)
      if (temp > -1) {
        if (State[temp].quantity < 5) {
          State[temp].quantity++
        }
      } else {
        let qnt = action.payload
        qnt.quantity = 1
        State.push(qnt)
      }
    },
    remove(State, action) {
      return State.filter((cur, index) => cur != action.payload)
    },
    decrement(State, action) {
      let temp = State.findIndex((cur) => cur._id == action.payload._id)
      if (State[temp].quantity > 1) {
        State[temp].quantity--
      } else {
        return State.filter((cur, index) => cur._id != action.payload._id)
      }
    },
  },
})

export const { addcart, remove, decrement } = Cartreducer.actions
export default Cartreducer.reducer
