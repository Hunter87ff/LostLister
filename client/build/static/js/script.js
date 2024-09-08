function sel(name){return document.querySelector(name);}
function selAll(name){return document.querySelectorAll(name);}

var menubar = sel("#menu-bar");
var nav = sel(".nav");
var mcount=0;
function menu_bar(){
    if(mcount==0){
    nav.style.display = "block";
    mcount++;
    }
    else{
        nav.style.display = "none";
        mcount--;
    }
}
function show(){
    if(mcount==0){
    nav.style.display = "block";
    mcount++;
    }
    else{
        nav.style.display = "none";
        mcount--;
    }
}