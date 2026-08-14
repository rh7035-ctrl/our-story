import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: ReactNode;
  align?: 'center' | 'left' | 'right';
  glass?: boolean;
}

export const CinematicText: React.FC<Props> = ({ children, align = 'center', glass = false }) => {
  // Ultra-Transparent Glass (50% more transparent than before)
  const glassStyles = glass ? {
    // Cut the opacity in half (from 0.04 down to 0.02, and fading into complete transparency)
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0) 100%)',
    
    // Kept the Apple saturation and blur so it still distorts the background like real glass
    backdropFilter: 'saturate(160%) blur(24px)', 
    WebkitBackdropFilter: 'saturate(160%) blur(24px)',
    
    // Softened the refraction highlights by 50% so they don't overpower the ultra-clear glass
    boxShadow: `
      inset 0 1px 1px rgba(255, 255, 255, 0.2),    /* Softened top rim light */
      inset 0 -1px 1px rgba(255, 255, 255, 0.02),  /* Almost invisible bottom reflection */
      inset 1px 0 1px rgba(255, 255, 255, 0.05),   /* Softened side light */
      0 20px 40px -10px rgba(0, 0, 0, 0.15)        /* Ambient drop shadow */
    `,
    
    // Halved the border opacity
    border: '1px solid rgba(255, 255, 255, 0.015)',
    borderRadius: '24px',
    padding: '40px 32px',
    width: '100%',
    cursor: 'pointer'
  } : {};

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: false, amount: 0.6, margin: "-10%" }}
      transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
      
      // Hover state is also cut in half for perfect consistency
      whileHover={glass ? { 
        scale: 1.015, 
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.035) 0%, rgba(255, 255, 255, 0.005) 100%)',
        boxShadow: `
          inset 0 1px 2px rgba(255, 255, 255, 0.3),
          inset 0 -1px 1px rgba(255, 255, 255, 0.03),
          inset 1px 0 1px rgba(255, 255, 255, 0.08),
          0 30px 50px -10px rgba(0, 0, 0, 0.2)
        `
      } : {}}
      whileTap={glass ? { scale: 0.98 } : {}}
      
      style={{
        width: '90%', 
        maxWidth: '680px', 
        margin: '0 auto',
        textAlign: align,
        ...glassStyles
      }}
    >
      {children}
    </motion.div>
  );
};