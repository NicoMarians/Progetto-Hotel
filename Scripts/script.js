

data["data"] = new Rooms(["Singola","Doppia","Suite"]);



const form =  createForm(divForm);
const table = createTable(divTable);

form.onsubmit(console.log);
form.render();

table.build(data);

setInterval(() => {
    //download();
    table.render();
},1000);