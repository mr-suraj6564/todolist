let btn = document.querySelector("button");
let ul= document.querySelector("ul");
let inpt = document.querySelector("input");

btn.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText= inpt.value;

    let delBtn = document.createElement("button");
    delBtn.innerHTML="Delete";
    delBtn.classList.add("del");
    item.appendChild(delBtn);

    ul.appendChild(item);
    inpt.value="";

});

// let delBtns = document.querySelectorAll(".del");
//     for( let delBtn of delBtns){
//            delBtn.addEventListener("click", function()
//            {
//             let par = this.parentElement;
//             // console.log("element deleted");
//             par.remove();
//            });
//     }


    ul.addEventListener("click",function (event){

        if( event.target.nodeName=="BUTTON")
        {
            let listItem = event.target.parentElement;
            listItem.remove();
        }
    });

