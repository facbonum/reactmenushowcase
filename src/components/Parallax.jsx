// Parallax.jsx
import { motion, useScroll, useSpring } from "framer-motion";
import Image from "./Image";  // Import Image Component
import StyleSheet from "./StyleSheet";  // Optional, if you want to keep the styles separate

export default function Parallax() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    return (
        <div id="example">
            {[1, 2, 3, 4, 5].map((image) => (
                <Image key={image} id={image} />
            ))}
            <motion.div className="progress" style={{ scaleX }} />
            <StyleSheet />
        </div>
    );
}
