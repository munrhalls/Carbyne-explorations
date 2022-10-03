import React, { useContext, useState } from "react";

const GlobContext = React.createContext();

export function useGlobContext() {
  return useContext(GlobContext);
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

  return <GlobContext.Provider value={value}>{children}</GlobContext.Provider>;
}
