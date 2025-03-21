// Image.jsx
import { motion } from "framer-motion";
import { useRef } from "react";
import { useParallax } from "./useParallax";  // Import the custom hook

function Image({ id }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
        <section className="img-container">
            <div ref={ref}>
                <img
                    src={`/photos/cityscape/${id}.jpg`}
                    alt="A London skyscraper"
                />
            </div>
            <motion.h2
                initial={{ visibility: "hidden" }}
                animate={{ visibility: "visible" }}
                style={{ y }}
            >
                {`#00${id}`}
            </motion.h2>
        </section>
    );
}

export default Image;
