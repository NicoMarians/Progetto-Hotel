const divForm=document.getElementById("divForm");
const divTable=document.getElementById("divTable");

const createForm = (elemento) =>{
    let arrayElement=[["data","date"],["singola","number"],["doppia","number"],["suite","number"]];
    let bindingElement;
    let data;
    let callback=null;
    return{
        onsubmit: (f) =>{callback=f;},
        render: () =>{
            elemento.innerHTML=arrayElement.map((line)=>`<div>`+ line[0] + `<input id="` + line[0] + `" type="` + line[1] + `"></div>`).join("");
            elemento.innerHTML=elemento.innerHTML+`<div><button type="button" id="send">invia</button></div>`
            const button=documen.getElementById("button");
            button.onclick=() => {
                bindingElement=arrayElement.map((element)=>document.getElementById(element[0]));
                data=bindingElement.map((element)=>element.value);
                callback(data);
            }
        },
    }
}
const form=createForm(divForm);
form.onsubmit(console.log);
form.render();
//La tebellla avra' una lista del genere: [["data","singola","doppia","suite"],[...]]
