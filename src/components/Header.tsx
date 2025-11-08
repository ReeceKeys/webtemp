import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/IM.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timeout);
  }, []);

  const menuVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: 'auto', opacity: 1, transition: { duration: 0.3 } },
  };

  const navClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors duration-150 ${
      isActive
        ? 'underline decoration-black underline-offset-4'
        : 'text-black'
    }`;

  return (
    <>
      <style>{`
        a, button {
          -webkit-tap-highlight-color: transparent;
        }
        a:focus, a:visited, a:active {
          outline: none !important;
        }
        button:focus, button:active {
          outline: none !important;
        }
      `}</style>

      <motion.header
        className="bg-black sticky top-0 z-50"
        initial={{ opacity: 0, y: -20 }}
        animate={loaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          
          {/* Logo */}
          <NavLink to="/" className="flex items-center">
            <img
              src={logo}
              alt="InfluenceMe"
              className="h-12 sm:h-14 md:h-16 w-auto transition duration-300 ease-in-out md:hover:brightness-75"
            />
          </NavLink> 

          {/* Desktop Nav */}
          <nav className=" justify-between gap-24 hidden md:flex space-x-6 text-4xl">
            <NavLink to="/tier1" className={navClass}>Tier 1</NavLink>
            <NavLink to="/tier2" className={navClass}>Tier 2</NavLink>
            <NavLink to="/tier3" className={navClass}>Tier 3</NavLink>
            <NavLink to="/contact" className={navClass}>Contact</NavLink>
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-500 active:text-blue-500 focus:outline-none transition-colors duration-150"
            >
              <motion.div
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden bg-white shadow overflow-hidden"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={menuVariants}
            >
              <nav className="flex flex-col space-y-2 p-4">
                <NavLink onClick={() => setIsOpen(false)} to="/tier1" className={navClass}>Tier 1</NavLink>
                <NavLink onClick={() => setIsOpen(false)} to="/tier2" className={navClass}>Tier 2</NavLink>
                <NavLink onClick={() => setIsOpen(false)} to="/tier3" className={navClass}>Tier 3</NavLink>
                <NavLink onClick={() => setIsOpen(false)} to="/contact" className={navClass}>Contact</NavLink>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
