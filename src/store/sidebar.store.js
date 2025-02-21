import { create } from 'zustand'

const useSidebarStore = create((set) => {
    toggle: true,
    toggleSidebar: () => set((state) => toggle)
})