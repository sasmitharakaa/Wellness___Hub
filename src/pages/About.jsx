import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
    Calendar,
    Award,
    Users,
    Leaf, 
    TrendingUp,
    Handshake,
    Star,
    Shield,
    Target,
    Eye,
    CheckCircle,
    UtensilsCrossed, 
    Heart, 
    Droplet, 
    Flower2, 
    Zap as Energy,
    BookOpen,
    Quote
} from 'lucide-react'

// --- Core Configuration ---
const PRIMARY_COLOR_CLASS = 'text-green-400'
const SECONDARY_COLOR_CLASS = 'text-teal-600'
const PRIMARY_ACCENT_CLASS = 'bg-green-500/10 border-green-500/20'
const GRADIENT_CLASS = 'bg-gradient-to-r from-green-400 via-green-400 to-teal-600'
const ACCENT_TEXT_CLASS = 'bg-gradient-to-r from-green-400 via-green-400 to-teal-600 bg-clip-text text-transparent'
const CTA_TEXT_COLOR_CLASS = 'text-teal-600' 
// const FOUNDER_NAME = 'Hasanki Nimthara'
const UNIVERSITY_DETAIL = 'University of Colombo, Faculty of International Relations'

// Main component that combines all sections
const About = () => {
    return (
        <div id="about" className="bg-black">
            <AboutHero />
            <FounderQuote />
            <Timeline />
            <MissionVision />
            <Achievements />
            <Community />
            <FutureGoals />
        </div>
    )
}

// ----------------------------------------------------------------------
// --- Hero Section ---
// ----------------------------------------------------------------------
const AboutHero = () => {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    })

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

    return (
        <section ref={ref} className="relative min-h-screen overflow-hidden flex items-center">
            <motion.div 
                style={{ y, opacity }}
                className="absolute inset-0 z-0"
            >
                {/* Background Image: Placeholder for a calming, high-quality wellness shot */}
                <img
                    src="https://images.unsplash.com/photo-1544984243-7724d499e078?q=80&w=1920&auto=format&fit=crop"
                    alt="Calm, natural setting for wellness"
                    className="w-full h-full object-cover object-center opacity-30"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
            </motion.div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl"
                >
                    <div className={`inline-flex items-center gap-2 ${PRIMARY_ACCENT_CLASS} rounded-full px-4 py-2 mb-6`}>
                        <Heart className={`w-4 h-4 ${PRIMARY_COLOR_CLASS}`} />
                        <span className={`text-sm font-medium ${PRIMARY_COLOR_CLASS}`}>Founded by {FOUNDER_NAME}</span>
                    </div>

                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
                        Our Story
                        <span className={`block ${ACCENT_TEXT_CLASS}`}>
                            Built on a Holistic Vision
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
                        <ENH3155></ENH3155> was born from the commitment of {FOUNDER_NAME}, an undergraduate of **{UNIVERSITY_DETAIL}**, to empower women through comprehensive, restorative health solutions.
                    </p>

                    <div className="grid sm:grid-cols-3 gap-6">
                        {[
                            { icon: <Award />, value: '5+', label: 'Years of Dedicated Study' },
                            { icon: <Users />, value: '100+', label: 'Clients Guided to Wellness' },
                            { icon: <Leaf />, value: '4', label: 'Core Pillars of Restoration' }
                        ].map((stat, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + idx * 0.1 }}
                                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                            >
                                <div className={`${PRIMARY_COLOR_CLASS} mb-3`}>{stat.icon}</div>
                                <div className="text-3xl font-black text-white mb-1">{stat.value}</div>
                                <div className="text-gray-400 text-sm">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

// ----------------------------------------------------------------------
// --- Founder Quote Section (New Addition for Personal Touch) ---
// ----------------------------------------------------------------------
const FounderQuote = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
        <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-950">
            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.8 }}
                    className="relative p-8 md:p-12 border-l-4 border-green-400 bg-slate-900 rounded-xl shadow-xl"
                >
                    <Quote className={`w-10 h-10 absolute top-4 left-4 ${ACCENT_TEXT_CLASS} opacity-50`} />
                    <p className="text-2xl italic text-gray-300 mb-6 mt-4 leading-relaxed">
                        "My journey began with the simple realization that women deserve a dedicated space for holistic healing. We don't just treat symptoms; we restore the inner balance, empowering you to live a life of energy and purpose."
                    </p>
                    <footer className={`text-right text-lg font-semibold ${PRIMARY_COLOR_CLASS}`}>
                        — {FOUNDER_NAME}
                    </footer>
                </motion.div>
            </div>
        </section>
    )
}

// ----------------------------------------------------------------------
// --- Timeline (Wellness Milestones) ---
// ----------------------------------------------------------------------
const Timeline = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    const milestones = [
        {
            year: "2020",
            title: "Academic Foundation",
            description: `The concept begins during ${FOUNDER_NAME}'s studies at ${UNIVERSITY_DETAIL}, focusing on the intersection of mental wellbeing and societal empowerment.`,
            
            icon: <BookOpen />
        },
        {
            year: "2022",
            title: "Holistic Certification",
            description: "Completed key certifications in advanced mindfulness practices and specialized women's nutritional guidance, formalizing the service offerings.",
         
            icon: <Award />
        },
        {
            year: "2023",
            title: "Digital Platform Launch",
            description: "ENH3155's online consultation platform and personalized planning tool went live, allowing for remote guidance and support.",
             
            icon: <UtensilsCrossed />
        },
        {
            year: "2024",
            title: "Community Workshops",
            description: "Hosted the first series of successful 'Inner Equilibrium' workshops, focusing on energy restoration and stress relief for professional women.",
            
            icon: <Users />
        },
        {
            year: "Present",
            title: "Commitment to Growth",
            description: "Expanded our content library and personalized programs, with a focus on sustainable, long-term vitality for clients globally.",
            
            icon: <TrendingUp />
        }
    ]

    return (
        <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-slate-950">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
                        The Journey to Equilibrium
                    </h2>
                    <p className="text-xl text-gray-400">
                        Milestones in holistic development and service
                    </p>
                </motion.div>

                <div className="relative">
                    <div className={`hidden lg:block absolute left-1/2 top-0 bottom-0 w-px ${GRADIENT_CLASS}`} />

                    <div className="space-y-16">
                        {milestones.map((milestone, idx) => (
                            <TimelineCard 
                                key={idx} 
                                milestone={milestone} 
                                index={idx} 
                                isInView={isInView}
                                isRight={idx % 2 !== 0}
                                primaryColorClass={PRIMARY_COLOR_CLASS}
                                gradientClass={GRADIENT_CLASS}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

const TimelineCard = ({ milestone, index, isInView, isRight, primaryColorClass, gradientClass }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: isRight ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: index * 0.2 }}
            className={`relative grid lg:grid-cols-2 gap-8 items-center ${isRight ? 'lg:grid-flow-dense' : ''}`}
        >
            {/* Year Badge - Center on timeline */}
            <div className={`hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-24 h-24 ${GRADIENT_CLASS} rounded-full items-center justify-center shadow-lg shadow-green-500/50`}>
                <div className="text-center">
                    <div className="text-2xl font-black text-white">{milestone.year}</div>
                </div>
            </div>
    
            {/* Content */}
            <div className={`${isRight ? 'lg:col-start-2' : ''}`}>
                <div className={`bg-slate-900 rounded-2xl p-8 border border-white/10 hover:border-green-500/50 transition-all`}>
                    <div className="flex items-center gap-3 mb-4 lg:hidden">
                        <div className={`w-16 h-16 ${GRADIENT_CLASS} rounded-xl flex items-center justify-center text-white font-black text-xl`}>
                            {milestone.year}
                        </div>
                        <div className={`${primaryColorClass}`}>{milestone.icon}</div>
                    </div>
                    
                    <div className={`hidden lg:block ${primaryColorClass} mb-4`}>{milestone.icon}</div>
                    <h3 className="text-2xl font-bold text-white mb-3">{milestone.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{milestone.description}</p>
                </div>
            </div>
    
            {/* Image */}
            <div className={`${isRight ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div className="relative rounded-2xl overflow-hidden aspect-video">
                    <img
                        src={milestone.image}
                        alt={milestone.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
            </div>
        </motion.div>
    )
}


// ----------------------------------------------------------------------
// --- Mission & Vision ---
// ----------------------------------------------------------------------
const MissionVision = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const cards = [
        {
            icon: <Target className="w-12 h-12" />,
            title: "Our Mission",
            description: "To empower every woman to reclaim her personal wellness journey, providing expert guidance and resources for mental, physical, and emotional restoration.",
            color: "from-green-500 to-teal-600" 
        },
        {
            icon: <Eye className="w-12 h-12" />,
            title: "Our Vision",
            description: "To be the trusted, primary resource for women's holistic health in the region, known for deep empathy, personalized care, and lasting results.",
            color: "from-indigo-500 to-purple-600" 
        },
        {
            icon: <Droplet className="w-12 h-12" />,
            title: "Our Philosophy",
            description: "Wellness is not a goal, but a practice. We emphasize sustainable habits, natural solutions, and the power of inner equilibrium over quick fixes.",
            color: "from-amber-500 to-yellow-600"
        }
    ]

    return (
        <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-3 gap-8">
                    {cards.map((card, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 40 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: idx * 0.2 }}
                            className="group"
                        >
                            <div className={`bg-gradient-to-br ${card.color} p-[2px] rounded-3xl`}>
                                <div className="bg-black rounded-3xl p-8 hover:bg-transparent transition-all h-full">
                                    <div className="text-white mb-6">{card.icon}</div>
                                    <h3 className="text-2xl font-black text-white mb-4">{card.title}</h3>
                                    <p className="text-gray-400 leading-relaxed">{card.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// ----------------------------------------------------------------------
// --- Achievements ---
// ----------------------------------------------------------------------
const Achievements = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const achievements = [
        { icon: <Award />, title: "Certified Holistic Wellness Coach", org: "Global Wellness Alliance" },
        { icon: <Flower2 />, title: "Advanced Certification in Mindfulness", org: "Mind-Body Institute" },
        { icon: <Shield />, title: "Specialist in Women's Nutritional Science", org: "Clinical Nutrition Body" },
        { icon: <Handshake />, title: "Featured on Local Wellness Podcasts", org: "Community Health Spotlight" },
        { icon: <CheckCircle />, title: "98% Positive Client Feedback", org: "Internal Audit" },
        { icon: <Energy />, title: "Expertise in Stress & Energy Restoration", org: "Continuing Education" }
    ]

    return (
        <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-950 to-black">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl lg:text-5xl font-black text-white mb-4">
                        Credentials & Expertise
                    </h2>
                    <p className="text-xl text-gray-400">
                        Our guidance is rooted in certified knowledge and deep personal dedication.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((achievement, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: idx * 0.1 }}
                            className={`bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-green-500/50 transition-all`}
                        >
                            <div className={`${PRIMARY_COLOR_CLASS} mb-4`}>{achievement.icon}</div>
                            <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                            <p className="text-sm text-gray-500">{achievement.org}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// ----------------------------------------------------------------------
// --- Community ---
// ----------------------------------------------------------------------
const Community = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <section ref={ref} className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                    >
                        {/* Community Image: Placeholder for a person meditating or doing yoga outdoors */}
                       
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        className="space-y-6"
                    >
                        <h2 className="text-4xl lg:text-5xl font-black text-white mb-6">
                            Building a Stronger Community
                        </h2>
                        <p className="text-xl text-gray-400 leading-relaxed">
                            True wellness extends beyond the individual. We are committed to fostering a supportive, knowledgeable community around women's health.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Hosting free monthly online workshops on managing modern stress",
                                "Partnering with local women's shelters to provide pro-bono wellness sessions",
                                "Creating a private forum for ongoing client support and shared experiences",
                                "Collaborating with local professionals (therapists, trainers) for comprehensive care",
                                "Advocating for better holistic health education access for women"
                            ].map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.3 + idx * 0.1 }}
                                    className="flex items-start gap-3"
                                >
                                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                    <span className="text-gray-300 text-lg">{item}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

// ----------------------------------------------------------------------
// --- Future Goals ---
// ----------------------------------------------------------------------
const FutureGoals = () => {
    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className={`relative ${GRADIENT_CLASS} rounded-3xl p-12 md:p-16 overflow-hidden`}>
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-96 h-96 bg-black rounded-full blur-3xl" />
                    </div>

                    <div className="relative text-center">
                        <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                            Join the Movement for Vitality
                        </h2>
                        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Our future involves expanding our digital course offerings, hosting international retreats, and continuing our mission to reach women who need guidance most.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`bg-white ${CTA_TEXT_COLOR_CLASS} px-10 py-4 rounded-xl font-bold text-lg hover:bg-black hover:text-white transition-colors border border-transparent hover:border-white`}
                        >
                            <span className="flex items-center gap-2">
                                <Calendar className="w-5 h-5" />
                                Book Your Initial Consultation
                            </span>
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About