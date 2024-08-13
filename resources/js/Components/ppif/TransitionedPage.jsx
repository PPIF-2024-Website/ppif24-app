import { router } from "@inertiajs/react";
import React, { useEffect, useMemo, useState } from "react";

export default function TransitionedPage({ Page }) {
    const [transitioning, setTransitioning] = useState(null);

    useEffect(() => {
        router.on("start", () => setTransitioning(true));
        router.on("finish", () => setTransitioning(false));
    }, []);

    const pageTransition = useMemo(
        () =>
            transitioning
                ? "animate-[fade-out_1s_ease-out]"
                : "animate-[fade-in_1s_ease-out]",
        [transitioning],
    );

    return (
        <div className={pageTransition}>
            <Page />
        </div>
    );
}
