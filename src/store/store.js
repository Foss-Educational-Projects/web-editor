import { create } from 'zustand'

const store = create((set) => ({
    fontSize: 16,
    tabWidth: 4,
    autosave: false,
    useSpace: false,
    snippets: false,
    themeing: 'github',
    language: 'javascript',
    toggleSnippets: () => set((state) => ({ snippets: !state.snippets})),
    changeThemes: (theme) => set((state) => ({ themeing: theme }))
}))
export { store };