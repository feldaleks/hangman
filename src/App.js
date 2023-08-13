import logo from './logo.svg';
import './App.css';
import Letters from './components/letters';
import Score from './components/score';
import Solution from './components/solution';
import { useState, useEffect } from 'react';

function App() {

  const getLetter = (i) => {
    // 65 <= i <= 90, 65 - A, 90 - Z
    let ch = String.fromCharCode(i); // String.fromCharCode(65, 66, 67); // returns "ABC"
    return ch
  }

  //let chars = Array.from({ length: 26}, (_, index) => getLetter(index + 65))
  let chars = {}

  for (let i = 65; i <= 90; i++ ) {
    chars[getLetter(i)] = false
  }

  const [letters, setLetters] = useState(chars)

  const [puzzle, setPuzzle] = useState({
      attempts: 5,
      isSolved: false,
      hint: "Set of unique letters in a language",
      word: "ALPHABET",
      uncoveredPart: "ALPHABET",
      clicks: 0
    })

  const useLetter = function (letter) {

    if (puzzle.isSolved || puzzle.attempts == 0 || letters[letter]) return

    let newLetters = {...letters}
    newLetters[letter] = true
    setLetters(newLetters)

    let newPuzzle = {...puzzle}

    if (!puzzle.uncoveredPart.includes(letter)) newPuzzle.attempts -= 1
    newPuzzle.uncoveredPart = newPuzzle.uncoveredPart.replaceAll(letter,"")

    if (newPuzzle.uncoveredPart === "") newPuzzle.isSolved = true

    newPuzzle.clicks += 1

    setPuzzle(newPuzzle)

  }

  const updatePuzzle = function() {
    let newPuzzle = {...puzzle}
    newPuzzle.attempts = 5;
    newPuzzle.isSolved = false;
    newPuzzle.clicks = 0;

    let word, definition

    // useEffect(() => {
    //   fetch('https://random-word-api.herokuapp.com/word')
    //     .then(response => response.json())
    //     .then(data => {
    //       if (Array.isArray(data) && data.length > 0) {
    //         word = data[0].toUpperCase();
    //       }
    //     })
    //     .catch(error => console.error('Error fetching word:', error));
    // }, []);

    word = "CALM"
    definition = "Desire mind state while coding."

    newPuzzle.word = word
    newPuzzle.uncoveredPart = word
    newPuzzle.hint = definition

    console.log(newPuzzle)

    setPuzzle(newPuzzle)
    setLetters(chars)
  }

  let compenentToDisplay

  if (puzzle.isSolved == true) {
    compenentToDisplay = 
      <div>
        <h2>Congrats! You've solved the problem. Word: {puzzle.word}. Clicks: {puzzle.clicks}</h2>
        <button onClick={updatePuzzle}>Start new game</button>
      </div>
  }
  else if (puzzle.attempts == 0) {
    compenentToDisplay = 
      <div>
        <h2>So pity, you lose... The word was: {puzzle.word}</h2>
        <button onClick={updatePuzzle}>Start new game</button>
      </div>
  }
  else compenentToDisplay = <Solution letters={letters} word={puzzle.word} hint={puzzle.hint}/>



  return (
    <div>
      <Score attempts={puzzle.attempts} />
      {compenentToDisplay}
      <Letters letters={letters} useLetter={useLetter}/>
    </div>
  );
}

export default App;
