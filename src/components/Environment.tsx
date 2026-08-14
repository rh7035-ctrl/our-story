import React, { useMemo } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Environment: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // 1. SKY GRADIENTS
  const skyBackground = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.5, 0.65, 0.8, 0.88, 0.96, 1],
    [
      'linear-gradient(180deg, #5C8EC4 0%, #E9AA7B 100%)', // Afternoon
      'linear-gradient(180deg, #A88B7D 0%, #F4B266 100%)', // Golden Hour
      'linear-gradient(180deg, #4A3A69 0%, #D86C60 100%)', // Sunset
      'linear-gradient(180deg, #1A152E 0%, #4A2B45 100%)', // Twilight
      'linear-gradient(180deg, #0A0F24 0%, #171E36 100%)', // Night
      'linear-gradient(180deg, #020308 0%, #060812 100%)', // Deep Night
      'linear-gradient(180deg, #2C284B 0%, #876176 100%)', // Dawn
      'linear-gradient(180deg, #6C81A3 0%, #F0B784 100%)', // Sunrise
      'linear-gradient(180deg, #5E88A1 0%, #D2B889 100%)', // Future Evening
    ]
  );

  // 2. CELESTIAL BODIES (Sun & Moon)
  const sunY = useTransform(scrollYProgress, [0, 0.4, 0.5, 0.8, 0.96, 1], ['10vh', '70vh', '120vh', '120vh', '40vh', '30vh']);
  const sunOpacity = useTransform(scrollYProgress, [0, 0.4, 0.45, 0.8, 0.9, 0.96], [1, 1, 0, 0, 1, 1]);
  
  const moonY = useTransform(scrollYProgress, [0.4, 0.55, 0.8, 0.95], ['100vh', '20vh', '25vh', '120vh']);
  const moonOpacity = useTransform(scrollYProgress, [0.4, 0.5, 0.85, 0.95], [0, 1, 1, 0]);

  // 3. PARALLAX STARS (Two layers for 3D depth)
  const starsOpacity = useTransform(scrollYProgress, [0.4, 0.55, 0.8, 0.9], [0, 1, 1, 0]);

  // 4. DYNAMIC ATMOSPHERE (Clouds change color based on time of day)
  const cloudColor = useTransform(
    scrollYProgress,
    [0, 0.4, 0.5, 0.8, 1], 
    [
      'rgba(255, 255, 255, 0.3)', // Afternoon/Golden
      'rgba(200, 100, 120, 0.2)', // Sunset
      'rgba(20, 20, 30, 0.1)',    // Twilight/Night
      'rgba(10, 10, 15, 0.05)',   // Deep Night
      'rgba(255, 255, 255, 0.2)'  // Dawn/Sunrise/Future
    ]
  );
  const cloudsY = useTransform(scrollYProgress, [0, 1], ['0%', '-15%']);

  // 5. FUTURE SCENE (Detailed Landscape)
  const futureSceneOpacity = useTransform(scrollYProgress, [0.96, 0.99], [0, 1]);
  const futureSceneY = useTransform(scrollYProgress, [0.95, 1], ['20px', '0px']);

  // Generate 25 randomized ambient particles (dust/fireflies) so it feels alive
  const particles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      duration: `${Math.random() * 10 + 10}s`,
      delay: `-${Math.random() * 20}s`, // Negative delay means they are already floating when you load
      opacity: Math.random() * 0.5 + 0.2
    }));
  }, []);

  return (
    <motion.div className="environment-fixed" style={{ background: skyBackground }}>
      
      {/* 1. CINEMATIC FILM GRAIN (Instantly makes it look like a real camera lens) */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.04, pointerEvents: 'none', zIndex: 1, backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }} />

      {/* 2. CAMERA VIGNETTE */}
      <div className="lens-vignette" />

      {/* 3. AMBIENT PARTICLES (Dust / Specks in the air) */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 2 }}>
        {particles.map((p) => (
          <div key={p.id} className="ambient-particle"
               style={{ left: p.left, width: p.size, height: p.size, opacity: p.opacity, 
                        animation: `floatUp ${p.duration} linear infinite ${p.delay}` }} />
        ))}
      </div>

      {/* 4. PARALLAX STARS */}
      <motion.div style={{ opacity: starsOpacity, position: 'absolute', inset: -200, zIndex: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
      <motion.div style={{ opacity: starsOpacity, position: 'absolute', inset: -200, zIndex: 0, backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.4) 2px, transparent 2px)', backgroundSize: '150px 150px', backgroundPosition: '40px 40px' }} />

      {/* 5. THE MOON */}
      <motion.div style={{ top: moonY, opacity: moonOpacity, position: 'absolute', left: '60%', transform: 'translateX(-50%)', width: '100px', height: '100px', borderRadius: '50%', background: 'radial-gradient(circle at 30% 30%, #FFF 0%, #D4D4D8 70%, #A1A1AA 100%)', boxShadow: '0 0 60px 20px rgba(255,255,255,0.15), inset -10px -10px 20px rgba(0,0,0,0.2)', zIndex: 1 }} />

      {/* 6. THE SUN (With Cinematic Optical Halo) */}
      <motion.div style={{ top: sunY, opacity: sunOpacity, position: 'absolute', left: '40%', transform: 'translateX(-50%)', width: '140px', height: '140px', borderRadius: '50%', backgroundColor: '#FFF0C2', filter: 'blur(2px)', boxShadow: '0 0 120px 60px rgba(255, 215, 100, 0.4), 0 0 300px 100px rgba(255, 150, 50, 0.2)', zIndex: 1 }} />

      {/* 7. TRAVELING PARALLAX CLOUDS */}
      {/* Cloud 1: Large, slow background cloud */}
      <motion.div className="cloud-slow delay-1" style={{ y: cloudsY, color: cloudColor, top: '15%', zIndex: 1 }}>
        <svg width="400" viewBox="0 0 100 40" fill="currentColor" style={{ opacity: 0.6, filter: 'blur(12px)' }}>
          <path d="M 25 25 Q 20 10 35 15 Q 45 0 65 10 Q 80 5 85 20 Q 95 20 90 30 Q 95 35 80 35 L 25 35 Q 10 35 25 25 Z" />
        </svg>
      </motion.div>

      {/* Cloud 2: Medium, slightly faster middle cloud */}
      <motion.div className="cloud-med delay-2" style={{ y: cloudsY, color: cloudColor, top: '25%', zIndex: 1 }}>
        <svg width="250" viewBox="0 0 100 40" fill="currentColor" style={{ opacity: 0.7, filter: 'blur(8px)' }}>
          <path d="M 20 20 Q 20 10 30 10 Q 40 0 55 10 Q 70 5 80 15 Q 95 15 90 25 Q 95 35 80 35 L 25 35 Q 10 35 20 20 Z" />
        </svg>
      </motion.div>

      {/* Cloud 3: Small, fastest foreground cloud */}
      <motion.div className="cloud-fast delay-3" style={{ y: cloudsY, color: cloudColor, top: '35%', zIndex: 2 }}>
        <svg width="300" viewBox="0 0 100 40" fill="currentColor" style={{ opacity: 0.8, filter: 'blur(6px)' }}>
          <path d="M 30 25 Q 25 10 40 15 Q 50 5 65 15 Q 85 10 85 25 Q 100 25 90 35 Q 95 40 75 35 L 25 35 Q 15 35 30 25 Z" />
        </svg>
      </motion.div>

      {/* 8. CONSTANT FOREGROUND SILHOUETTE (Gives the user a grounded perspective) */}
      <div style={{ position: 'absolute', bottom: '-10px', left: '-5%', width: '110%', height: '15vh', zIndex: 3, pointerEvents: 'none', opacity: 0.9 }}>
        <svg className="swaying-grass" viewBox="0 0 1000 100" preserveAspectRatio="none" style={{ width: '100%', height: '100%', fill: '#050608' }}>
           <path d="M0,100 L0,60 Q10,40 20,80 T50,50 T80,90 T120,40 T160,80 T220,30 T280,70 T350,20 T420,80 T500,40 T580,90 T650,30 T720,80 T800,20 T880,70 T950,40 L1000,70 L1000,100 Z" />
        </svg>
      </div>

      {/* 9. FUTURE SCENE (Fades in over the grass at the end) */}
      <motion.div style={{ opacity: futureSceneOpacity, y: futureSceneY, position: 'absolute', bottom: 0, width: '100%', height: '50vh', display: 'flex', alignItems: 'flex-end', justifyContent: 'center', pointerEvents: 'none', zIndex: 4 }}>
        <div style={{ position: 'relative', width: '100%', maxWidth: '1200px', height: '100%' }}>
          
          {/* Distant Trees */}
          <svg preserveAspectRatio="none" viewBox="0 0 1000 100" style={{ position: 'absolute', bottom: '10px', width: '100%', height: '120px', fill: '#0A0C10' }}>
             <path d="M0,100 L0,50 Q20,30 40,60 T90,40 T150,70 T220,30 T300,60 T380,20 T450,50 T550,10 T650,60 T750,30 T850,70 T950,20 L1000,60 L1000,100 Z" />
          </svg>

          {/* House Vector */}
          <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-40%)', width: '320px', height: '180px' }}>
            <div style={{ position: 'absolute', bottom: 0, width: '100%', height: '100px', backgroundColor: '#181A20' }} />
            <div style={{ position: 'absolute', top: '10px', width: '100%', height: '70px', backgroundColor: '#131418', clipPath: 'polygon(50% 0%, 100% 100%, 0% 100%)' }} />
            <div style={{ position: 'absolute', top: '20px', right: '40px', width: '20px', height: '50px', backgroundColor: '#131418' }} />
            
            {/* Windows */}
            <div style={{ position: 'absolute', bottom: '30px', left: '40px', width: '35px', height: '55px', backgroundColor: '#FFDCA8', borderRadius: '4px', boxShadow: '0 0 20px rgba(255, 220, 168, 0.4)', filter: 'blur(1px)' }} />
            <div style={{ position: 'absolute', bottom: '30px', right: '40px', width: '35px', height: '55px', backgroundColor: '#FFDCA8', borderRadius: '4px', boxShadow: '0 0 20px rgba(255, 220, 168, 0.4)', filter: 'blur(1px)' }} />
            
            <div style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', width: '40px', height: '60px', backgroundColor: '#0A0B0E' }} />
          </div>
        </div>
      </motion.div>

    </motion.div>
  );
};