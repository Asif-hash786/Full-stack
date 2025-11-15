// let smallImage=document.getElementsByClassName("oldImg");

// for(let i=0;i<smallImage.length;i++){
//   smallImage[i].src="./asset2/spiderman-2591073_1280.jpg";
//   console.log(`value of image no ${i} is changed`);
// }

// console.dir(document.querySelector("p"));  //only give one element
// console.dir(document.querySelector(".oldImg"));
// console.dir(document.querySelector("#description"));

// console.log(document.querySelectorAll("div a"));  //give all element

// let links=document.querySelectorAll(".box a");

// for(links of links){
//   links.style.color="yellow"; //inline style
// }

// for(let i=0;i<links.length;i++){
//   links[i].style.color="pink";
// }


// let img=document.querySelector("img");
// console.log(img.classList);

//Adding class

// let heading=document.querySelector("h1");
// heading.classList.add("asif");
// heading.classList.add("mop");
// console.log(heading.classList);

// // Removing class

// heading.classList.remove("mop");
// console.log(heading.classList);

// // class exist or not;
// console.log(heading.classList.contains("asif"));
// console.log(heading.classList.contains("mop"));

// // toggle between on and off    no--yes yes--no

// console.log(heading.classList.toggle("asif"));
// console.log(heading.classList.toggle("mop"));
// console.log(heading.classList.toggle("asif"));

// Naviagation accessing parent and child element

// let h4=document.querySelector("h4");
// console.log(h4.parentElement);
// console.log(h4.children);

// let box=document.querySelector(".box")
// console.log(box.children);
// console.log(box.childElementCount);

// let ul=document.querySelector("ul")
// console.log(ul.parentElement);
// console.log(ul.children);
// console.log(ul.childElementCount);

// console.log(ul.children[1]);
// console.log(ul.children[2]);
// console.log(ul.children[2].previousElementSibling);
// console.log(ul.children[1].nextElementSibling);

// let img=document.querySelector("img");
// console.log(img.previousElementSibling.style.color="red");


// Adding element on page
// let box=document.querySelector('.box');
// let newp=document.createElement("p");
// newp.innerText="hi im new para";
// console.log(box.appendChild(newp));
// let btn=document.createElement("button");
// btn.innerText="click me";
// console.log(box.appendChild(btn));

// same line ,,will add in end

// console.log(newp.append(btn));

// same line but will add in starting
// console.log(newp.prepend("hello my name is steve "));

// insert addacent ,, exactly where do we want to add the element

// let p=document.querySelector('p');
// console.log(p);
// let bt=document.createElement("button");
// bt.innerText="NEW BUTTON";
// console.log(p.insertAdjacentElement('beforebegin',bt));
// console.log(p.insertAdjacentElement('afterbegin',bt));
// console.log(p.insertAdjacentElement('beforeend',bt));
// console.log(p.insertAdjacentElement('afterend',bt));