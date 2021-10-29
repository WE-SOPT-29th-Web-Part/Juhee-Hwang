import './App.css';
import Header from './components/Header';
import CenterText from './components/CenterText';
import DateInput from './components/DateInput';
import Result from './components/Result';
import Footer from './components/Footer';
import { useState } from 'react';


function App() {
  // 상태올리기 (데이터 단방향이라서)
  const [year, setYear] = useState(new Date().getFullYear());
  const [month,setMonth] = useState(new Date().getMonth() + 1);
  const [date,setDate] = useState(new Date().getDate());

  return (
    <div id ="app">
      <Header />
      <DateInput setYear={setYear} 
        setMonth={setMonth}
        setDate={setDate}
        year={year} 
        month={month} 
        date={date} />
      <CenterText />
      <Result year={year} month={month} date={date} />
      <Footer />
    </div>
  );
}

export default App;
