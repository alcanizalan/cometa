import type { Dispatch, SetStateAction } from "react";

export function useFishMovement(
    startX: number,
    startY: number,
    setPosition: Dispatch<SetStateAction<{ x: number; y: number }>>,
    intervalMs: number
) {

    const FISH_WIDTH = 150;
    const FISH_HEIGHT = 100;

    const id = setInterval(() => {

        let x: number;
        do {
            x = startX + (Math.random() - 0.5) * 1000;
        } while (x < 0 || x > window.innerWidth - FISH_WIDTH);

        let y: number;
        do {
            y = startY + (Math.random() - 0.5) * 1000;
        } while (y < 0 || y > window.innerHeight - FISH_HEIGHT);

        setPosition({ x, y });

    }, intervalMs);

    return () => clearInterval(id);
}