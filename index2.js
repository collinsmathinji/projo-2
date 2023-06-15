let open=document.querySelector(".button")
let close=document.querySelector(".close-btn")
let modalContainer=document.querySelector(".modal-container")

open.addEventListener("click",function(){
  modalContainer.style.display='block'
})
close.addEventListener("click",function(){
  modalContainer.style.display='none'
})
window.addEventListener("click",function(e){
 if(e.target===modalContainer){
    modalContainer.style.display="none";
 }
})