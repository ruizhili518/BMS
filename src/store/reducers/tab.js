import {createSlice} from "@reduxjs/toolkit";

const tabSlice = createSlice({
    name: 'tab',
    initialState: {
        isCollapsed: false,
    },
    reducers:{
        collapsedHandler: (state) => {
            state.isCollapsed = !state.isCollapsed;
        }
    }
})

export const { collapsedHandler } = tabSlice.actions;
export default tabSlice.reducer;