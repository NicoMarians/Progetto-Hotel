const form =  createForm(divForm);
const table = createTable(divTable);

form.onsubmit(console.log);
form.render();

table.build(dati);

setInterval(() => {
    //download();
    table.render();
},1000);