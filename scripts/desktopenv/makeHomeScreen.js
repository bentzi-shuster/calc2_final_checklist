import log from "../util/log.js";
import { drop, dragOver} from "../desktopenv/dragNdrop.js";
import { appData } from "../vars/appData.js";
import Icon from "../icon/Icon.js";

log.successfulyLoaded("makeHomeScreen.js loaded successfully");
let DropGridAmountX = 16;
let DropGridAmountY = 9;
let makeHomeScreen = () => {
let homeScreen = document.createElement('div');
homeScreen.id = 'homeScreen';
let homeScreenStyle = document.createElement('style');
homeScreenStyle.innerHTML = `
#homeScreen {
    display: grid;
    grid-template-columns: repeat(${DropGridAmountX}, 1fr);
    grid-template-rows: repeat(${DropGridAmountY}, 1fr);
    grid-gap: 0px;
    height: 100vh;
    width: 100vw;
}
    `
homeScreen.appendChild(homeScreenStyle);

let gridStyle = document.createElement('style');
gridStyle.innerHTML = `
.gridTile {
    background-color: #fff;
    border-radius: 5px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
`
for (let index = 1; index <( DropGridAmountX*DropGridAmountY)+1; index++) {
    let gridTile = document.createElement("div");
    gridTile.classList.add("gridTile");
    gridTile.id = `gridTile##${index}##`;
    gridTile.addEventListener('dragover', dragOver);
    gridTile.addEventListener('drop', drop);

    gridTile.appendChild(gridStyle);
    homeScreen.appendChild(gridTile); 
}
document.body.appendChild(homeScreen);
//add initial apps if no apps are found in localStorage
if (localStorage.length != 0) {
    try{
    for (let index = 0; index < localStorage.length; index++) {
        let name = localStorage.key(index);
        let index_ = localStorage.getItem(name);
        if(!name.includes('openWindows')){
        let icon = new Icon(name,index_).create()
    }
    }}catch(e){
        localStorage.clear();
        for (let index = 0; index < appData.length; index++) {
            let name = appData[index].name;
            let index_ = appData[index].index;
              if(!name.includes('openWindows')){
        let icon = new Icon(name,index_).create()
    }
        }
        
    }
    }else{
        for (let index = 0; index < appData.length; index++) {
            let name = appData[index].name;
            let index_ = appData[index].index;
              if(!name.includes('openWindows')){
        let icon = new Icon(name,index_).create()
    }
        }
    
}








}
makeHomeScreen();