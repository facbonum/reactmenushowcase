// useParallax.jsx
import { useTransform } from "framer-motion";
import { MotionValue } from "framer-motion";

// Custom hook to handle the parallax effect
export function useParallax(value, distance) {
    return useTransform(value, [0, 1], [-distance, distance]);
}
