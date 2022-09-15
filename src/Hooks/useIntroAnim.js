import { useEffect } from "react";
import { useSphere } from "../Contexts/SphereProvider";

export default function useIntroAnim() {
  const { setLoading } = useSphere();

  useEffect(() => {
    setLoading(true);

    const timeOutID = setTimeout(function () {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeOutID);
    };
  }, []);
}
