import React, { useState, useRef } from 'react';
import { Play, Pause } from 'lucide-react'; // Elegant icons

export const AudioController: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: 100 }}>
      {/* We are placing the MP3 in the public folder */}
      <audio ref={audioRef} src="/our-story/soundtrack.mp3" loop />
      
      <button 
        onClick={togglePlay}
        style={{
          background: 'rgba(20, 20, 20, 0.4)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255, 255, 255, 0.15)',
          borderRadius: '50%',
          width: '50px',
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          cursor: 'pointer',
          boxShadow: '0 10px 30px rgba(0,0,0,0.3)',
          transition: 'all 0.3s ease'
        }}
      >
        {isPlaying ? <Pause size={20} color="white" /> : <Play size={20} color="white" style={{ marginLeft: '4px' }} />}
      </button>
    </div>
  );
};