import React, { useContext, useState } from "react";

const SphereContext = React.createContext();

export function useGlobContext() {
  return useContext(SphereContext);
}

export default function SphereProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("");
  const [globColor, setGlobColor] = useState("");

  const value = {
    loading,
    setLoading,
    setContent,
    setGlobColor,
    globColor,
    content,
  };

  return (
    <SphereContext.Provider value={value}>{children}</SphereContext.Provider>
  );
}
