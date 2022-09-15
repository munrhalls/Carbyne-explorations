import React, { useState, useEffect } from "react";
import { useSphere } from "../Contexts/SphereProvider";

export default function useIntroTimedToggle() {
  const { setLoading } = useSphere();

  useEffect(() => {
    setLoading(true);

    const timeOutID = setTimeout(function () {
      setLoading(false);
    }, 1500);

    return () => {
      clearTimeout(timeOutID);
    };
  }, []);
}
