const templateDragable = document.createElement("template");
templateDragable.innerHTML = `
<style>
*
{
user-select: none;
}
div
{
}
</style>
<div draggable='false' id="dragable">
     <slot />
    </div>
`
class Dragable extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.shadowRoot.appendChild(templateDragable.content.cloneNode(true));
    }
    connectedCallback() {
        let root = this.shadowRoot.getElementById("dragable");
        root.style.position = "absolute";
        root.addEventListener("mousedown", (evv) => {
            let rect = this.shadowRoot.getElementById('dragable').getBoundingClientRect();
            let offsetx = evv.clientX - rect.left;
            let offsety = evv.clientY - rect.top;
            let mouseFunction = (e) => {
        


                root.style.left = e.pageX - offsetx + "px";
                root.style.top = e.pageY - offsety + "px";
                console.log(e.pageX - offsetx + "px");
            }
            window.addEventListener("mouseup", (ev) => {
                localStorage.setItem('openWindows'+this.id, JSON.stringify({ x: root.getBoundingClientRect().left, y: root.getBoundingClientRect().top }));
                window.removeEventListener('mousemove', mouseFunction)
            })
            window.addEventListener('mousemove', mouseFunction);
        })
        window.addEventListener("load", () => {
            let data = JSON.parse(localStorage.getItem('openWindows'+this.id));
            if (data) {
            root.style.left = data.x + "px";
            root.style.top = data.y + "px";
        }else{
            root.style.left = `${window.innerWidth / 2 - root.getBoundingClientRect().width / 2}px`;
            root.style.top =`${window.innerHeight / 2 - root.getBoundingClientRect().height / 2}px`;
        }

})
}}
window.customElements.define("drag-elm", Dragable);