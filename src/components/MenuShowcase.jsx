import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button.jsx';
import { Card, CardContent } from '@/components/ui/card.jsx';
import { Menu, X } from 'lucide-react';
import MenuButton from './components/MenuButton';  // Import MenuButton

// Links to web dev resources
const resources = [
  { name: 'React Official', url: 'https://react.dev/' },
  { name: 'Vite Official', url: 'https://vitejs.dev/' },
  { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
  { name: 'Framer Motion', url: 'https://www.framer.com/motion/' },
  { name: 'CSS Tricks', url: 'https://css-tricks.com/' },
  { name: 'Smashing Magazine', url: 'https://www.smashingmagazine.com/' }
];

export default function MenuShowcase() {
  const [isOpen, setIsOpen] = useState(false);
  const [expand, setExpand] = useState(false);
  const [selected, setSelected] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownClick = (index) => {
    setSelected(index === selected ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      {/* Navigation Bar */}
      <nav className="flex items-center justify-between p-6 shadow-lg bg-gray-900">
        <div className="flex items-center gap-4">
          {/* Hamburger Button */}
          <Button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <X /> : <Menu />}
          </Button>

          {/* Navbar Menu Items */}
          <div className="hidden md:flex gap-6">
            {['Dropdown 1', 'Dropdown 2', 'Dropdown 3', 'Dropdown 4', 'Dropdown 5'].map((label, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setSelected(index)}
                onMouseLeave={() => setSelected(null)}
              >
                {/* Using Framer Motion Image Buttons */}
                <MenuButton
                  imgSrc={`https://via.placeholder.com/50?text=Img${index + 1}`}  // Replace with your image URLs
                  label={label}
                  onClick={() => handleDropdownClick(index)}
                />

                {/* Dropdown Menu */}
                <div
                  className={`absolute left-0 mt-2 bg-gray-800 rounded-lg shadow-lg w-40 transition-all duration-300 ease-in-out ${
                    selected === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                >
                  <p className="px-4 py-2 text-sm hover:bg-gray-700">Item 1</p>
                  <p className="px-4 py-2 text-sm hover:bg-gray-700">Item 2</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <h1 className="text-2xl font-bold">React Menu Showcase</h1>
      </nav>

      {/* Sliding Menu */}
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
            <h2 className="text-xl font-bold">Resources</h2>
            <ul className="mt-4 space-y-2">
              {resources.map((item) => (
                <li key={item.url}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expanding Section */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: expand ? '200px' : '0px' }}
        transition={{ duration: 0.5 }}
        className="overflow-hidden bg-gray-800 p-6 mt-6 rounded-lg shadow-lg"
      >
        <h2 className="text-xl font-bold">Expanding Menu</h2>
        <p className="mt-2">This is an expanding menu section with adjustable height animation.</p>
      </motion.div>

      {/* Transparent Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 right-0 w-64 h-full bg-gray-900/90 backdrop-blur-lg shadow-xl z-40 p-6"
          >
            <h2 className="text-xl font-bold">Transparent Menu</h2>
            <ul className="mt-4 space-y-2">
              {resources.map((item) => (
                <li key={item.url}>
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className="p-8">
        <Card>
          <CardContent>
            <h2 className="text-3xl font-bold">Welcome to the React Menu Showcase</h2>
            <p className="mt-4 text-lg">Explore the latest web development features with React, Tailwind CSS, and Framer Motion.</p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
