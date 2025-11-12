function handleFormSubmit(event){
  event.preventDefault()
  console.log("Form was Submitted");
}

export default function Form(){
  return(
    <form>
      <input type="text" placeholder="Write something" />
      <button onClick={handleFormSubmit}>Submit</button>
    </form>
  );
}