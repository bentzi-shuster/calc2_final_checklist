import log from "../util/log.js";
log.successfulyLoaded("dragNdrop.js loaded successfully");
let dragOver = (e) => {
    e.preventDefault();

    
if(e.target.style.border==''){
    e.target.style.border = `2px solid rgba(${Math.random()*255},${Math.random()*255},${Math.random()*255},0.5)`;}

}
let newIndex = 0;
let drop = (e) => {
    e.preventDefault();
    if(e.target.id.includes("gridTile")){
let data = e.dataTransfer.getData("text");
e.target.appendChild(document.getElementById(data));
//log the number in the id
newIndex = e.target.id.split("##")[1];
//update the index in the localStorage
}
for (let index = 0; index < document.getElementById('homeScreen').children.length; index++) {
    document.getElementById('homeScreen').children[index].style.border = '';
    }
}
let dragStart = (e) => {
    e.dataTransfer.setData("text", e.target.id);
}
let dragEnd= (e) => {
    for (let index = 0; index < document.getElementById('homeScreen').children.length; index++) {
    document.getElementById('homeScreen').children[index].style.border = '';
    }
    e.preventDefault();
    localStorage.setItem(e.target.id, newIndex);
}
export { dragOver, drop ,dragStart, dragEnd};   