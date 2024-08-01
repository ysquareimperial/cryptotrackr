import React, { useState } from 'react';
// import Header from '../components/Header';
// import SearchBar from './components/SearchBar';
// import CoinList from './components/CoinList';
// import Notifications from './components/Notifications';
// import TopPerformers from './components/TopPerformers';
// import LowPerformers from './components/LowPerformers';
// import ToggleMode from './components/ToggleMode';
import './App.css';
import Header from './components/Header';
import ToggleMode from './components/ToggleMode';
import SearchBar from './components/SearchBar';
import Notifications from './components/Notifications';
import TopPerformers from './components/TopPerformers';
import CoinList from './components/CoinList';
import LowPerformers from './components/LowPerformers';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="App">
      <Header/>
      <ToggleMode />
      <SearchBar setSearchQuery={setSearchQuery} />
      <CoinList searchQuery={searchQuery} />
      <Notifications />
      <TopPerformers />
      <LowPerformers />
    </div>
  );
};

export default App;
