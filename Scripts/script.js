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