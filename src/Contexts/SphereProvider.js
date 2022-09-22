import React, { useContext, useState } from "react";

const SphereContext = React.createContext();

export function useSphere() {
  return useContext(SphereContext);
}

export default function SphereProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [content, setContent] = useState("MY POEMS");

  const value = { loading, setLoading, setContent, content };

  return (
    <SphereContext.Provider value={value}>{children}</SphereContext.Provider>
  );
}
