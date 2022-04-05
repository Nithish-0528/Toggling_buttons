const arr = document.querySelectorAll(".toggle");

const good = document.querySelector("#good");
const cheap = document.querySelector("#cheap");
const fast = document.querySelector("#fast");



for(let i = 0; i < arr.length; i++){
    arr[i].addEventListener("change",(event)=>{
        trigger(event.target)
        console.log(event.target)
    })
}


function trigger(touched){
    
    if(good.checked && cheap.checked && fast.checked){
        if(good === touched){
            fast.checked = false;
        }
        if(cheap === touched){
            good.checked = false
        }
        if(fast === touched){
            cheap.checked = false
        }
    }
}
