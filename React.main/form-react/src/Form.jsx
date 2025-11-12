import { useState } from "react"

// export default function Form() {
//   let [fullName,setFullName]=useState("");
//   let handleNameChange= (event) =>{
//     setFullName(event.target.value);
//   }
//   return (
//     <form>
//       <label htmlFor="username">Full name</label>
//       <input type="text" placeholder="Enter your name" value={fullName} onChange={handleNameChange} id="username"/>
//       <button>Submit</button>
//     </form>
//   );
// }

export default function Form() {
  let [formData, setFormData] = useState({
    fullName: "",
    username: "",
    password:"",
  });
  let handleInputChange = (event) => {
    // let feildName = event.target.name;
    // let newValue = event.target.value;

    setFormData((currdata) => {
      return { ...currdata, [event.target.name]:event.target.value};
    });
  };
  let handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    setFormData({
      fullName: "",
      username: "",
      password:"",
    });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="fullname">Full name</label>
      <input type="text"
        placeholder="Enter your fullname"
        value={formData.fullName}
        onChange={handleInputChange}
        id="fullname"
        name="fullName"
      />
      {/* <button>Submit</button> */}
      <br /><br />
      <label htmlFor="username">username</label>
      <input type="text"
        placeholder="Enter your username"
        value={formData.username}
        onChange={handleInputChange}
        id="username"
        name="username"
      />
      <br /><br />
      <label htmlFor="password">password</label>
      <input type="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={handleInputChange}
        id="password"
        name="password"
      />
      <br />  <br />
      <button>Submit</button>
    </form>
  );
}