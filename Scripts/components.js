const divForm=document.getElementById("form");
const divTable=document.getElementById("table");
const createForm(elemento) =>{
    let arrayElementi;
    let callback=null;
    return{
        setLables: (lables)=>{arrayElementi=lables;},
        onsubmit: (f) =>{callback=f;},
        render()
    }
}