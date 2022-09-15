import React, { useContext } from "react";

const SphereContext = React.createContext();

export function useSphere() {
  return useContext(SphereContext);
}

export default function SphereProvider() {
  return <SphereContext.Provider value={...value}>
    {children}
  </SphereContext.Provider>
}
