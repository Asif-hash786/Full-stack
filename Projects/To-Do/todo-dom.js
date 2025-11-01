let inp=document.querySelector("input");
let btn=document.querySelector("button");
let ul=document.querySelector("ul");
let del=document.querySelector(".delete");

btn.addEventListener("click",function(){
  let item=document.createElement("li");
  item.innerText=inp.value;

  let delBtn=document.createElement("button");
  delBtn.innerText="delete";
  delBtn.classList.add("delete");

  item.appendChild(delBtn);
  ul.appendChild(item); 
  inp.value="";
});

// But it wont work for adding new element
// let delBtns=document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//   delBtn.addEventListener("click",function(){
//     let par=this.parentElement;
//     console.log(par);
//     par.remove();
//   })
// }

// intro of Even deligation
// we use this it works as bubbling

ul.addEventListener("click",function(event){
  if(event.target.nodeName=="BUTTON"){
    let listItem=event.target.parentElement;
    listItem.remove();
    console.log("Deleted");
  }
})
