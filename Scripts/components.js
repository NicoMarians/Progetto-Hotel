const divForm=document.getElementById("divForm");
const divTable=document.getElementById("divTable");

let today = new Date();
let todayString = today.toISOString().slice(0,10); //DD/MM/YYYY

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
            const button=document.getElementById("send");
            button.onclick=() => {
                bindingElement=arrayElement.map((element)=>document.getElementById(element[0]));
                data= bindingElement.map((element)=>element.value);
                callback(data);
            }
        },
    }
}

//La tebellla avra' una lista del genere: [["data","singola","doppia","suite"],[...]]

const createTable = (parentElement) => {
    let data;

    return {
        build: (dataInput) => {
            data = dataInput;
        },

        render: () => {
            //[["stanza","posti"]]
            let htmlTable = '<table class="table">';
            htmlTable += data.map((row) => 
                {return ('<tr>' + row.map((col) => '<td>' + col + '</td>').join('')+'</tr>')}).join('');
            htmlTable += '</table>';
            console.log(htmlTable);
            parentElement.innerHTML = htmlTable;
        },
    };
};



