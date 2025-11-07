import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
    HeartPulse,
    Handshake,
    ShieldCheck,
    Scale,
    MessageCircle,
    Droplet,
    Lock,
    Lightbulb,
    Users,
    Smile,
    ArrowRight,
    MessageSquare,
} from 'lucide-react'

// --- Color Configuration for WellnessHub (Maintaining the theme) ---
const PRIMARY_COLOR_CLASS = 'text-blue-500'
const PRIMARY_BG_CLASS = 'bg-blue-500'
const ACCENT_TEXT_CLASS = 'bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 bg-clip-text text-transparent'
const CTA_GRADIENT_CLASS = 'bg-gradient-to-r from-teal-500 to-green-600'
const CTA_HOVER_SHADOW = 'hover:shadow-2xl hover:shadow-teal-500/50'

// --- Icon Mapping (For easy component use) ---
const IconMap = {
    HeartPulse: HeartPulse,
    Handshake: Handshake,
    ShieldCheck: ShieldCheck,
    Scale: Scale,
    MessageCircle: MessageCircle,
    Droplet: Droplet,
    Lock: Lock,
    Lightbulb: Lightbulb,
    Users: Users,
    Smile: Smile,
}

// ----------------------------------------------------------------------
// Wellness Content Data
// ----------------------------------------------------------------------
const topics = [
    { id: 1, title: "Sexual Health (Intro)", subtitle: "Overall Well-being", detail: "Sexual health is about overall well-being in body, mind, and relationships. It means understanding yourself, making safe choices, and respecting others. Everyone deserves accurate information and access to care without judgment.", icon: "HeartPulse" },
    { id: 2, title: "Consent", subtitle: "Clear, Mutual, Revocable", detail: "Consent means freely agreeing to any sexual activity. It must be clear, mutual, and can be withdrawn anytime. True consent comes from respect — never pressure or fear.", icon: "Handshake" },
    { id: 3, title: "Safe Practices", subtitle: "Protection and Check-ups", detail: "Practice safe sex to protect your health. Use condoms, get regular check-ups, and communicate openly. Safety ensures confidence, comfort, and care in every relationship.", icon: "ShieldCheck" },
    { id: 4, title: "Reproductive Rights", subtitle: "Choice and Freedom", detail: "Everyone has the right to make informed choices about their body — from contraception to pregnancy care. Respecting reproductive rights supports equality and personal freedom.", icon: "Scale" },
    { id: 5, title: "Respectful Communication", subtitle: "Honesty Builds Trust", detail: "Healthy relationships grow from honest and kind conversations. Talk about feelings, respect boundaries, and listen without judgment. Communication builds trust and understanding.", icon: "MessageCircle" },
    { id: 6, title: "Menstrual Health & Hygiene", subtitle: "Natural and Healthy", detail: "Menstruation is natural and healthy. Use clean sanitary products, change them often, and maintain hygiene. Let’s end stigma — periods deserve respect, not silence.", icon: "Droplet" },
    { id: 7, title: "Confidential Screenings & Counseling", subtitle: "Private Access to Care", detail: "Students can access private health screenings and counseling. These services offer safe spaces for STI tests, mental support, and reproductive guidance. Confidential help builds confidence.", icon: "Lock" },
    { id: 8, title: "Seeking Advice on Sexual Health", subtitle: "Trusted Sources Only", detail: "Always get information from trusted sources — doctors, counselors, or verified platforms. Asking questions and seeking help shows strength, not shame.", icon: "Lightbulb" },
    { id: 9, title: "Open Discussions with Parents & Community", subtitle: "Reducing Stigma", detail: "Talking openly about sexual health reduces stigma and spreads awareness. When families and communities listen, young people learn safely and confidently.", icon: "Users" },
    { id: 10, title: "Mental Well-being & Sexuality", subtitle: "Acceptance and Inner Peace", detail: "Your sexuality and emotions are linked. Accepting yourself and seeking support when needed builds confidence and inner peace. Healthy minds create healthy relationships.", icon: "Smile" },
];

// ----------------------------------------------------------------------
// Main Component
// ----------------------------------------------------------------------
const WellnessTopicsPage = () => {
    return (
        <div className="bg-black min-h-screen">
            <HeroSection />
            <TopicGridSection />
        </div>
    )
}

// ----------------------------------------------------------------------
// Hero Section - Focused on Wellness Education
// ----------------------------------------------------------------------
const HeroSection = () => {
    return (
        <section className="relative min-h-[50vh] flex items-center justify-center overflow-hidden pt-20">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-950/30 to-black" />
                <div className="absolute inset-0">
                    <div className={`absolute top-20 left-20 w-96 h-96 ${PRIMARY_BG_CLASS} rounded-full blur-[150px] opacity-30`} />
                    <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full blur-[150px] opacity-30" />
                </div>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className={`inline-flex items-center gap-2 ${PRIMARY_BG_CLASS}/10 border border-blue-500/20 rounded-full px-4 py-2 mb-6`}>
                        <MessageSquare className={`w-4 h-4 ${PRIMARY_COLOR_CLASS}`} />
                        <span className={`text-sm font-medium ${PRIMARY_COLOR_CLASS}`}>ENH3155 Education Series</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                        Essential Topics
                        <span className={`block ${ACCENT_TEXT_CLASS}`}>
                            Sexual Health and Well-being
                        </span>
                    </h1>

                    <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                        Empower yourself with clear, non-judgmental information on key aspects of sexual health, relationships, and personal well-being.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

// ----------------------------------------------------------------------
// Topic Grid Section (Main Content)
// ----------------------------------------------------------------------
const TopicGridSection = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.2 })

    return (
        <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-slate-950">
            <div className="max-w-7xl mx-auto">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {topics.map((topic, idx) => {
                        const IconComponent = IconMap[topic.icon]
                        
                        return (
                            <motion.div
                                key={topic.id}
                                initial={{ opacity: 0, y: 40 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: idx * 0.08, duration: 0.5 }}
                                className="group"
                            >
                                <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl h-full flex flex-col transition-all duration-300 hover:border-blue-500/50 hover:bg-white/10 hover:shadow-xl hover:shadow-blue-500/10">
                                    <div className={`w-12 h-12 flex items-center justify-center ${CTA_GRADIENT_CLASS} rounded-full mb-4 text-white p-2 flex-shrink-0`}>
                                        {IconComponent && <IconComponent className="w-6 h-6" />}
                                    </div>
                                    
                                    <h3 className="text-xl font-bold text-white mb-1">{topic.title}</h3>
                                    <p className="text-sm font-medium text-blue-300 mb-4">{topic.subtitle}</p>
                                    
                                    <p className="text-gray-400 text-base mb-4 flex-grow">
                                        {topic.detail}
                                    </p>

                                    <div className="mt-auto flex items-center text-blue-400 font-semibold group-hover:text-blue-300 transition-colors">
                                        Learn More 
                                        <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
                
                {/* CTA at the bottom */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: topics.length * 0.08, duration: 0.5 }}
                    className="text-center mt-16"
                >
                    <a
                        href="#" // Link to a counseling or further resources page
                        className={`inline-flex items-center gap-3 ${CTA_GRADIENT_CLASS} text-white px-8 py-4 rounded-xl font-bold ${CTA_HOVER_SHADOW} transition-all`}
                    >
                        Need Private Advice? Talk to a Counselor
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

// Export the main component
export default WellnessTopicsPage