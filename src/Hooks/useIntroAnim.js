import { useEffect } from "react";
import { useGlobContext } from "../Contexts/SphereProvider";

export default function useIntroAnim() {
  const { setLoading } = useGlobContext();
  const introTime = 750;

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
