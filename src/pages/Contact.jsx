import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
    Phone,
    Mail,
    Calendar, // Used for Appointment/Booking
    MessageSquare, // Used for General Contact
    ArrowRight,
} from 'lucide-react'

// --- Color Configuration for WellnessHub (Keeping the blue/cyan theme) ---
const PRIMARY_COLOR_CLASS = 'text-blue-500'
const PRIMARY_BG_CLASS = 'bg-blue-500'
const ACCENT_TEXT_CLASS = 'bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent'
const CTA_GRADIENT_CLASS = 'bg-gradient-to-r from-teal-500 to-green-600' // Changed CTA for a more "wellness" green feel
const CTA_HOVER_SHADOW = 'hover:shadow-2xl hover:shadow-teal-500/50' // Updated shadow color

// Main Contact Page Component - SIMPLIFIED STRUCTURE
const Contact = () => {
    return (
        <div className="bg-black">
            <ContactHero />
            <ContactInfo />
            {/* Removed ContactForm, MapSection, and FAQ for simplicity */}
        </div>
    )
}

// ----------------------------------------------------------------------
// Contact Hero Section - Updated for WellnessHub
// ----------------------------------------------------------------------
const ContactHero = () => {
    return (
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute inset-0 z-0">
                {/* Updated Background Gradients */}
                <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950/30 to-black" />
                <div className="absolute inset-0">
                    <div className={`absolute top-20 left-20 w-96 h-96 ${PRIMARY_BG_CLASS} rounded-full blur-[150px] opacity-30`} />
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-[150px] opacity-30" />
                </div>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={`inline-flex items-center gap-2 ${PRIMARY_BG_CLASS}/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6`}>
                        <MessageSquare className={`w-4 h-4 ${PRIMARY_COLOR_CLASS}`} />
                        <span className={`text-sm font-medium ${PRIMARY_COLOR_CLASS}`}>ENH3155 Support</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                        Contact Us
                        <span className={`block ${ACCENT_TEXT_CLASS}`}>
                            Direct Line to our consultant
                        </span>
                    </h1>

                    <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                        Please use the contact details below to reach out to consultant for all inquiries regarding <ENH3155></ENH3155>.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <motion.a
                            href="tel:+94702001194"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`${CTA_GRADIENT_CLASS} text-white px-8 py-4 rounded-xl font-bold flex items-center justify-center gap-2 ${CTA_HOVER_SHADOW} transition-all`}
                        >
                            <Phone className="w-5 h-5" />
                            Call Consultant
                        </motion.a>
                        <motion.a
                            href="mailto:enh3155@gmail.com"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-all flex items-center justify-center gap-2"
                        >
                            <Mail className="w-5 h-5" />
                            Email <Consultant></Consultant>
                        </motion.a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

// ----------------------------------------------------------------------
// Contact Info Cards - Updated to use only Hasanki's details
// ----------------------------------------------------------------------
const ContactInfo = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const contactMethods = [
        {
            icon: <Phone className="w-8 h-8" />,
            title: "Direct Phone",
            primary: "0702001194",
            secondary: "Please ask for consultant.",
            action: "tel:+94702001194",
            color: "from-teal-500 to-green-600"
        },
        {
            icon: <Mail className="w-8 h-8" />,
            title: "Email Address",
            primary: "enh3155@gmail.com",
            secondary: "Best for non-urgent inquiries.",
            action: "mailto:enh3155@gmail.com",
            color: "from-blue-500 to-cyan-600"
        },
        {
            icon: <Calendar className="w-8 h-8" />,
            title: "Appointment Booking",
            primary: "Schedule a Session",
            secondary: "Online booking link/info here.",
            action: "#", // Placeholder for actual booking link
            color: "from-purple-500 to-indigo-600"
        },
        {
            icon: <MessageSquare className="w-8 h-8" />,
            title: "General Information",
            primary: "ENH3155 Support",
            secondary: "We're committed to your well-being.",
            action: null,
            color: "from-red-500 to-pink-600"
        }
    ]

    return (
        <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-black text-white mb-4">
                        Contact Details
                    </h2>
                    <p className="text-lg text-gray-400">
                        All calls and emails are directed to <Consultant></Consultant>.
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {contactMethods.map((method, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: idx * 0.1 }}
                            className="group"
                        >
                            <a
                                href={method.action || '#'}
                                className={`block bg-gradient-to-br ${method.color} p-[2px] rounded-2xl ${method.action ? 'cursor-pointer' : 'cursor-default'}`}
                            >
                                <div className="bg-slate-900 rounded-2xl p-8 hover:bg-transparent transition-all h-full">
                                    <div className="text-white mb-6">{method.icon}</div>
                                    <h3 className="text-lg font-semibold text-gray-400 mb-3">{method.title}</h3>
                                    <p className="text-xl font-bold text-white mb-1">{method.primary}</p>
                                    <p className="text-sm text-gray-500">{method.secondary}</p>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// Export the main component
export default Contact