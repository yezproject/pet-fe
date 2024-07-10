import { create } from "zustand"

export const useUserStore = create((set) => ({
    fullName: "",
    email: "",
    setFullName: (fullName) => set({ fullName }),
    setEmail: (email) => set({ email }),
}))
