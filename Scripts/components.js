const divForm=document.getElementById("divForm");
const divTable=document.getElementById("divTable");

const createForm = (elemento) =>{
    let arrayElementi;
    let callback=null;
    return{
        setLables: (lables)=>{arrayElementi=lables;},
        onsubmit: (f) =>{callback=f;},
        render: () =>{
            elemento.innerHTML=arrayElement.map((line)=>{`<div>`+ line[0] + `<input id="` + line[0] + `" type="` + line[1] + `"></input></div>`}).join();
        },
        render:() => {}
    }
}

//La tebellla avra' una lista del genere: [["data","singola","doppia","suite"],[data d]]
