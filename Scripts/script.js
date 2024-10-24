const form =  createForm(divForm);
const table = createTable(divTable);

form.onsubmit(console.log);
form.render();

table.build(dati);

aggiornaDatiTabella();


setInterval(() => {
    //download().then();
    table.render();
},1000);