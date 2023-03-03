import { configureStore } from "@reduxjs/toolkit";

import editorSlice from "../features/editorSlice";
export const store = configureStore({
	reducer:{
		editor: editorSlice
	}
})