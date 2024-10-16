

const checkRoomAvaliability = (singola,doppia,suite) => {
    if (singola > rooms.singola) {alert("Non ci sono abbastanza camere singole in questa data");error = true;}
    if (doppia > rooms.doppia) {alert("Non ci sono abbastanza camere singole in questa data");error = true;}
    if (suite > rooms.suite) {alert("Non ci sono abbastanza camere singole in questa data");error = true;}
}

setInterval(() => {
    download();
    //table.render();
},1000);