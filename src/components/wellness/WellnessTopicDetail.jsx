import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            duration: 0.5
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
};

const WellnessTopicDetail = ({ topic }) => {
    if (!topic) {
        return (
            <div className="min-h-[60vh] flex items-center justify-center bg-black text-white p-8">
                <p className="text-xl">Topic not found. Please check the URL.</p>
            </div>
        );
    }

    const IconComponent = topic.icon;
    const PRIMARY_COLOR_TEXT = topic.color;
    const PRIMARY_COLOR_BG = topic.color.replace('text-', 'bg-');

    return (
        <div className="bg-black min-h-screen pt-20">
            {/* Header Section */}
            <header className="relative py-24 px-4 bg-slate-950/50 border-b border-blue-900/50 overflow-hidden">
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-6 inline-flex items-center space-x-3"
                    >
                        <div className={`p-4 rounded-full ${PRIMARY_COLOR_BG} text-white shadow-xl shadow-blue-500/30`}>
                            <IconComponent className="w-8 h-8" />
                        </div>
                    </motion.div>
                    
                    <motion.h1 
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="text-5xl font-black text-white mb-3"
                    >
                        {topic.title}
                    </motion.h1>
                    
                    <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                        className={`text-xl font-medium ${PRIMARY_COLOR_TEXT}`}
                    >
                        {topic.subtitle}
                    </motion.p>
                </div>
            </header>

            {/* Content Sections */}
            <motion.main 
                className="max-w-4xl mx-auto py-16 px-4"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {topic.sections.map((section, index) => (
                    <motion.section 
                        key={index}
                        variants={itemVariants}
                        className="mb-12 p-6 bg-slate-900/50 border border-slate-800 rounded-xl"
                    >
                        <h2 className={`text-3xl font-bold mb-4 ${PRIMARY_COLOR_TEXT}`}>
                            {section.heading}
                        </h2>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            {section.content}
                        </p>
                    </motion.section>
                ))}

                {/* Call to Action Block */}
                <motion.div 
                    variants={itemVariants} 
                    className="mt-16 text-center p-8 bg-gradient-to-r from-blue-900 to-indigo-900 rounded-2xl shadow-2xl shadow-blue-500/20"
                >
                    <h3 className="text-3xl font-bold text-white mb-3">Ready to Talk?</h3>
                    <p className="text-lg text-blue-200 mb-6">
                        If you have specific questions or need private guidance, our counselors are here to help.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center gap-3 bg-emerald-500 text-white px-8 py-3 rounded-full font-bold shadow-lg hover:bg-emerald-600 transition-colors"
                    >
                        Access Confidential Support
                        <ArrowRight className="w-5 h-5" />
                    </a>
                </motion.div>
            </motion.main>
        </div>
    );
};

export default WellnessTopicDetail;