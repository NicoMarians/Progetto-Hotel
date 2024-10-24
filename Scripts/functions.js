
const checkRoomAvaliability = (day,input) => {
    let error = false;

    day.forEach((room,index) => {
        if (!((room - input[index]) >= 0)) error = true;
    })
    
    if (error) alert("Non ci sono abbastanza camere");
    else day.map((room,index) => room - input[index]);
}

const addBooking = (input) => {
    let error = false;
    let rooms = input.slice(1);

    let newBooking = defaultRooms.map((room,index) => {
        if (parseInt(rooms[index]) < room) room-parseInt(rooms[index]);
        else error = true;
    })
    console.log(newBooking);
    if (!error) dati.push(newBooking.insert(0,input[0]));
    else alert("Non ci sono abbastanza camere");
}