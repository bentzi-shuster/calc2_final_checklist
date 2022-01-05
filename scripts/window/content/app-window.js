import log from "../../util/log.js";
log.successfulyLoaded("app-window.js loaded successfully");
let windowTemplate = `
<style>
    :host{ 
        user-select: none;
        position: absolute;
        top: 0;
        left: 0;
    }
</style>
<drag-elm id="test">
<div class="window">
<nav-bar id='nav'></nav-bar>
<iframe id="content"></iframe>
</div>
</drag-elm>
`;
class AppWindow extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = windowTemplate;
       

    }
    connectedCallback(){

    }
}
customElements.define('app-window', AppWindow);