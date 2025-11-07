import "./product.css";
import Card from "./Amazone";

// function Product({title,price,feature}){
//   let isDiscount = price > 20000;
//   let styles={backgroundColor: isDiscount ? "grey" : ""}
//   return(
//     <div className="product" style={styles}>
//       <h2>{title}</h2>
//       <h5>price : {price}</h5>
//       {/* <p>{feature}</p> */}
//       {isDiscount ? <p>Discount of 5%</p> : null}
//     </div>
//   );
// }

function Product({ title, idx }) {
  let oldPrices = ["12495", "11900", "1599", "599"];
  let newPrices = ["8999", "9199", "899", "278"];
  let discription = [
    ["8000 DPI", "5 programmable buttons"],
    ["Intiutive touch surface", "Designed for ipad pro"],
    ["Designed for ipad pro", "Intiutive touch surface"],
    ["wireless", "Optical orientation"]
  ];
  return (
    <div className="product">
      <h3>{title}</h3>
      <p>{discription[idx][0]}</p>
      <p>{discription[idx][1]}</p>
      <Card oldPrice={oldPrices[idx]} newPrice={newPrices[idx]} />
    </div>
  );
}


export default Product;