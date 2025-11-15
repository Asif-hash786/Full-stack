import Product from "./Product";
function ProductTab({}) {

  let styles={
    display:"flex",
    flexwrap:"wrap",
    justifyContent:"center",
    alignItem:"center",
  }

  return (
    <div style={styles}>
      {/* <Product title="Phone" price="20000" feature={["hi-tech"]} />
      <Product title="Laptop" price="30000" />
      <Product title="Pen" price="10" /> */}
      <Product title="Logitech MX Master" idx={0} />
      <Product title="Apple Pencil (2nd Gen)" idx={1}/>
      <Product title="Zebronics Zeb-transformer" idx={2}/>
      <Product title="Petronics Toad 23" idx={1}/>
    </div>
  );
}

export default ProductTab;