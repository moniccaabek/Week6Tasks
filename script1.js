let t = document.querySelector("#tasks");
let div = t.querySelectorAll("div");



for(let i = 0; i<div.length; i++){
    let but = div[i].querySelector("button");
    but.addEventListener("click",function(e){
        div[i].dataset.status = 'done';
});
}
