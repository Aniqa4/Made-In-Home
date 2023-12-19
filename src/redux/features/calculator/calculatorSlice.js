import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    calculator: 0
}
const calculatorSlice = createSlice({
    name: 'calculatorSlice',
    initialState,
    reducers: {}
})

export default calculatorSlice.reducer;