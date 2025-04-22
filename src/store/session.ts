import { Session, User } from "@supabase/supabase-js";
import { create } from "zustand";

interface SessionStore {
  session: Session | null;
  setSession: (session: Session | null) => void;
  clearSession: () => void;
  user: User | null;
  setUser: (user: User | null) => void;
  clearUser: () => void;
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
}

export const useSessionStore = create<SessionStore>()((set) => ({
  session: null,
  setSession: (session) => set({ session }),
  clearSession: () => set({ session: null }),
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
  isLoading: false,
  setLoading: (isLoading) => set({ isLoading }),
}));
