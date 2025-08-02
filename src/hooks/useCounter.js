import { useState, useEffect } from "react";

export function useCounter(start, end, duration) {
    const [count, setCount] = useState(start);

    useEffect(() => {
        if (start >= end) {
            setCount(end);
            return;
        }

        let startTimestamp = null;
        let animationFrameId;

        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = timestamp - startTimestamp;
            const progressCount = Math.min(
                Math.floor((progress / duration) * (end - start) + start),
                end
            );
            setCount(progressCount);
            if (progress < duration) {
                animationFrameId = requestAnimationFrame(step);
            }
        };

        animationFrameId = requestAnimationFrame(step);

        return () => cancelAnimationFrame(animationFrameId);

    }, [start, end, duration]); 
    return count;
}
