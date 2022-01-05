import log from "../util/log.js";

export default class Icon{
    constructor(name,index){
        this.name = name;
        this.index = index;
        this.create = () => {
        let test = document.createElement('app-icon')
test.setAttribute('name', this.name)
test.setAttribute('index', this.index) 
document.getElementById('homeScreen').children[this.index].appendChild(test);
localStorage.setItem(this.name.toUpperCase(), this.index);
}
this.replace = (name_ , index_) => {
    log(name_, index_);
    let test = document.createElement('app-icon')
test.setAttribute('name', name_)
test.setAttribute('index', index_) 
document.getElementById('homeScreen').children[index_].appendChild(test);
localStorage.setItem(name_.toUpperCase(), index_);
}

this.load=()=>{
    if(localStorage.length === 0){
        this.create();
        log("Icon.js loaded successfully");
            }else{
                log
                    let name = localStorage.getItem(this.name);
                    let index = localStorage.getItem(name)+1;
                    log(localStorage, index);
                   this.replace(name,index);
            
            }
             
}
this.delete = () => {
document.getElementById(this.name).remove();
}
} 
}