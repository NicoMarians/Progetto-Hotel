const divForm=document.getElementById("divForm");
const divTable=document.getElementById("divTable");

let today = new Date();
let todayString = today.toISOString().slice(0,10); //DD/MM/YYYY

const defaultRooms = [100,50,30];

const createForm = (elemento) =>{
    let arrayElement=[["data","date"],["singola","number"],["doppia","number"],["suite","number"]];
    let input;
    let bindingElement;
    let callback=null;
    return{
        onsubmit: (f) =>{callback=f;},
        render: () =>{
            elemento.innerHTML=arrayElement.map((line)=>`<div>`+ line[0] + `<input id="` + line[0] + `" type="` + line[1] + `"></div>`).join("");
            elemento.innerHTML=elemento.innerHTML+`<div><button type="button" id="send">invia</button></div>`
            const button=document.getElementById("send");
            button.onclick=() => {
                //download();
                bindingElement=arrayElement.map((element)=>document.getElementById(element[0]));
                input = bindingElement.map((element)=>element.value);
                if (input[0] in Object.keys(data)) data.input[0].checkRoomAvaliability(input.slice(1));
                else {
                    addBooking(input[0]);
                    data.input[0].checkRoomAvaliability(input.slice(1));
                }
                console.log(data);
            }
        },
    }
}

//La tebellla avra' una lista del genere: [["data","singola","doppia","suite"],[...]]

const createTable = (parentElement) => {
    let datiTabella;
    return {
        build: (dataInput) => {
            datiTabella = dataInput;
        },

        render: () => {
            console.log(datiTabella);
            let htmlTable = '<table class="table">';
            Object.keys(datiTabella).map((element) => { 
                console.log(datiTabella);
                return ('<tr>' + datiTabella.element.stanze.map((stanza) => '<td>' + stanza + '</td>')).join("")
            }).join("");
            

            /*
            htmlTable += datiTabella.map((row) => 
                {return ('<tr>' + row.map((col) => '<td>' + col + '</td>').join('')+'</tr>')}).join('');
            */
            htmlTable += '</table>';
            parentElement.innerHTML = htmlTable;
            
        },
    };
};



