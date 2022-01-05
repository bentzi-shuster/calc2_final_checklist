import log from "../../util/log.js";
log.successfulyLoaded("nav-bar.js loaded successfully");
let navBarTemplate = `


<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
#nav{
height:1.5em;
width:100%;
background-color:lightgray;
display: flex;
justify-content: space-around;
}
#wrapperleft{
    width:100%;
    height:100%;
    display:flex;
    align-items: center;
    justify-content: start;
}
#wrapperleft > p{
    margin-left:.5em;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-weight: bold;
}
#wrapperright{
    width:100%;
    height:100%;
    display:flex;
    justify-self: end;
    justify-content: right;
}
#close,#min,#shrink-max{
    border: none;
    width: 4em;
    height: 100%;
    text-align: center;
}
#close{
    background-color:lightgray;
}
#min , #shrink-max{
    background-color:lightgray;
}
#close:hover{
    background-color:rgb(192, 23, 23);
    color: white;
}
#min:hover , #shrink-max:hover{
    background-color:rgb(110, 110, 110);
}
</style>

<div class="win">
    <div id="nav">
        <div id="wrapperleft">
<p id="name">Test</p>
</div>
<div id="wrapperright">
<button id="min">-</button>
<button id="shrink-max">[]</button>
<button id="close">x</button>
</div>
</div>
`;
class NavBar extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = navBarTemplate;
        

    }
    connectedCallback(){
       
    }
}
customElements.define('nav-bar', NavBar);