import React, { useState } from 'react';
import './styles.css';
import { Header } from './Header';
import { Page } from './Page';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [titleIcon, setTitleIcon] = useState('/logoOnly.svg'); 

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const theme = {
    headerBg: isDarkMode ? '#8cc6f2' : '#0d4773',
    textColor: isDarkMode ? '#fcfdfd' : '#020303',
    borderColor: isDarkMode ? '#fcfdfd' : '#020303',
    label: isDarkMode ? 'Darkmode On' : 'Darkmode Off',
    toggleIcon: isDarkMode ? '/toggleOn.svg' : '/toggleOff.svg',
    background: isDarkMode ? '/nighttimesky.jpg' : '/daytimesky.jpg',
    pageBg: isDarkMode ? '#020303' : '#fcfdfd',
    shadowColor: isDarkMode ? 'white' : 'black',
    titleBoxBg: isDarkMode ? '#1e679f' : '#60a9e1',
    iconColor: isDarkMode ? '#8cc6f2' : '#0d4773',
    iconHoverColor: isDarkMode ? '#020303' : '#fcfdfd',
    hotspotColor: isDarkMode ? '#8cc6f2' : '#0d4773',
  };

  const icons = [
    { id: 'home', src: '../home.svg' },
    { id: 'building', src: '/building.svg' },
    { id: 'security', src: '/security.svg' },
    { id: 'settings', src: '/settings.svg' },
  ];



  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${theme.background})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Header theme={theme} toggleTheme={toggleTheme}/>
      <Page theme={theme} titleIcon ={titleIcon } icons ={icons}/>
    </div>
  );
};

export default App;
