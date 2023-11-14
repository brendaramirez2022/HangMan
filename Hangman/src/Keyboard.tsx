import style from "./Keyboard.module.css";

const KEYS = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z"
  ];  
  type KeyboardProps = {
    activeLetters : string[]
    inactiveLetters : string[]
    addGuessedLetter:(letter:string)=>void
  }

export function Keyboard({activeLetters, inactiveLetters, addGuessedLetter}: KeyboardProps){
    return(    
    <div style={{display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(75px,1fr))",gap:"0.5rem"}}>
        {KEYS.map(key =>{
            const isActive: boolean = activeLetters.includes(key)
            const isInactive : boolean = inactiveLetters.includes(key)
            return(
                <button 
                className={`${style.btn} ${isActive ? style.active : ""} ${
                    isInactive ? style.inactive : ""}`
                }
                key={key}
                onClick={() => addGuessedLetter(key)}
                disabled = {isInactive || isActive}
                >
                    {key}
                </button>
            )
        })}
    </div>)
}