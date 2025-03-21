import React, { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { SpaceBackground } from './components/SpaceBackground';
import { HeroSection } from './components/HeroSection';
import { JudgesSection } from './components/JudgesSection';
import { SponsorsSection } from './components/SponsorsSection';
import { CountdownTimer } from './components/CountdownTimer';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {loading && <LoadingScreen onLoadingComplete={() => setLoading(false)} />}
      <SpaceBackground />
      <CountdownTimer />
      <main className="relative z-10">
        <HeroSection />
        <JudgesSection />
        <SponsorsSection />
      </main>
    </div>
  );
}

export default App;