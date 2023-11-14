
const Head = (
   <div style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border:"10px solid #EE3F4C",
      position:"absolute",
      top: "50px",
      right:"-30px"
   }}/>
)

const Body = (
   <div style={{
      width:"10px",
      height:"100px",
      background:"#EE3F4C",
      position:"absolute",
      top:"119px",
      right:"0px"   
   }}/>
)
const LeftArm = (
   <div style={{
      width:"100px",
      height:"10px",
      background:"#EE3F4C",
      position: "absolute",
      top:"150px",
      right:"10px",
      rotate:"10deg",
      transformOrigin:"right bottom"
   }}/>
)
const RightLeg = (
   <div style={{
      width:"100px",
      height:"10px",
      background:"#EE3F4C",
      position: "absolute",
      top:"210px",
      right:"4px",
      rotate:"-30deg",
      transformOrigin:"right bottom"
   }}/>
)
const RightArm = (
   <div style={{
      width:"100px",
      height:"10px",
      background:"#EE3F4C",
      position: "absolute",
      top:"150px",
      right:"-90px",
      rotate:"-10deg",
      transformOrigin:"left bottom"
   }}/>
)
const LeftLeg = (
   <div style={{
      width:"100px",
      height:"10px",
      background:"#EE3F4C",
      position: "absolute",
      top:"200px",
      right:"0px",
      rotate:"-150deg",
      transformOrigin:"right bottom"
   }}/>
)
const Body_Parts = [Head, Body, RightArm, LeftArm, RightLeg, LeftLeg]

type HangmanDrawingProps={
   numberofGuesses : number
}
export default function HangmanDrawing({numberofGuesses}:HangmanDrawingProps){
   return(

   <div style={{
      position: "relative"
   }}>
   <div style={{
   fontSize: '20px',
   color: '#EE3F4C',
   textAlign: 'right' ,
   alignContent: "center",
   fontFamily: 'Arial, sans-serif', // Cambia 'Arial, sans-serif' al tipo de letra que desees
  
   }}>
   <h1>HANGMAN</h1>
   </div>

      {Body_Parts.slice(0, numberofGuesses)}

      {/*Soga*/}
      <div style={{
         height:"50px",
         width: "10px",
         background: "black",
         top: 100,
         right: 0,
         position: "absolute"
      }}/>
      {/*Palo horizontal*/}
      <div style={{
         height:"10px",
         width: "200px",
         background: "black",
         marginLeft:"120px"
      }}/>
      {/*Soporte */}
      <div style={{
         height:"400px",
         width: "10px",
         background: "black",
         marginLeft:"120px"
      }}/>
      {/**Base del ahorcado*/}
       <div style={{
         height:"10px",
         width:"250px",
         background:"black"
       }}/>
    </div>
   )
}