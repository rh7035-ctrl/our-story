import React, { useState, useRef, useEffect } from 'react';

export const AudioController: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const audioSrc = `${import.meta.env.BASE_URL}soundtrack.mp3`;

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        const startAudioOnInteraction = () => {
          if (audioRef.current) {
            audioRef.current.play().then(() => {
              setIsPlaying(true);
              window.removeEventListener('click', startAudioOnInteraction);
              window.removeEventListener('scroll', startAudioOnInteraction);
            }).catch(() => {});
          }
        };

        window.addEventListener('click', startAudioOnInteraction, { once: true });
        window.addEventListener('scroll', startAudioOnInteraction, { once: true });
      });
    }
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {});
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };

  return (
    <div style={{ 
      position: 'fixed', 
      bottom: '24px', 
      left: '50%', 
      transform: 'translateX(-50%)', 
      zIndex: 1000,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '16px',
      background: 'rgba(18, 18, 20, 0.15)', // 80% more transparent
      backdropFilter: 'saturate(180%) blur(30px)',
      WebkitBackdropFilter: 'saturate(180%) blur(30px)',
      border: '1px solid rgba(255, 255, 255, 0.05)',
      borderTop: '1px solid rgba(255, 255, 255, 0.12)',
      borderRadius: '16px',
      padding: '12px 20px',
      boxShadow: '0 20px 50px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)',
      width: '90%',
      maxWidth: '460px'
    }}>
      {/* Audio Element */}
      <audio ref={audioRef} src={audioSrc} loop />
      
      {/* Left: Spotify Album Art & Track Info */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', overflow: 'hidden' }}>
        <div style={{
          width: '44px',
          height: '44px',
          borderRadius: '8px',
          background: 'linear-gradient(135deg, #1DB954 0%, #1ed760 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(29, 185, 84, 0.3)',
          flexShrink: 0
        }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="#121212">
            <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
          </svg>
        </div>
        <div style={{ overflow: 'hidden' }}>
          <div style={{ fontSize: '0.875rem', fontWeight: 600, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            Our Story
          </div>
          <div style={{ fontSize: '0.75rem', color: '#1DB954', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            our song
          </div>
        </div>
      </div>

      {/* Right: Controls & Volume */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {/* Play / Pause Button */}
        <button 
          onClick={togglePlay}
          style={{
            background: '#fff',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#121212',
            cursor: 'pointer',
            flexShrink: 0,
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
            transition: 'transform 0.1s ease'
          }}
        >
          {isPlaying ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#121212"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="#121212" style={{ marginLeft: '2px' }}><polygon points="5 3 19 12 5 21 5 3"/></svg>
          )}
        </button>

        {/* Volume Slider */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/>
            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"/>
          </svg>
          <input 
            type="range" 
            min="0" 
            max="1" 
            step="0.01" 
            value={volume}
            onChange={handleVolumeChange}
            style={{
              width: '65px',
              cursor: 'pointer',
              accentColor: '#1DB954'
            }}
          />
        </div>
      </div>
    </div>
  );
};