import { useEffect, useState } from "react";

export default function useBetterMediaQuery(mediaQueryString) {
  const [matches, setMatches] = useState();

  useEffect(() => {
    const mediaQueryList = window.matchMedia(mediaQueryString);
    const listener = () => setMatches(!!mediaQueryList.matches);
    listener();
    mediaQueryList.addEventListener("change", listener); // updated from .addListener
    return () => mediaQueryList.removeEventListener("change", listener); // updated from .removeListener
  }, [mediaQueryString]);

  return matches;
}
