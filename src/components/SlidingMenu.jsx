import { motion, AnimatePresence } from 'framer-motion';
import { Button } from './ui/button.jsx';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

const resources = [
  { name: 'React Official', url: 'https://react.dev/' },
  { name: 'Vite Official', url: 'https://vitejs.dev/' },
  { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
  { name: 'Framer Motion', url: 'https://www.framer.com/motion/' },
  { name: 'Vue.js Official', url: 'https://vuejs.org/' },
  { name: 'Next.js Official', url: 'https://nextjs.org/' },
  { name: 'Node.js Official', url: 'https://nodejs.org/' },
  { name: 'Webpack Official', url: 'https://webpack.js.org/' },
  { name: 'CSS Tricks', url: 'https://css-tricks.com/' },
  { name: 'MDN Web Docs', url: 'https://developer.mozilla.org/' },
  { name: 'Smashing Magazine', url: 'https://www.smashingmagazine.com/' },
  { name: 'Frontend Mentor', url: 'https://www.frontendmentor.io/' },
  { name: 'Dev.to', url: 'https://dev.to/' },
  { name: 'CodePen', url: 'https://codepen.io/' },
  { name: 'A List Apart', url: 'https://alistapart.com/' },
  { name: 'FreeCodeCamp', url: 'https://www.freecodecamp.org/' }
];

export default function SlidingMenu({ isOpen, toggleMenu }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.5 }}
          className="fixed top-0 left-0 w-64 h-full bg-gray-700 shadow-xl z-50 p-6 overflow-y-auto"
        >
          <Button onClick={toggleMenu} className="absolute top-4 right-4">
            <X />
          </Button>
          <h2 className="text-xl font-bold">Navigation</h2>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/" onClick={toggleMenu} className="block text-lg text-white hover:text-blue-400 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/newpage" onClick={toggleMenu} className="block text-lg text-white hover:text-blue-400 transition">
                New Page
              </Link>
            </li>
            <li>
              <Link to="/page2" onClick={toggleMenu} className="block text-lg text-white hover:text-blue-400 transition">
                Page 2 (Variants)
              </Link>
            </li>
            {resources.map((item) => (
              <li key={item.url}>
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="block text-lg text-white hover:text-blue-400 transition">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
