import { useState } from 'react';
import { motion, AnimatePresence, useScroll } from 'framer-motion';
import { Button } from './components/ui/button.jsx';  
import { Card, CardContent } from './components/ui/card.jsx';  
import { Menu, X } from 'lucide-react';




// Import MenuButton component
import MenuButton from './components/MenuButton.jsx';

const resources = [
  { name: 'React Official', url: 'https://react.dev/' },
  { name: 'Vite Official', url: 'https://vitejs.dev/' },
  { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
  { name: 'Framer Motion', url: 'https://www.framer.com/motion/' },
  { name: 'CSS Tricks', url: 'https://css-tricks.com/' },
  { name: 'Smashing Magazine', url: 'https://www.smashingmagazine.com/' }
];

export default function App() {
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
          <Button onClick={toggleMenu} className="text-2xl">
            {isOpen ? <X /> : <Menu />}
          </Button>

          {/* Navbar Menu Items with 5 dropdowns */}
          <div className="hidden md:flex gap-6">
            {['Dropdown 1', 'Dropdown 2', 'Dropdown 3', 'Dropdown 4', 'Dropdown 5'].map((label, index) => (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setSelected(index)}
                onMouseLeave={() => setSelected(null)}
              >
                <Button
                  onClick={() => handleDropdownClick(index)}
                  className="w-32 flex items-center gap-2"
                >
                  <img src={`/button${index + 1}.png`} alt="Icon" className="w-6 h-6" />
                  {label}
                </Button>

                {/* Dropdown Menu */}
                <div
                  className={`absolute left-0 mt-2 space-y-2 bg-gray-800 rounded-lg shadow-lg w-32 transition-all duration-300 ease-in-out ${
                    selected === index ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                  style={{ transitionDelay: '100ms' }}
                >
                  <p className="px-4 py-2 text-sm text-gray-300">Item 1</p>
                  <p className="px-4 py-2 text-sm text-gray-300">Item 2</p>
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

      {/* Main Content */}
      <main className="p-8">
        <Card>
          <CardContent>
            <h2 className="text-3xl font-bold">Welcome to the React Menu Showcase</h2>
            <p className="mt-4 text-lg">Explore the latest web development features with React, Tailwind CSS, and Framer Motion.</p>
          </CardContent>
        </Card>

        {/* Use the MenuButton Component */}
        <div className="mt-8 flex gap-4 flex-wrap">
          <MenuButton
            imgSrc="/MenuButton.png"
            label="Menu 1"
            onClick={() => console.log('Menu 1 Clicked')}
          />
          <MenuButton
            imgSrc="/MenuButton.png"
            label="Menu 2"
            onClick={() => console.log('Menu 2 Clicked')}
          />
          <MenuButton
            imgSrc="/MenuButton.png"
            label="Menu 3"
            onClick={() => console.log('Menu 3 Clicked')}
          />
        </div>
      </main>
    </div>
  );
}
