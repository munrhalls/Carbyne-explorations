import React, { useContext, useState } from "react";

const SphereContext = React.createContext();

export function useSphere() {
  return useContext(SphereContext);
}

export default function SphereProvider({children}) {
  const [loading, setLoading] = useState(false);

  const value = {loading, setLoading}

  return <SphereContext.Provider value={value}>
    {children}
  </SphereContext.Provider>
}
