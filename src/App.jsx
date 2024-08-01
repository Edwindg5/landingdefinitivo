import React from 'react';
import Home from './pages/Home';
import './index.css';
import haloData from './data/haloData';

function App() {
  const appStyle = {
    backgroundImage: `url(${haloData.backgroundImage.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    backgroundAttachment: 'fixed',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  return (
    <div className="app" style={appStyle}>
      <Home />
    </div>
  );
}

export default App;

