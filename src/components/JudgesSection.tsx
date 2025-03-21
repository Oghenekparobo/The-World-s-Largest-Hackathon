import { motion } from 'framer-motion';
import { Trophy, Users, Calendar, MapPin } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

const judges = [
  {
    name: "Dr. Sarah Chen",
    role: "AI Research Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200&h=200",
    bio: "Leading AI researcher with 15+ years of experience in machine learning and robotics."
  },
  {
    name: "James Rodriguez",
    role: "Tech Entrepreneur",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
    bio: "Founded multiple successful tech startups and invested in over 50 companies."
  },
  {
    name: "Dr. Emily Watson",
    role: "Quantum Computing Expert",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200&h=200",
    bio: "Pioneer in quantum computing applications and quantum machine learning."
  }
];

const features = [
  {
    icon: Trophy,
    title: "Prizes Worth $100K",
    description: "Compete for amazing prizes and recognition"
  },
  {
    icon: Users,
    title: "10,000+ Participants",
    description: "Join a global community of innovators"
  },
  {
    icon: Calendar,
    title: "48 Hours",
    description: "Two days of intense coding and creativity"
  },
  {
    icon: MapPin,
    title: "Global Event",
    description: "Participate from anywhere in the world"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export const JudgesSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"
          >
            Meet Our Judges
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Industry experts who will evaluate your innovative solutions
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow"
            >
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="relative">
          <Swiper
            effect="cards"
            grabCursor={true}
            modules={[EffectCards]}
            className="w-full max-w-4xl mx-auto"
            style={{
              padding: '2rem',
              margin: '0 auto',
            }}
          >
            {judges.map((judge, index) => (
              <SwiperSlide key={judge.name}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="bg-white rounded-2xl p-8 text-center h-full shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="relative w-40 h-40 mx-auto mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-xl opacity-30" />
                    <img
                      src={judge.image}
                      alt={judge.name}
                      className="relative w-full h-full rounded-full object-cover border-4 border-blue-100"
                    />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-gray-800">{judge.name}</h3>
                    <p className="text-xl text-blue-600 font-semibold">{judge.role}</p>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                      {judge.bio}
                    </p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}; 