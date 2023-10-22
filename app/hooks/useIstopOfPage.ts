import { useEffect, useState } from "react";

export const useIsTopOfPage = (): boolean => {
    const [goingUp, setGoingUp] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const { scrollY } = window;
            setGoingUp(scrollY === 0);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return goingUp;
};