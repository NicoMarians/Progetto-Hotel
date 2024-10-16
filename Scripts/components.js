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
            const button=document.getElementById("send");
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

const createTable = (parentElement) => {
    let data = [];

    return {
        build: (dataInput) => {
            data = dataInput;
        },

        render: (data) => {
            //[["stanza","posti"]]
            let htmlTable = '<table>';
            htmlTable += data.map((row) => 
                '<tr>' + row.map((col) => 
                    '<td>' + col + '</td>').join('')+'</tr>').join('');
            htmlTable += '</table>';
            parentElement.innerHTMl = htmlTable
        },
    };
};

const table = createTable(document.querySelector('#table'));
table.build([['Data', 'Singola', 'Doppia', 'Suite']]);
table.render();