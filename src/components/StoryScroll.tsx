import React from 'react';
import { storyData } from '../data/story';
import type { TextBlock } from '../data/story';
import { CinematicText } from './CinematicText';

export const StoryScroll: React.FC = () => {
  const getSpacing = (spacing?: string) => {
    switch (spacing) {
      case 'massive': return '100vh';
      case 'large': return '60vh';
      default: return '35vh'; // Increased from 20vh to give the boxes room to breathe
    }
  };

  const renderBlock = (block: TextBlock) => {
    const textArray = Array.isArray(block.text) ? block.text : [block.text];

    return (
      <div key={block.id} style={{ width: '100%', minHeight: getSpacing(block.spacing), display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        
        {block.type === 'title' && (
          <CinematicText align={block.align || 'center'} glass={false}>
            <h1 className="serif" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, letterSpacing: '0.05em', color: '#E8D8CE' }}>
              {textArray.map((t, i) => <span key={i} style={{ display: 'block', marginBottom: '16px' }}>{t}</span>)}
            </h1>
          </CinematicText>
        )}
        
        {block.type === 'quote' && (
          <CinematicText align="center" glass={true}>
            <p className="serif" style={{ fontSize: 'clamp(1.5rem, 3vw, 2.2rem)', fontStyle: 'italic', color: '#FFF', lineHeight: 1.5, margin: 0 }}>
              {textArray.map((t, i) => <span key={i} style={{ display: 'block', marginBottom: i === textArray.length - 1 ? 0 : '16px' }}>"{t}"</span>)}
            </p>
          </CinematicText>
        )}

        {block.type === 'body' && (
          <CinematicText align={block.align || 'left'} glass={true}>
            <div style={{ 
              fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", Roboto, sans-serif',
              fontSize: 'clamp(1.1rem, 2vw, 1.25rem)', 
              fontWeight: 400, // Apple standard weight
              color: 'rgba(255, 255, 255, 0.95)', // Crisper white text
              lineHeight: 1.6,
              letterSpacing: '0.015em'
            }}>
              {textArray.map((t, i) => <p key={i} style={{ marginBottom: i === textArray.length - 1 ? 0 : '24px' }}>{t}</p>)}
            </div>
          </CinematicText>
        )}

        {block.type === 'interaction' && (
          <CinematicText align="center" glass={false}>
            <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif', fontSize: '0.75rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', cursor: 'pointer', transition: 'color 0.3s' }} 
                 onClick={() => alert("pink tissue.")}>
              One thing I'll never explain.
            </div>
          </CinematicText>
        )}

      </div>
    );
  };

  return (
    <div className="story-content" style={{ paddingTop: '30vh', paddingBottom: '50vh' }}>
      {storyData.map((chapter) => (
        <div key={chapter.id} style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {chapter.title && (
            <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <CinematicText glass={false}>
                <h2 className="serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#DABEA8', letterSpacing: '0.08em', margin: 0 }}>
                  {chapter.title}
                </h2>
              </CinematicText>
            </div>
          )}
          {chapter.blocks.map(renderBlock)}
        </div>
      ))}
    </div>
  );
};