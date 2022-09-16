import { useEffect } from "react";
import { useSphere } from "../Contexts/SphereProvider";

export default function useIntroAnim() {
  const { setLoading } = useSphere();
  const introTime = 250;

  useEffect(() => {
    setLoading(true);

    const timeOutID = setTimeout(function () {
      setLoading(false);
    }, introTime);

    return () => {
      clearTimeout(timeOutID);
    };
  }, []);
}
