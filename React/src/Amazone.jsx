export default function Card({oldPrice,newPrice}){
  let oldStyles={
      textDecorationLine:"line-through",
    };
  let newStyles={
    fontWeight:"bold",
  };
  let styles={
    backgroundColor:"#e0c367",
    height:"30px",
    borderBottomLeftRadius:"10px",
    borderBottomRightRadius:"10px",
    width:"auto",

  }
  return(
    <div style={styles}>
      <span style={oldStyles}>{oldPrice}</span>
      &nbsp;&nbsp;&nbsp;
      <span style={newStyles}>{newPrice}</span>
    </div>
  );
}