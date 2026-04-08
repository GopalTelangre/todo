let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");



btn.addEventListener("click",function(){
    let item = document.createElement("li");
    item.innerText = inp.value;
    
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");

    item.appendChild(delBtn);
    console.log(inp.value);
    ul.appendChild(item);
    inp.value = "";
});
 

let delBtns = document.querySelectorAll(".delete");
for(delBtn of delBtns){
    delBtn.addEventListener("click",function(){
        console.log("element deleted");
    
        
        par.remove();
    });
}

ul.addEventListener("click",function(){
    console.log("button clicked");
});