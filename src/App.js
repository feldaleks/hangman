import logo from './logo.svg';
import './App.css';
import Letters from './components/letters';
import Score from './components/score';
import Word from './components/word';

function App() {
  return (
    <div>
      <Score />
      <Word />
      <Letters />
    </div>
  );
}

export default App;
