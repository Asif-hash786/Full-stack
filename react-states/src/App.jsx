// import Counter from './Counter';
import './App.css'
// import LikeButton from './LikeButton';
// import LudoBoard from './LudoBoard';
// import TodoList from './TodoList';
import Lottery from './Lottery';
// import TicketNum from './TicketNum';
// import Ticket from './Ticket';
function App() {
  return(
    <>
    {/* <h1>State in React</h1> */}
    {/* <Counter/> */}
    {/* <LikeButton/> */}
    {/* <LudoBoard/> */}
    {/* <TodoList/> */}
    {/* <Lottery/> */}
    {/* <Ticket ticket={[0,1,2]}/> */}
    <Lottery n={3} winningSum={15}/>
    </>
  );
}

export default App
