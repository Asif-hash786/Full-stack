function handleClick(){
  console.log("Hello!");
}
function handleMouseOver(){
  console.log("React");
}
function handleDblClick(){
  console.log("You double click");
}
export default function Button(){
  return(
    <div>
      <button onClick={handleClick}>Click Me!</button>
      <p onMouseOver={handleMouseOver}>Hello You are learning React</p>
      <button onDoubleClick={handleDblClick}>Double click Me!!</button>
    </div>
  );
}