import { create } from "zustand";

type SessionStore = {
  errorMessage: string;
  setErrorMessage: (errorMsg: string) => void;
};

export const useSessionStore = create<SessionStore>((set) => ({
  errorMessage: "",
  setErrorMessage: (errorMessage) => set({ errorMessage }),
}));
