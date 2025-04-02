import { useEffect, useMemo, useState } from "react";

export default function useLiftOff(threshold = 50) {
  const [scrollTop, setScrollTop] = useState(0);

  const liftOff = useMemo(() => scrollTop > threshold, [scrollTop, threshold]);

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const handleScroll = (_: Event) => {
      setScrollTop(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [setScrollTop]);

  return { liftOff };
}
