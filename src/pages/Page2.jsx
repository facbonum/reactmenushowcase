import { motion } from 'framer-motion';
import { Card, CardContent } from '../components/ui/card.jsx';

const containerVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, staggerChildren: 0.3 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Page2() {
  return (
    <div className="p-8 min-h-screen bg-gray-900 text-white">
      <h1 className="text-4xl font-bold mb-8">Framer Motion Variants Page</h1>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {[1, 2, 3, 4].map((item) => (
          <motion.div key={item} variants={itemVariants}>
            <Card>
              <CardContent>
                <h2 className="text-2xl font-semibold">Card {item}</h2>
                <p className="mt-2">This card uses Framer Motion variants for animation.</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
