import { useEffect } from "react";
import { useGlobContext } from "../Contexts/SphereProvider";

export default function useIntroAnim() {
  const { setLoading } = useGlobContext();

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
