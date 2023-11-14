type HangmanWordProps = {
    guessedLetters : string[]
    wordtoGuess : string
}

export default function HangmanWord({guessedLetters, wordtoGuess}:HangmanWordProps){

    return(
        <div style={{
            display: "flex",
            gap:"0.25em",
            fontSize:"6rem",
            fontWeight:"bold",
            textTransform:"uppercase",
            fontFamily:"monospace"
        }}>
            {wordtoGuess.split("").map((letter, index)=>(
                <span style={{borderBottom:"0.1em solid #EE3F4C"}} key={index}>
                    <span style={{visibility:guessedLetters.includes(letter)
                        ? "visible"
                        : "hidden"}}>
                            {letter}

                    </span>
                    </span>
                    
            ))}
            
         </div>
        )
}