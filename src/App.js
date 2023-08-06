import logo from './logo.svg';
import './App.css';
import Letters from './components/letters';
import Score from './components/score';
import Solution from './components/solution';

function App() {
  return (
    <div>
      <Score />
      <Solution />
      <Letters />
    </div>
  );
}

export default App;
