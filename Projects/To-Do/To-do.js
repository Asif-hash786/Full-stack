let todo=[];
let req=prompt("Enter the request");
while(true){
  if(req=="quit"){
    console.log("app quitted");
    break;
  }
  if(req=="list"){
    console.log("------------")
    for(let i=0;i<todo.length;i++){
      console.log(i,todo[i]);
    }
    console.log("------------")
  } else if(req=="add"){
    let task=prompt("Enter the task you want to add");
    todo.push(task);
    console.log("added");
  } else if(req=="delete"){
    let idx=prompt("Enter the index you want to delete");
    todo.splice(idx,1);
    console.log("deletes");
  } else{ console.log("wrong request");
    
  }
  req=prompt("Enter the request");
}