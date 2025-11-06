import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Leaf,
  Heart,
  Award,
  ArrowRight,
  Zap as Energy,
  UtensilsCrossed,
  Flower2,
  Calendar,
  ShieldCheck,
  Droplet,
  Menu, // Added for potential Navbar
} from 'lucide-react'

// --- Color Configuration (Simple & Calming) ---
const PRIMARY_COLOR = 'green-400' 
const SECONDARY_COLOR = 'teal-600' 
const GRADIENT_CLASS = `bg-gradient-to-r from-${PRIMARY_COLOR} to-${SECONDARY_COLOR}`
const ACCENT_TEXT_CLASS = `bg-gradient-to-r from-${PRIMARY_COLOR} via-green-400 to-${SECONDARY_COLOR} bg-clip-text text-transparent`

/**
 * --- Main Home Component ---
 */
const Home = () => {
  return (
    <div className="bg-black text-white min-h-screen overflow-hidden">
      {/* If a Navbar is added, it would go here */}
      <HeroSection />
      {/* Separator for visual break */}
      <div className="max-w-7xl mx-auto border-t border-slate-800" />
      <WellnessOfferings />
      <ExpertiseSection />
      <RestoreCTA />
      {/* Footer component would go here */}
    </div>
  )
}

// --- Hero Section (ALL CONTENT CENTERED) ---
const HeroSection = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-[85vh] pt-28 flex flex-col items-center justify-center bg-black text-center"
    >
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* The single centered content block */}
        <div className="space-y-8 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-none tracking-tighter">
              <span className={`${ACCENT_TEXT_CLASS}`}>WellnessHub</span>.
              <br />
              Your Inner
              <br />
              <span className="text-white">Equilibrium.</span>
            </h1>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-gray-200 leading-relaxed max-w-2xl font-medium"
          >
            Dedicated to Women's Wellbeing. We offer expert-led, holistic paths to restoration and vitality through personalized care.
          </motion.p>
          
          {/* Founder's Mission Box - Centered and max-width adjusted */}
          <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-4 border-l-4 border-green-500 bg-slate-900/70 rounded-r-lg max-w-lg text-left" 
          >
              <p className="text-sm font-semibold text-white mb-1">
                  Founder's Mission
              </p>
              <p className="text-sm text-gray-400 italic">
                  I am Hasanki Nimthara, an undergraduate of the University of Colombo, Faculty of International Relations. This platform is my commitment to empowering women through comprehensive wellness solutions.
              </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-4 pt-4"
          >
            <button className={`group relative px-8 py-3 ${GRADIENT_CLASS} rounded-full font-semibold text-white transition-transform hover:scale-105 shadow-xl`}>
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                Start Consultation
              </span>
            </button>

            <button className="group px-8 py-3 bg-white/5 border border-white/10 rounded-full font-semibold text-white hover:bg-white/10 transition-all flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
              Explore Services
            </button>
          </motion.div>
        </div>
        
      </div>
    </section>
  )
}

// --- Wellness Offerings (Pillars with Minimal Design) ---
const WellnessOfferings = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const coreServices = [
    {
      title: "Mindfulness & Meditation",
      description: "Guided practices to enhance focus, reduce stress, and cultivate inner peace.",
      icon: <Flower2 className="w-6 h-6" />,
    },
    {
      title: "Holistic Bodywork",
      description: "Therapeutic massage and specialized techniques to release deep tension.",
      icon: <Leaf className="w-6 h-6" />,
    },
    {
      title: "Nutrition & Detox",
      description: "Sustainable dietary plans and cleanse protocols for optimal gut health and vitality.",
      icon: <UtensilsCrossed className="w-6 h-6" />,
    },
    {
      title: "Energy Restoration",
      description: "Balance sessions focused on sleep hygiene and sustained physical energy.",
      icon: <Energy className="w-6 h-6" />,
    },
  ]

  return (
    <section id="services" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl lg:text-5xl font-bold text-white mb-3"
          >
            Core Wellness Pillars
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400"
          >
            Integrated treatments for complete well-being.
          </motion.p>
        </div>

        {/* Simple 4-Column Grid with accent border */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreServices.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className={`bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-${PRIMARY_COLOR} transition-all`}
            >
              <div className={`p-3 bg-${PRIMARY_COLOR}/30 rounded-lg inline-block mb-4 text-white`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

// --- Expertise Section (ALL CONTENT CENTERED) ---
const ExpertiseSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const expertise = [
    { icon: <Award className="w-5 h-5" />, text: "Certified & Licensed Practitioners" },
    { icon: <ShieldCheck className="w-5 h-5" />, text: "Evidence-Based, Holistic Methods" },
    { icon: <Droplet className="w-5 h-5" />, text: "Focus on Natural, Non-Invasive Care" },
    { icon: <Heart className="w-5 h-5" />, text: "Customized Care for Women's Specific Needs" },
  ]

  return (
    <section 
      id="expertise" 
      ref={ref} 
      // Centering the entire section's content
      className="py-24 bg-slate-950 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto space-y-6"> {/* Max-width added for better readability when centered */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
          >
            Our Foundation of Trust
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-400 leading-relaxed max-w-2xl mx-auto"
          >
            Every program is built on a commitment to safety, professionalism, and deep empathy for the individual journey.
          </motion.p>
          
          <div className="space-y-4 pt-4 flex flex-col items-center"> {/* Centering the list items */}
            {expertise.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + idx * 0.1 }}
                className="flex items-center gap-3 text-white max-w-sm" // Add max-w to keep it tidy
              >
                <div className={`flex-shrink-0 p-1 text-white bg-${SECONDARY_COLOR} rounded-full`}>{item.icon}</div>
                <p className="font-medium text-gray-200 text-left">{item.text}</p> {/* Ensure text remains left-aligned within the item */}
              </motion.div>
            ))}
          </div>
      </div>
    </section>
  )
}

// --- Simplified Restore CTA (Contact) ---
const RestoreCTA = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <section id="contact" ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div 
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className={`${GRADIENT_CLASS} rounded-3xl p-12 md:p-16 text-center relative shadow-2xl`}
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-5">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule your introductory consultation today. We're here to listen and help you find your unique path to well-being.
            </p>
            
            <button className="group bg-white text-teal-600 px-8 py-3 rounded-full font-bold text-lg hover:scale-[1.05] transition-transform shadow-lg">
                <span className="flex items-center justify-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Schedule Appointment
                </span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Home