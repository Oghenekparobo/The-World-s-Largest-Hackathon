import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const calculateTimeLeft = () => {
  const now = new Date();
  const friday = new Date();
  
  // Set to next Friday at 23:59:59
  const daysUntilFriday = (5 - now.getDay() + 7) % 7; // 5 is Friday
  friday.setDate(now.getDate() + daysUntilFriday);
  friday.setHours(23, 59, 59, 999);
  
  const difference = friday.getTime() - now.getTime();
  
  if (difference > 0) {
    return {
      hours: Math.floor(difference / (1000 * 60 * 60)),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }
  return { hours: 0, minutes: 0, seconds: 0 };
};

const TimeUnit = ({ value, label }: { value: number; label: string }) => (
  <motion.div
    initial={{ scale: 0.8, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.3 }}
    className="flex flex-col items-center"
  >
    <div className="relative">
      <motion.div
        key={value}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2 }}
        className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-lg px-6 py-3 text-4xl md:text-5xl font-mono text-blue-400"
      >
        {value.toString().padStart(2, '0')}
      </motion.div>
      <div className="absolute inset-0 bg-blue-500/20 blur-lg rounded-lg" />
    </div>
    <span className="text-gray-400 mt-2 text-sm uppercase tracking-wider">{label}</span>
  </motion.div>
);

export const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-gray-900/80 backdrop-blur-md rounded-2xl p-6 border border-gray-700/50"
      >
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
          <h3 className="text-blue-400 font-mono text-sm uppercase tracking-wider">Countdown</h3>
        </div>
        <div className="flex gap-4">
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </motion.div>
    </div>
  );
}; 