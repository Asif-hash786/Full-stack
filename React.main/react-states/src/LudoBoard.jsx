import { useState } from "react";

export default function LudoBoard(){

  let[Moves,setMoves]=useState({blue:0,yellow:0,green:0,red:0});

  let updateBlue = () =>{
    console.log(`Moves.blue = ${Moves.blue}`);
    setMoves((prevMoves)=>{
      return {...prevMoves , blue : prevMoves.blue + 1}
    });
  }
  let updateYellow = () =>{
    console.log(`Moves.yellow = ${Moves.yellow}`);
    setMoves((prevMoves)=>{
      return {...prevMoves , yellow : prevMoves.yellow + 1}
    });
  }
  let updateGreen = () =>{
    console.log(`Moves.green = ${Moves.green}`);
    setMoves((prevMoves)=>{
      return {...prevMoves , green : prevMoves.green + 1}
    });
  }
  let updateRed = () =>{
    console.log(`Moves.red = ${Moves.red}`);
    setMoves((prevMoves)=>{
      return {...prevMoves , red : prevMoves.red + 1}
    });
  }
  return(
    <div>
      <p>Game Begins</p>
      <div className="Board">
        <p>Blue Moves = {Moves.blue}</p>
        <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
        <p>Yellow Moves = {Moves.yellow}</p>
        <button style={{backgroundColor:"yellow",color:"black"}} onClick={updateYellow}>+1</button>
        <p>Green Moves = {Moves.green}</p>
        <button style={{backgroundColor:"green"}} onClick={updateGreen}>+1</button>
        <p>Red Moves = {Moves.red}</p>
        <button style={{backgroundColor:"red"}} onClick={updateRed}>+1</button>
      </div>
    </div>
  );
}