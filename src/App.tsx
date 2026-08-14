import React from 'react';
import { Environment } from './components/Environment';
import { StoryScroll } from './components/StoryScroll';
import { AudioController } from './components/AudioController';
import './styles/globals.css';

function App() {
  return (
    <div style={{ position: 'relative', width: '100%', backgroundColor: '#050505', minHeight: '100vh' }}>
      <Environment />
      <StoryScroll />
      <AudioController />
    </div>
  );
}

export default App;