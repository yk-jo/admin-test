import { StateCreator, create } from "zustand";
import { PersistOptions, createJSONStorage, persist } from "zustand/middleware";

type AuthStoreType = {
  accessToken?: string;
  tokenType?: string;
  setToken: (accessToken: string, tokenType: string) => void;
  clear: () => void;
};

type PersistAuthStoreType = (
  config: StateCreator<AuthStoreType>,
  ooptions: PersistOptions<AuthStoreType>
) => StateCreator<AuthStoreType>;

export const useAuthStore = create<AuthStoreType>(
  (persist as PersistAuthStoreType)(
    (set) => ({
      setToken: (accessToken, tokenType) => set({ accessToken, tokenType }),
      clear: () => set({ accessToken: undefined, tokenType: undefined }),
    }),
    {
      name: "voinosis-admin-auth",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
