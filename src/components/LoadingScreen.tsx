import { motion } from 'framer-motion';
import { Rocket } from 'lucide-react';

export const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ duration: 2, delay: 3 }}
      onAnimationComplete={onLoadingComplete}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: -1000 }}
        transition={{ duration: 2, delay: 1 }}
        className="text-white text-center"
      >
        <Rocket className="w-24 h-24 mb-4 mx-auto text-blue-500" />
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="text-2xl font-bold"
        >
          Launching...
        </motion.div>
      </motion.div>
    </motion.div>
  );
};