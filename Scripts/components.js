const divForm=document.getElementById("form");
const divTable=document.getElementById("table");
const createForm(elemento) =>{
    let arrayElement;
    let callback=null;
    return{
        setLables: (lables)=>{arrayElementi=lables;},
        onsubmit: (f) =>{callback=f;},
        render: () =>{
            elemento.innerHTML=arrayElement.map((line)=>{`<div>`+ line[0] + `<input id="` + line[0] + `" type="` + line[1] + `"></input></div>`}).join();
        },
    }
}