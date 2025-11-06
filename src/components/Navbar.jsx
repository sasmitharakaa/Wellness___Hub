import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
    HeartPulse, // Main logo icon (Wellness Hub)
    Menu,
    X,
    Home, // For Home
    Dumbbell, // For Wellness (General)
    Briefcase, // For About (representing mission/business)
    Mail, // For Contact Us
    ChevronDown,
    MessageCircle, // For the 'Get Support' button
    // Wellness Topic Icons (Re-use the same icons from the grid)
    Handshake,
    ShieldCheck,
    Scale,
    MessageCircle as MessageCircleIcon,
    Droplet,
    Lock,
    Lightbulb,
    Users,
    Smile,
} from 'lucide-react';

// --- Wellness Content Data (Used for the Dropdown) ---
const topics = [
    { id: 1, title: "Sexual Health (Intro)", subtitle: "Overall Well-being", icon: HeartPulse, path: "/wellness#topic-1" },
    { id: 2, title: "Consent", subtitle: "Clear, Mutual, Revocable", icon: Handshake, path: "/wellness#topic-2" },
    { id: 3, title: "Safe Practices", subtitle: "Protection and Check-ups", icon: ShieldCheck, path: "/wellness#topic-3" },
    { id: 4, title: "Reproductive Rights", subtitle: "Choice and Freedom", icon: Scale, path: "/wellness#topic-4" },
    { id: 5, title: "Respectful Communication", subtitle: "Honesty Builds Trust", icon: MessageCircleIcon, path: "/wellness#topic-5" },
    { id: 6, title: "Menstrual Health & Hygiene", subtitle: "Natural and Healthy", icon: Droplet, path: "/wellness#topic-6" },
    { id: 7, title: "Confidential Screenings", subtitle: "Private Access to Care", icon: Lock, path: "/wellness#topic-7" },
    { id: 8, title: "Seeking Advice", subtitle: "Trusted Sources Only", icon: Lightbulb, path: "/wellness#topic-8" },
    { id: 9, title: "Open Discussions", subtitle: "Reducing Stigma", icon: Users, path: "/wellness#topic-9" },
    { id: 10, title: "Mental Well-being", subtitle: "Acceptance and Inner Peace", icon: Smile, path: "/wellness#topic-10" },
];

// --- Theme Constants (Fixed Tailwind classes for safety and consistency) ---
const PRIMARY_COLOR_TEXT = 'text-blue-600';
const PRIMARY_COLOR_BG = 'bg-blue-600';
const ACCENT_COLOR_BG = 'bg-emerald-500';
const ACCENT_COLOR_TEXT = 'text-emerald-500';
const HOVER_BG_CLASS = 'hover:bg-blue-50';
const ACTIVE_BG_CLASS = 'bg-blue-50';
const BACKGROUND_CLASS = 'bg-white/95 backdrop-blur-md shadow-lg shadow-blue-100/50';

// ----------------------------------------------------------------------
// Dropdown Menu Component (Desktop)
// ----------------------------------------------------------------------
const WellnessDropdown = ({ primaryColorText, topics, isActive }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div 
            className="relative h-full flex items-center"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Dropdown Toggle Link */}
            <Link 
                to="/wellness"
                className="relative px-4 py-2 group flex items-center transition-colors h-full"
            >
                <span className={`relative z-10 font-semibold transition-colors ${
                    isActive ? primaryColorText : 'text-gray-700 group-hover:text-black'
                }`}>
                    Wellness
                </span>
                <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${primaryColorText} ${
                    isHovered ? 'rotate-180' : 'rotate-0'
                }`} />
                {/* Active Indicator */}
                {isActive && (
                    <motion.div
                        layoutId="navbar-indicator"
                        className={`absolute bottom-0 left-2 right-2 h-0.5 ${PRIMARY_COLOR_BG} rounded-full`}
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                )}
                <div className={`${HOVER_BG_CLASS} absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity`} />
            </Link>

            {/* Dropdown Panel */}
            <AnimatePresence>
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full -left-10 mt-2 p-4 w-[500px] grid grid-cols-2 gap-3 bg-white border border-blue-100 rounded-xl shadow-2xl shadow-blue-200/50"
                    >
                        {topics.map((topic, index) => {
                            const Icon = topic.icon;
                            return (
                                <Link
                                    key={index}
                                    to={topic.path}
                                    className={`flex items-start p-3 rounded-lg transition-colors ${HOVER_BG_CLASS} group`}
                                >
                                    <Icon className={`w-5 h-5 mt-1 mr-3 flex-shrink-0 ${PRIMARY_COLOR_TEXT} group-hover:text-black`} />
                                    <div>
                                        <div className={`font-semibold text-gray-800 leading-snug`}>
                                            {topic.title}
                                        </div>
                                        <div className="text-xs text-gray-500 mt-0.5">
                                            {topic.subtitle}
                                        </div>
                                    </div>
                                </Link>
                            );
                        })}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};


// ----------------------------------------------------------------------
// Main Navbar Component
// ----------------------------------------------------------------------
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // --- UPDATED Navigation Links ---
    const navLinks = [
        { name: 'Home', path: '/', icon: Home, type: 'link' },
        { name: 'Wellness', path: '/wellness', icon: Dumbbell, type: 'dropdown' }, // Changed to dropdown type
        { name: 'About', path: '/about', icon: Briefcase, type: 'link' },
        { name: 'Contact Us', path: '/contact', icon: Mail, type: 'link' },
    ];

    // Helper to determine if a path is active or part of an active section
    const isActive = (path) => {
        if (path === '/wellness') {
            // Check if the current path starts with /wellness (to handle /wellness#topic-X)
            return location.pathname.startsWith(path);
        }
        return location.pathname === path;
    }

    return (
        <>
            {/* Navbar Container */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className={`fixed w-full z-50 transition-all duration-300 ${
                    scrolled ? BACKGROUND_CLASS : 'bg-white/70 backdrop-blur-sm border-b border-blue-50'
                }`}
            >
                
                {/* Main Nav Bar */}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        {/* Logo */}
                        <Link to="/" className="flex items-center space-x-3 group relative z-50">
                            <motion.div
                                whileHover={{ rotate: -15, scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className={`relative p-2.5 rounded-xl bg-gradient-to-br ${PRIMARY_COLOR_BG} to-emerald-500`}
                            >
                                <HeartPulse className="w-7 h-7 text-white" />
                            </motion.div>
                            <div>
                                <span className={`text-2xl font-black ${PRIMARY_COLOR_TEXT}`}>
                                    WELLNESS HUB
                                </span>
                                <div className="text-[10px] text-gray-500 -mt-1 font-medium">
                                    Holistic Health, Simplified
                                </div>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-1 h-full">
                            {navLinks.map((link) => {
                                if (link.type === 'dropdown' && link.name === 'Wellness') {
                                    return (
                                        <WellnessDropdown 
                                            key={link.name}
                                            primaryColorText={PRIMARY_COLOR_TEXT} 
                                            topics={topics} 
                                            isActive={isActive(link.path)} 
                                        />
                                    );
                                }
                                
                                return (
                                    <Link
                                        key={link.name}
                                        to={link.path}
                                        className="relative px-4 py-2 group"
                                    >
                                        <span className={`relative z-10 font-semibold transition-colors ${
                                            isActive(link.path) ? PRIMARY_COLOR_TEXT : 'text-gray-700 group-hover:text-black'
                                        }`}>
                                            {link.name}
                                        </span>
                                        {/* Active Indicator */}
                                        {isActive(link.path) && (
                                            <motion.div
                                                layoutId="navbar-indicator"
                                                className={`absolute bottom-0 left-2 right-2 h-0.5 ${PRIMARY_COLOR_BG} rounded-full`}
                                                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                            />
                                        )}
                                        {/* Hover effect */}
                                        <div className={`${HOVER_BG_CLASS} absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity`} />
                                    </Link>
                                );
                            })}
                        </div>

                        {/* Right Side Actions */}
                        <div className="flex items-center gap-4">
                            
                            {/* Call to Action Button - Desktop */}
                            <motion.a
                                href="/contact" 
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className={`hidden lg:flex items-center gap-2 ${ACCENT_COLOR_BG} text-white px-5 py-2.5 rounded-full font-bold shadow-md shadow-emerald-500/30 hover:shadow-lg transition-all`}
                            >
                                <MessageCircle className="w-4 h-4" />
                                <span>Get Support</span>
                            </motion.a>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                className="lg:hidden relative z-50 p-2 text-gray-700 hover:text-black transition-colors"
                            >
                                <AnimatePresence mode="wait">
                                    {isOpen ? (
                                        <motion.div
                                            key="close"
                                            initial={{ rotate: -90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: 90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <X className="w-6 h-6" />
                                        </motion.div>
                                    ) : (
                                        <motion.div
                                            key="menu"
                                            initial={{ rotate: 90, opacity: 0 }}
                                            animate={{ rotate: 0, opacity: 1 }}
                                            exit={{ rotate: -90, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            <Menu className="w-6 h-6" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </button>
                        </div>
                    </div>
                </div>

            </motion.nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
                            onClick={() => setIsOpen(false)}
                        />

                        {/* Menu Panel */}
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: "spring", damping: 30, stiffness: 300 }}
                            className="fixed top-0 right-0 bottom-0 w-full sm:w-80 bg-white border-l border-blue-100 z-40 lg:hidden overflow-y-auto"
                        >
                            <div className="p-6 pt-24">
                                {/* Mobile Nav Links */}
                                <div className="space-y-3 mb-8">
                                    {navLinks.map((link, idx) => {
                                        const Icon = link.icon;
                                        
                                        // Mobile Links and main Wellness page link
                                        if (link.type === 'link' || (link.type === 'dropdown' && link.name === 'Wellness')) {
                                            return (
                                                <motion.div
                                                    key={link.name}
                                                    initial={{ opacity: 0, x: 50 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: idx * 0.1 }}
                                                >
                                                    <Link
                                                        to={link.path}
                                                        className={`flex items-center gap-3 px-4 py-4 rounded-xl font-bold text-lg transition-all ${
                                                            isActive(link.path)
                                                                ? `${ACTIVE_BG_CLASS} ${PRIMARY_COLOR_TEXT}`
                                                                : 'text-gray-600 hover:bg-blue-50 hover:text-black'
                                                        }`}
                                                    >
                                                        <Icon className={`w-5 h-5 ${isActive(link.path) ? PRIMARY_COLOR_TEXT : 'text-gray-400'}`} />
                                                        {link.name}
                                                        {/* For Wellness, add a dropdown indicator in mobile, though we immediately show sub-links */}
                                                        {link.name === 'Wellness' && (
                                                            <ChevronDown className={`w-4 h-4 ml-auto text-gray-400`} />
                                                        )}
                                                    </Link>
                                                    
                                                    {/* Mobile Dropdown (Always visible list of topics) */}
                                                    {link.name === 'Wellness' && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            transition={{ delay: (idx + 1) * 0.1 }}
                                                            className="mt-2 pl-6 space-y-1 border-l border-blue-100"
                                                        >
                                                            {topics.map((topic, subIdx) => {
                                                                const TopicIcon = topic.icon;
                                                                return (
                                                                    <Link
                                                                        key={topic.title}
                                                                        to={topic.path}
                                                                        className="flex items-center gap-3 px-4 py-2 text-sm text-gray-600 hover:text-black hover:bg-blue-50 rounded-lg transition-colors"
                                                                    >
                                                                        <TopicIcon className={`w-4 h-4 flex-shrink-0 text-blue-400`} />
                                                                        <span className="truncate">{topic.title}</span>
                                                                    </Link>
                                                                )
                                                            })}
                                                        </motion.div>
                                                    )}
                                                </motion.div>
                                            );
                                        }
                                        return null;
                                    })}
                                </div>

                                {/* Mobile Contact Button (Prominent Call to Action) */}
                                <motion.a
                                    href="/contact"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className={`flex items-center justify-center gap-2 w-full ${PRIMARY_COLOR_BG} text-white px-6 py-4 rounded-xl font-bold shadow-lg shadow-blue-600/30 hover:bg-blue-700 transition-colors`}
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    <span>Talk to a Counselor</span>
                                </motion.a>

                                {/* Mobile Info (Simplified) */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.6 }}
                                    className="mt-8 pt-6 border-t border-blue-100 text-sm text-center"
                                >
                                    <div className="font-semibold text-gray-500 mb-1">
                                        Confidential Support Available
                                    </div>
                                    <div className={`${PRIMARY_COLOR_TEXT} font-medium`}>
                                        info@wellnesshub.org
                                    </div>
                                </motion.div>
                                
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;