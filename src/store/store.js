import { create } from 'zustand'

const store = create((set) => ({
    fontSize: 16,
}))
export { store };