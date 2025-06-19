import { create } from 'zustand'

const store = create((set) => ({
    fontSize: 16,
    tabWidth: 4,
    autosave: false,
    useSpace: false,
    snippets: true,
    fontFamily: 'CascadiaCode',
    theme: 'github',
    language: 'javascript',
    editorCode: '',
    editorOutput: '',
    captureEditorCode: (code) => set(() => ({ editorCode: code })),
    captureEditorOutput: (output) => set(() => ({ editorOutput: output })),
    toggleSnippets: () => set((state) => ({ snippets: !state.snippets})),
    changeTheme: (theme) => set(() => ({ theme: theme })),
    changeTabWidth:(tabWidth) => set(() => ({ tabWidth: tabWidth })),
    changeFontFamily: (fontFamily) => set(() => ({ fontFamily: fontFamily })),
    changeFontSize: (fontSize) => set(() => ({ fontSize: fontSize })),
    changeLanguage: (language) => set(() => ({ language: language })),
    toggleSpacing: () => set((state) => ({ useSpace: !state.useSpace }))
}))
export { store };