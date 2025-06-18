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
    captureEditorCode: (code) => set(() => ({ editorCode: code })),
    toggleSnippets: () => set((state) => ({ snippets: !state.snippets})),
    changeTheme: (theme) => set(() => ({ theme: theme })),
    changeTabWidth:(tabWidth) => set(() => ({ tabWidth: tabWidth })),
    changeFontFamily: (fontFamily) => set(() => ({ fontFamily: fontFamily })),
    changeFontSize: (fontSize) => set(() => ({ fontSize: fontSize })),
    changeLanguage: (language) => set(() => ({ language: language })),
    toggleSpacing: () => set((state) => ({ useSpace: !state.useSpace }))
}))
export { store };