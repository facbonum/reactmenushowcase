import { motion } from 'framer-motion';

export default function MenuButton({ imgSrc, label, onClick }) {
  return (
    <motion.button
      onClick={onClick}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.1, rotate: 5 }}
      whileTap={{ scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="flex items-center gap-3 px-4 py-2 bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition"
    >
      <motion.img
        src={imgSrc}
        alt={label}
        className="w-8 h-8 rounded-lg object-cover"
        whileHover={{ rotate: 10 }}
        whileTap={{ scale: 0.85 }}
        transition={{ duration: 0.2 }}
      />
      <span className="text-white font-semibold">{label}</span>
    </motion.button>
  );
}
