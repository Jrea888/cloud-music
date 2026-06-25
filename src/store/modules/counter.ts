import {createSlice} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        count: 100
    },
    reducers: {
        updateCount(state, action) {
            state.count = action.payload
        }
    }
})

export const {updateCount} = counterSlice.actions
export default counterSlice.reducer
