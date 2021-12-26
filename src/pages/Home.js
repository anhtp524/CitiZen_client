import React from 'react';
import Barchart from '../components/Barchart';
import Linechart from '../components/Linechart';
import './home.css';
import SumPeople from '../components/SumPeople';
import PiechartSex from '../components/PiechartSex';
import PiechartJob from '../components/PiechartJob';


function Home() {
  return (
    <div className='home'>
      <div className='map'>
          <SumPeople />
          <PiechartSex />
          <PiechartJob />
      </div>
      <div className='chart'>
        <Barchart />
        <Linechart />  
      </div>
    </div>
  );
}

export default Home;