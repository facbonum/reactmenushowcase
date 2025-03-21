import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Button } from './components/ui/button.jsx';  
import { Menu, X } from 'lucide-react';

import SlidingMenu from './components/SlidingMenu.jsx';
import ScrollLinked from './components/ScrollLinked.jsx';

import Home from './pages/Home.jsx';      // Updated path
import NewPage from './pages/NewPage.jsx';  // Updated path
import Page2 from './pages/Page2.jsx';      // Page 2 with Variants


import Parallax from './components/Parallax';
import ConicGradient from './components/ConicGradient.jsx';


export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownClick = (index) => {
    setSelected(index === selected ? null : index);
  };

  
  function App() {
    return (
        <div>
            <Parallax />
        </div>
    );
  }
  
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        
        {/* Navigation Bar */}
        <nav className="flex items-center justify-between p-6 shadow-lg bg-gray-900">
          <div className="flex items-center gap-4">
            <Button onClick={toggleMenu} className="text-2xl">
              {isOpen ? <X /> : <Menu />}
            </Button>

            <div className="hidden md:flex gap-6">
              {['Dropdown 1', 'Dropdown 2', 'Dropdown 3'].map((label, index) => (
                <div key={index} className="relative group">
                  <Button onClick={() => handleDropdownClick(index)} className="w-32 flex items-center gap-2">
                    {label}
                  </Button>

                  <div
                    className={`absolute left-0 mt-1 bg-gray-800 rounded-lg shadow-lg w-40 transition-all duration-300 ease-in-out z-10
                      ${selected === index ? 'opacity-100 visible' : 'opacity-0 invisible'}
                    `}
                    style={{ padding: '8px 0', marginTop: '4px' }}
                  >
                    {index === 0 && (
                      <>
                        <Link to="/newpage" className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400">
                          Item 1
                        </Link>
                        <Link to="/page2" className="block px-4 py-2 text-sm text-gray-300 hover:text-blue-400">
                          Item 2
                        </Link>
                      </>
                    )}
                    <p className="px-4 py-2 text-sm text-gray-300">Item 3</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </nav>

        {/* Global Sliding Menu */}
        <SlidingMenu isOpen={isOpen} toggleMenu={toggleMenu} />

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newpage" element={<NewPage />} />  {/* Updated path */}
            <Route path="/page2" element={<Page2 />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}
