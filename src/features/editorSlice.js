import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: ""
}

export const editorSlice = createSlice({
	name: 'editor',
	initialState,
	reducers: {
		setValue: (state, action) => {
			state.value = action.payload;
		}
	}
})
export const { setValue } = editorSlice.actions
export default editorSlice.reducer;