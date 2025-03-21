import { motion } from 'framer-motion';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const HeroSection = () => {
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const title = titleRef.current;
    if (!title) return;

    gsap.from(title, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: title,
        start: "top center",
        end: "bottom center",
        toggleActions: "play none none reverse"
      }
    });
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ 
            opacity: 0,
            x: -100,
            y: 50,
            rotate: -5
          }}
          animate={{ 
            opacity: 1,
            x: 0,
            y: 0,
            rotate: 0
          }}
          transition={{
            duration: 1,
            delay: 0.5,
            ease: [0.4, 0, 0.2, 1]
          }}
          className="space-y-8"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
              Hackathon
            </span>
            <br />
            <span className="text-4xl md:text-6xl">2024</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Join us for the biggest hackathon of the year. Build, innovate, and create the future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white font-semibold hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
              Register Now
            </button>
            <button className="px-8 py-4 border border-gray-700 rounded-full text-white font-semibold hover:bg-gray-800/50 transition-all duration-300">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 