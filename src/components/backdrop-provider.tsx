import { IMG_BASE_URL } from "@/services/tmdb-service";
import { createContext, useContext, useState, ReactNode } from "react";

type BackdropProviderState = {
  backdrop: string | null;
  loading: boolean;
  setBackdrop: (imageUrl: string) => void;
};

const initialBackdrop: BackdropProviderState = {
  backdrop: null,
  loading: false,
  setBackdrop: () => null,
};

const BackdropProviderContext =
  createContext<BackdropProviderState>(initialBackdrop);

export function BackdropProvider({ children }: { children: ReactNode }) {
  const [backdrop, setBackdrop] = useState("");
  const [loading, setLoading] = useState(false);

  const value = {
    backdrop,
    loading,
    setBackdrop: (imageUrl: string) => {
      setLoading(true);
      setBackdrop(`${IMG_BASE_URL}/original/${imageUrl}`);
      setLoading(false);
    },
  };

  return (
    <BackdropProviderContext.Provider value={value}>
      {children}
    </BackdropProviderContext.Provider>
  );
}

export const useBackdrop = () => {
  const context = useContext(BackdropProviderContext);

  if (context === undefined)
    throw Error("useBackdrop must be used within a backdrop provider");

  return context;
};
