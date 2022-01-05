import log from '../util/log.js';
import colors from '../vars/colors.js';
import {dragStart,dragEnd} from '../desktopenv/dragNdrop.js';
import { openWindow } from '../window/content/createWindow.js';
log.successfulyLoaded("app-icon.js loaded successfully.js");

let app_icon_template=`
<style> @import "./scripts/icon/styles.css"; 
:host{
    width: 100%;
    height: 100%;
    --app-color-background:${colors.appBackground};
    --app-color-text: ${colors.appText};
    --app-color-accent: ${colors.appAccent};
    }
    
</style>
<div draggable='true' id="iconMain">
<h1 draggable='false' id="bigLetter"></h1> 
<p draggable='false' id="iconLabel">
</p>
</div>
`
class AppIcon extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = app_icon_template;
    }
    connectedCallback() {
        
        //Fill the text
        let bigLetter = this.shadowRoot.getElementById('bigLetter');
        let iconLabel = this.shadowRoot.getElementById('iconLabel');
        let name = this.getAttribute('name').toUpperCase();
        let icon =name.charAt(0);
        iconLabel.innerText = name;
        bigLetter.innerText = icon;
        //add the attributes
        this.setAttribute('draggable', true);
        this.setAttribute('id', name);
        // add the event listeners
        this.addEventListener('dragstart', dragStart);
        this.addEventListener('dragend', dragEnd);        }
}

customElements.define('app-icon', AppIcon);
