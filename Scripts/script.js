

const checkRoomAvaliability = (singola,doppia,suite) => {
    if (singola > rooms.singola) {alert("Non ci sono abbastanza camere singole in questa data");error = true;}
    if (doppia > rooms.doppia) {alert("Non ci sono abbastanza camere singole in questa data");error = true;}
    if (suite > rooms.suite) {alert("Non ci sono abbastanza camere singole in questa data");error = true;}
}

setInterval(() => {
    download();
    //table.render();
},1000);

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