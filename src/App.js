import React, { Component } from 'react';
import Countdown from './Countdown.js';
import logo from './ssc_logo.jpg';
import vkLogo from './VK_Compact_Logo.png';

class App extends Component {
  render() {
   
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>КУБОК СИБИРИ ПО ГОРНЫМ ЛЫЖАМ СРЕДИ ЛЮБИТЕЛЕЙ И ВЕТЕРАНОВ</h2>

          <a href="https://vk.com/club88739246" target="_blank">
            <img src={vkLogo} alt="логотип ВКОНТАКТЕ" className="vkIcon" /> 
            <span>ГРУППА ВКОНТАКТЕ</span>
          </a>
        </div>

        <h3 className="title">первый старт через:</h3>
        <Countdown date={`December 18, 2021 10:00:00`} />
      </div>
    );
  }
}

export default App;
