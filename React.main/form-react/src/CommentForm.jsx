import { useState } from "react"

export default function CommentForm() {
  let [FormData, setFormData] = useState({
    username: "",
    remark: "",
    rating: 5,
  });
  let handleInputChange = (event) => {
    setFormData((currData) => {
      return { ...currData, [event.target.name]: event.target.value };
    });
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(FormData);
    setFormData({
      username: "",
      remark: "",
      rating: 5,
    });
  }
  return (
    <div>
      <h4>Give a comment</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" 
        placeholder="uesrname" 
        value={FormData.username} 
        onChange={handleInputChange}
        id="username"
        name="username"/>
        <br /><br />
        <label htmlFor="remark">Remark</label>
        <textarea value={FormData.remark} 
        placeholder="Add few Reamrks" 
        onChange={handleInputChange}
        id="remark"
        name="remark"
        >Remarks</textarea>
        <br /><br />
        <label htmlFor="rating">Rating</label>
        <input type="number" 
        placeholder="rating" 
        min={1} max={5} 
        value={FormData.rating} 
        onChange={handleInputChange}
        id="rating"
        name="rating"/>
        <br /><br />
        <button>Add Comment</button>
      </form>
    </div>
  );
}