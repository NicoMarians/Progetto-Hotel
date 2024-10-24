class Rooms {
    constructor(stanze){
        this.stanze = stanze // [singola,doppia,suite,...]
    }
    checkRoomAvaliability = (stanze) => {
        let error = false;
        this.stanze.forEach((stanza,index) => {
            if (! (parseInt(stanze[i]) > stanza)) error = true;
        })

        if (!error) {
            this.stanze.forEach((stanza,index) => {
            stanza -= stanze[index];
            });
        } else alert("Non ci sono abbastanza camere");
    }
}


const form =  createForm(divForm);
const table = createTable(divTable);

form.onsubmit(console.log);
form.render();

table.build([['Data', 'Singola', 'Doppia', 'Suite']]);

setInterval(() => {
    download();
    table.render();
},1000);