
let openWindow=(data_name)=>{
    let win= document.createElement('app-window')
    win.setAttribute('name', data_name);
document.body.appendChild(win);
}



export {openWindow};