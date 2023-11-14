import React, { useEffect, useCallback} from "react";
import { useState } from "react";
import HangmanDrawing from "./HangmanDrawing"
import HangmanWord from "./HangmanWord"
import {Keyboard} from "./Keyboard"
import words from "./wordList.json"

function App() {

    const [wordToGuess, setWordToGuess]=useState(
      () => {
        return words[Math. floor (Math. random() * words.length)]
      }
    );
    
    const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  
    const incorrectLetters = guessedLetters.filter(
          letter => !wordToGuess.includes(letter))
  console.log(wordToGuess)

  {/* Logica para conectar teclas*/}
      const addGuessedLetter = useCallback(
        (letter:string)  => {
          if(guessedLetters.includes(letter))  return
          setGuessedLetters(currentLetters => [...currentLetters,letter])
        },[guessedLetters]
      )

      useEffect(()=>{
        const handler = (e: KeyboardEvent) => {
          const key = e.key
          //regex de la letra
          if(!key.match(/^[a-z]$/)) return

          e.preventDefault()
          addGuessedLetter(key)
        }

        document.addEventListener("keypress",handler)

        return() => {
        document.removeEventListener("keypress",handler)
        }
      },[guessedLetters])

      const isLoser = incorrectLetters.length >= 6
      const isWinner = wordToGuess.split("").every(letter =>
        guessedLetters.includes(letter))
  
  return (
    <div style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center"
    }}>
      <div style={{
        fontSize: "2rem",
        textAlign: "center"
      }}>
        {isWinner && "¡Has ganado! - Recarga para jugar de nuevo"}
        {isLoser && "¡Buen intento! - Recarga para jugar de nuevo"}
      </div>

      <HangmanDrawing numberofGuesses={incorrectLetters.length}/>
      <HangmanWord guessedLetters={guessedLetters} wordtoGuess={wordToGuess}/>
      <div style={{alignSelf:"stretch"}}>
            <Keyboard
            activeLetters={guessedLetters.filter(letter =>
            wordToGuess.includes(letter)
            )}
            inactiveLetters={incorrectLetters}
            addGuessedLetter={addGuessedLetter}/>
      </div>
    </div>
  )
}

export default App
