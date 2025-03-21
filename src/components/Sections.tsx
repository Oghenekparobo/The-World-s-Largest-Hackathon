import { Trophy, Users, Calendar, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
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

const sponsors = [
  {
    name: "Google",
    logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
  },
  {
    name: "Microsoft",
    logo: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b?ver=5c31"
  },
  {
    name: "Amazon",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png"
  },
  {
    name: "Meta",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Meta_Platforms_Inc._logo.svg/2560px-Meta_Platforms_Inc._logo.svg.png"
  }
];

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const diamondVariants = {
  initial: { rotate: 0 },
  animate: { 
    rotate: 360,
    transition: {
      duration: 20,
      ease: "linear",
      repeat: Infinity
    }
  }
};

export const Sections = () => {
  return (
    <div className="relative z-10 min-h-screen text-white">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="min-h-screen flex items-center justify-center text-center px-4 relative"
      >
        <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row items-center justify-between">
          <motion.div 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="md:w-2/3 text-left"
          >
            <motion.h1 
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-7xl md:text-9xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"
            >
              The World's Largest Hackathon
            </motion.h1>
            <motion.p 
              variants={textVariants}
              initial="hidden"
              animate="visible"
              className="text-2xl md:text-3xl text-gray-300 max-w-3xl"
            >
              Join us for an unprecedented virtual journey into innovation
            </motion.p>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="md:w-1/3"
          >
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=500"
              alt="Space"
              className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </motion.section>

      {/* Info Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Calendar,
              title: "Date",
              content: "TBD - Stay tuned for the announcement",
              gradient: "from-blue-500 to-purple-500"
            },
            {
              icon: MapPin,
              title: "Location",
              content: "Virtual - Accessible Worldwide",
              gradient: "from-purple-500 to-pink-500"
            },
            {
              icon: Trophy,
              title: "Prizes",
              content: "$1M+ Prize Pool",
              subContent: [
                "🥇 Grand Prize: $500,000",
                "🥈 Runner-up: $250,000",
                "🎯 Category Prizes: $50,000 each"
              ],
              gradient: "from-pink-500 to-red-500"
            },
            {
              icon: Users,
              title: "Theme",
              content: "Quantum Future: Building Tomorrow's Reality",
              gradient: "from-red-500 to-orange-500"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="relative"
            >
              <motion.div
                variants={diamondVariants}
                initial="initial"
                animate="animate"
                className="absolute inset-0 bg-gradient-to-br opacity-20 blur-xl transform rotate-45"
                style={{
                  background: `linear-gradient(to bottom right, var(--tw-gradient-stops))`,
                  '--tw-gradient-from': item.gradient.split(' ')[1],
                  '--tw-gradient-to': item.gradient.split(' ')[3]
                }}
              />
              <div className="relative bg-black/40 backdrop-blur-xl p-8 rounded-2xl h-full border border-white/10 transform rotate-0 hover:rotate-0 transition-transform duration-500">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <item.icon className={`w-12 h-12 mb-4 bg-gradient-to-r ${item.gradient} rounded-lg p-2`} />
                </motion.div>
                <motion.h3 
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                  className="text-2xl font-bold mb-2"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  variants={textVariants}
                  initial="hidden"
                  whileInView="visible"
                >
                  {item.content}
                </motion.p>
                {item.subContent && (
                  <motion.ul 
                    variants={textVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="mt-2 space-y-1"
                  >
                    {item.subContent.map((sub, idx) => (
                      <li key={idx}>{sub}</li>
                    ))}
                  </motion.ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Judges Section */}
      <section className="py-20 px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
        >
          Meet Our Judges
        </motion.h2>
        <div className="max-w-md mx-auto">
          <Swiper
            effect={'cards'}
            grabCursor={true}
            modules={[EffectCards]}
            className="w-full"
          >
            {judges.map((judge, index) => (
              <SwiperSlide key={index}>
                <div className="bg-gradient-to-br from-purple-900/80 to-black/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10">
                  <div className="relative w-48 h-48 mx-auto mb-6">
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full blur-2xl opacity-30" />
                    <img 
                      src={judge.image} 
                      alt={judge.name}
                      className="relative w-full h-full rounded-full object-cover border-4 border-white/10"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-2">{judge.name}</h3>
                  <p className="text-purple-400 text-center mb-4">{judge.role}</p>
                  <p className="text-gray-300 text-center">{judge.bio}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-20 px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"
        >
          Our Sponsors
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.2 }}
          className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white/5 backdrop-blur-xl p-8 rounded-2xl border border-white/10 flex items-center justify-center"
            >
              <img 
                src={sponsor.logo} 
                alt={sponsor.name}
                className="w-full h-12 object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};