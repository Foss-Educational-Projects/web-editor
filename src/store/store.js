import { create } from 'zustand'

const store = create((set) => ({
    fontSize: 16,
    tabWidth: 4,
    autosave: false,
    useSpace: false,
    snippets: false,
    fontFamily: 'CascadiaCode',
    theme: 'github',
    language: 'javascript',
    toggleSnippets: () => set((state) => ({ snippets: !state.snippets})),
    changeTheme: (theme) => set(() => ({ theme: theme })),
    changeTabWidth:(tabWidth) => set(() => ({ tabWidth: tabWidth })),
    changeFontFamily: (fontFamily) => set(() => ({ fontFamily: fontFamily })),
    changeFontSize: (fontSize) => set(() => ({ fontSize: fontSize }))
}))
export { store };