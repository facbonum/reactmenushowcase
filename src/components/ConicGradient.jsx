"use client"

import { motion, useMotionValue, useTransform } from "framer-motion"
import { useEffect, useRef, useState } from "react"

export default function ConicGradient() {
    const ref = useRef(null)
    const [{ width, height, top, left }, measure] = useElementDimensions(ref)

    const gradientX = useMotionValue(0.5)
    const gradientY = useMotionValue(0.5)

    // Normalize coordinates relative to the div itself
    const background = useTransform(() => {
        const x = gradientX.get() * 2000 - left
        const y = gradientY.get() * 2000 - top
        return `conic-gradient(from 0deg at ${x}px ${y}px,rgb(255, 255, 7),rgb(117, 117, 23),rgb(134, 137, 34),rgb(255, 231, 53))`
    })

    useEffect(() => {
        measure()  // Measure dimensions on load
    }, [])

    return (
        <div
            style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
            onPointerMove={(e) => {
                gradientX.set((e.clientX - left) / width)
                gradientY.set((e.clientY - top) / height)
            }}
        >
            <motion.div
                ref={ref}
                style={{
                    background,
                    width: 400,
                    height: 400,
                    borderRadius: 50,
                    cursor: "none",
                }}
                onPointerEnter={() => measure()}
            />
        </div>
    )
}

/**
 * ================  Utils  =========================
 */

function useElementDimensions(ref) {
    const [size, setSize] = useState({ width: 0, height: 0, top: 0, left: 0 })

    function measure() {
        if (!ref.current) return
        const rect = ref.current.getBoundingClientRect()
        setSize({
            width: rect.width,
            height: rect.height,
            top: rect.top,
            left: rect.left,
        })
    }

    useEffect(() => {
        measure()
    }, [])

    return [size, measure]
}
