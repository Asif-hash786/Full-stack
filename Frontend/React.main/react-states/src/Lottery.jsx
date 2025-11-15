  import { useState } from "react";
  // import "./Lottery.css";
  import { genTicket, sum } from "./helper";
  import Ticket from "./Ticket";

  export default function Lottery({n,winningSum}) {
    let [ticket, setTicket] = useState(genTicket(3));
    let isWinning = sum(ticket) === winningSum;

    let buyTicket = () => {
      setTicket(genTicket(n));
    }
    return (
      <div>
        <h1>Lottery Game!!</h1>
        <Ticket ticket={ticket}/>
        <br />
        <button onClick={buyTicket}>Buy New Ticket</button>
        <h3>{isWinning && "Congratulation , You won"}</h3>
      </div>
    );
  }