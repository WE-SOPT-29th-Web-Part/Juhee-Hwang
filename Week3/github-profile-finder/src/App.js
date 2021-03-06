import './App.css';
import Header from './components/Header';
import Result from './components/Result';
import SearchBar from './components/SearchBar';
import { useState, useEffect } from 'react';
import styled from 'styled-components';

function App() {
  const[userInfo, setUserInfo] = useState({});

  useEffect(() => {
  }, [userInfo]);

  return (
    <Root>
      <Header />
      <SearchBar setUserInfo={setUserInfo} />
      <Result userInfo={userInfo} setUserInfo={setUserInfo} />
    </Root>
  );
}

export default App;

const Root = styled.div`
width: 100%;
height: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;