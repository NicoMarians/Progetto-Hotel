const divForm=document.getElementById("divForm");
const divTable=document.getElementById("divTable");

let today = new Date();
let todayString = today.toISOString().slice(0,10); //DD/MM/YYYY


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
                let found = false;
                dati.forEach((day) => {
                    console.log(day[0]);
                    console.log(input[0]);

                    if (day[0] == input[0]){
                        checkRoomAvaliability(day.slice(1),input.slice(1))
                        found = true;
                    }
                })
                if (!found) addBooking(input);
            }
        },
    }
}

//La tabellla avra' una lista del genere: [["data","singola","doppia","suite"],[...]]

const createTable = (parentElement) => {
    let datiTabella;
    return {
        build: (dataInput) => {
            datiTabella = dataInput;
        },

        render: () => {
            let htmlTable = '<table class="table">';
            htmlTable += datiTabella.map((row) => 
                {return ('<tr>' + row.map((col) => '<td>' + col + '</td>').join('')+'</tr>')}).join('');
            htmlTable += '</table>';
            parentElement.innerHTML = htmlTable; 
        },
    };
};



