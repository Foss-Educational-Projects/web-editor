import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	value: "",
	HTMLValue: ""
}

export const editorSlice = createSlice({
	name: 'editor',
	initialState,
	reducers: {
		setValue: (state, action) => {
			state.value = action.payload;
		},
		setHTMLValue: (state, action) => {
			state.HTMLValue = action.payload;
		}
	}
})
export const { setValue, setHTMLValue } = editorSlice.actions
export default editorSlice.reducer;