import { motion } from 'framer-motion'
// Icons relevant to WellnessHub
import { 
  Leaf, 
  Heart, 
  Flower2, 
  Calendar, 
  ShieldCheck, 
  Mail, 
  Phone, 
  MapPin, 
  BookOpen, 
  Zap as Energy 
} from 'lucide-react' 
import { Facebook, Twitter, Instagram } from 'lucide-react' 

// --- Color Configuration (Must match the main theme) ---
const PRIMARY_COLOR = 'green-400' 
const SECONDARY_COLOR = 'teal-600' 
const ACCENT_GRADIENT_CLASS = `bg-gradient-to-r from-${PRIMARY_COLOR} to-${SECONDARY_COLOR}`
const ACCENT_TEXT_CLASS = `bg-gradient-to-r from-${PRIMARY_COLOR} to-${SECONDARY_COLOR} bg-clip-text text-transparent`

const Footer = () => {
  const currentYear = new Date().getFullYear()

  // Updated structure for a Wellness website
  const footerSections = [
    {
      title: 'Quick Links',
      // Links matching the main page sections
      links: [
        { text: 'Home', icon: <Leaf className="w-4 h-4" /> },
        { text: 'Services', icon: <Flower2 className="w-4 h-4" /> },
        { text: 'Expertise', icon: <ShieldCheck className="w-4 h-4" /> },
        { text: 'Blog', icon: <BookOpen className="w-4 h-4" /> },
        { text: 'Contact', icon: <Mail className="w-4 h-4" /> }
      ]
    },
    {
      title: 'Our Focus',
      // Wellness specific links
      links: [
        'Mindfulness', 
        'Nutrition', 
        'Stress Relief', 
        'Energy Restoration', 
        'Holistic Care'
      ]
    },
    // {
    //   title: 'Contact Info',
    //   // CONTACT INFO UPDATED HERE
    //   links: [
    //     { icon: <Phone className="w-4 h-4" />, text: '0702001194' },
    //     { icon: <Mail className="w-4 h-4" />, text: 'hasankinimthara@gmail.com' },
    //     { icon: <MapPin className="w-4 h-4" />, text: 'Rmbukkana road,Kegalle' }
    //   ]
    // }
  ]

  // Configuration for the main company name and logo
  const companyName = 'ENH 3155'
  const founderName = 'enh'
  const brandIcon = <Heart className="w-6 h-6 text-white" /> 

  return (
    <footer className="bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`${ACCENT_GRADIENT_CLASS} p-2 rounded-lg`}
              >
                {brandIcon}
              </motion.div>
              <span className={`text-xl font-bold ${ACCENT_TEXT_CLASS}`}>
                {companyName}
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Your partner in achieving inner equilibrium. Dedicated to women's wellbeing and holistic vitality.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram].map((Icon, index) => (
                <motion.a
                  key={index}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className={`bg-slate-800 p-2 rounded-full text-gray-400 hover:text-${PRIMARY_COLOR} hover:bg-slate-700 transition-all`}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Footer Sections - Note: We use a loop to fill the remaining 3 columns */}
          {footerSections.map((section, idx) => (
            <div key={idx}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    {/* Check if the link object has an icon (for Quick Links & Contact Info) */}
                    {typeof link === 'object' && 'text' in link ? (
                      <a
                        // Use mailto: for email and tel: for phone number for actual functionality
                        href={link.icon.type === Mail ? `mailto:${link.text}` : (link.icon.type === Phone ? `tel:${link.text}` : `#`)}
                        className={`text-gray-400 hover:text-${PRIMARY_COLOR} transition-colors text-sm flex items-center space-x-2`}
                      >
                        {link.icon || null}
                        <span>{link.text}</span>
                      </a>
                    ) : (
                      // Handle simple string links (for Our Focus)
                      <a
                        href={`#${link.toLowerCase().replace(' ', '-')}`}
                        className={`text-gray-400 hover:text-${PRIMARY_COLOR} transition-colors text-sm flex items-center space-x-2`}
                      >
                        {/* We use a subtle bullet or icon here for aesthetics */}
                        <span className='w-1 h-1 bg-gray-600 rounded-full mr-2'></span>
                        <span>{link}</span>
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar: Updated with founder name */}
        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {currentYear} {companyName}. All rights reserved. 
            <span className="block mt-1">Founder: {founderName}.</span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer