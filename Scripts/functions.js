
const checkRoomAvaliability = (input,indice) => {
    let error = false;
    let giorno = dati[indice].slice(1);

    giorno.forEach((room,index) => {
        if (!((room - input[index]) >= 0)) error = true;
    })
    
    if (error) alert("Non ci sono abbastanza camere");
    
    else {
        let newDay = giorno.map((room,index) => {return (room - input[index])});
        newDay.unshift(dati[indice][0]);
        dati[indice] = newDay;
    }
}

const addBooking = (input) => {
    let error = false;
    let rooms = input.slice(1);

    let newBooking = defaultRooms.map((room,index) => {
        if (parseInt(rooms[index]) < room) return room-parseInt(rooms[index]);
        else error = true;
    })
    console.log(newBooking);
    newBooking.unshift(input[0]);
    console.log(newBooking);
    if (!error) dati.push(newBooking);
    else alert("Non ci sono abbastanza camere");
}

const aggiornaDatiTabella = () => {
    let datiTabella = [];
    let day;
    
    for (let i = 0; i < 30; i++){
        let today = new Date();
        let newDate = today
        newDate.setDate(today.getDate() + i);
        let dayString = newDate.toISOString().slice(0,10);

        day = [];

        let found = false;

        /*
        dati.slice(1).forEach((giorno) => {
            console.log(giorno[0]);
            if (giorno[0] == dayString && !found){
                datiTabella.push(giorno);
                found = true;
            }
        });
        */
        day.push(dayString);
        defaultRooms.forEach((element) => day.push(element));
        console.log(day);
        datiTabella.push(day);
    }
    return datiTabella;
}