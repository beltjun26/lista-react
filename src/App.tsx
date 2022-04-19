import React, { useEffect } from 'react';
import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'; 
import { ListBot } from './ListBot/ListBot';
import { Bot } from './Bot/Bot';
import { useDispatch, useSelector } from 'react-redux';
import { State } from './state/reducers';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state';

export interface BotObject {
  id: number,
  name: string,
  purpose: string,
}

export const App: React.FC = () => {
  const bots = useSelector((state: State) => state.bots);

  const dispatch = useDispatch();
  const { getBots } = bindActionCreators(actionCreators, dispatch);

  useEffect(() => {
    getBots();
  }, []);

  return (
    <Router>
      <Routes>
        <Route path='/' element={<ListBot bots={bots}/>} />
        <Route path='/bot/:id' element={<Bot bots={bots}/>} />
      </Routes>
    </Router>
  )
}

export default App;
