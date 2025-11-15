import { useEffect, useState } from "react"

export default function Counter() {
  let [Countx, setCountx] = useState(0);
  let [County, setCounty] = useState(0);

  let incCountx = (currCount) => {
    setCountx((currCount) => currCount + 1);
  };
  let incCounty = (currCount) => {
    setCounty((currCount) => currCount + 1);
  };
  useEffect(function sideEffect() {
    console.log("Side Effect");
  },[Countx,County]); //Dependecies only work for Countx and county or we can use this for only on
// time render we use "[]";
  return (
    <div>
      <h1>count = {Countx}</h1>
      <button onClick={incCountx}>+1</button>
      <h1>count = {County}</h1>
      <button onClick={incCounty}>+1</button>
    </div>
  )
}