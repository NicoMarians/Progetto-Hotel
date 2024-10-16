class Rooms {
    constructor(){
        this.singola = 100;
        this.doppia = 50;
        this.suite = 20;
    }
    checkRoomAvaliability = (singola,doppia,suite) => {
        let error = false;
        if (singola > this.singola) {alert("Non ci sono abbastanza camere singole in questa data");error = true;}
        if (doppia > this.doppia) {alert("Non ci sono abbastanza camere singole in questa data");error = true;}
        if (suite > this.suite) {alert("Non ci sono abbastanza camere singole in questa data");error = true;}

        if (!error) this.singola -= singola; this.doppia -= doppia; this.suite -= suite;
    }
}

setInterval(() => {
    download();
    table.render();
},1000);