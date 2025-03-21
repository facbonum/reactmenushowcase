import { motion } from "framer-motion";

export function Card({ children }) {
  return (
    <motion.div
      className="bg-gray-800 rounded-lg shadow-lg p-6"
      whileHover={{ scale: 1.05 }} // Scale up the card when hovered
      whileTap={{ scale: 0.95 }} // Slight scale down when clicked
      transition={{ type: "spring", stiffness: 300 }}
    >
      {children}
    </motion.div>
  );
}

export function CardContent({ children }) {
  return (
    <motion.div
      className="p-4 text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }} // Fade-in effect on load
    >
      {children}
    </motion.div>
  );
}
