import React, { useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { SpaceBackground } from './components/SpaceBackground';
import { HeroSection } from './components/HeroSection';
import { JudgesSection } from './components/JudgesSection';
import { SponsorsSection } from './components/SponsorsSection';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && <LoadingScreen onLoadingComplete={() => setLoading(false)} />}
      <SpaceBackground />
      <main className="relative z-10">
        <HeroSection />
        <JudgesSection />
        <SponsorsSection />
      </main>
    </>
  );
}

export default App;