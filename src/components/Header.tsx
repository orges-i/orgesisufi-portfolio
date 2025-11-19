import { useState } from 'react';
import { Menu, X, Moon, Sun, Languages } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { motion, AnimatePresence } from 'motion/react';
import logoLightImage from 'figma:asset/9f89e15c3b190d85895e4a7ec8fb899a45803f32.png';
import logoDarkImage from 'figma:asset/b64093ec8477fefb2d2d3eb0dd1f49bcbd67c920.png';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t('nav.home'), id: 'home' },
    { name: t('nav.about'), id: 'about' },
    { name: t('nav.experience'), id: 'experience' },
    { name: t('nav.skills'), id: 'skills' },
    { name: t('nav.certifications'), id: 'certifications' },
    { name: t('nav.projects'), id: 'projects' },
    { name: t('nav.contact'), id: 'contact' },
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.button
            onClick={() => onNavigate('home')}
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src={theme === 'dark' ? logoDarkImage : logoLightImage} 
              alt="Orges Isufi" 
              className="h-8 w-auto" 
            />
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors relative cursor-pointer ${
                  currentPage === item.id
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
                {currentPage === item.id && (
                  <motion.div
                    className="absolute -bottom-[21px] left-0 right-0 h-0.5 bg-primary"
                    layoutId="activeNav"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Theme Toggle & Language Selector */}
          <div className="flex items-center gap-2">
            <div
              aria-hidden="true"
              className="h-9 w-9 md:w-auto md:px-3 inline-flex items-center justify-center rounded-md invisible"
            />
            <DropdownMenu>
              <DropdownMenuTrigger className="h-9 w-9 inline-flex items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 transition-colors">
                <Languages size={18} />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setLanguage('en')}>
                  English {language === 'en' && '✓'}
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setLanguage('sq')}>
                  Shqip {language === 'sq' && '✓'}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <button
              onClick={toggleTheme}
              className="h-9 w-9 inline-flex items-center justify-center rounded-md hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring transition-colors"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 0 : 180 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
              </motion.div>
            </button>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-border"
            >
              <div className="flex flex-col gap-2 py-4">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left px-2 py-2 rounded-lg transition-colors cursor-pointer ${
                      currentPage === item.id
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-accent'
                    }`}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
