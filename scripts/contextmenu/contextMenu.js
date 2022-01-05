import log from "../util/log.js";
log.successfulyLoaded("context.js loaded successfully");
let TemplateContextMenu = document.createElement("template");
TemplateContextMenu.innerHTML = `
<style>
    #contextMenu{
        position: absolute;
        background-color: #fff; 
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 5px;
        z-index: 1;
    }
</style>
<select id="contextMenu" value='sel'>
<option value="sel">Select</option>
    <option value="refresh">Refresh</option>
   <!-- <option value="rename">Rename</option>
    <option value="delete">Delete</option> -->
</select>
`;



class ContextMenu1 extends HTMLElement{
constructor(){
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(TemplateContextMenu.content.cloneNode(true));
    
} 
connectedCallback(){
this.addEventListener('mouseleave', () => {
this.remove();
})

this.addEventListener('input',(e)=>{
    let val = this.shadowRoot.getElementById('contextMenu').value
    if (val=="refresh"){
        window.localStorage.clear();
        window.location.reload();
    }
})

}
}
customElements.define("context-menu", ContextMenu1);


window.addEventListener("contextmenu", (e) => {
    let cm = document.createElement("context-menu");
    cm.style.left = e.clientX + "px";
    cm.style.top = e.clientY + "px";
    cm.style.position = "absolute";
    cm.style.display = "block";
    document.body.appendChild(cm);
    e.preventDefault();
});