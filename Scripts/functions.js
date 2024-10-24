const checkRoomAvaliability = (giorno,stanze) => {
    let error = false;
    data.giorno.forEach((stanza,index) => {
        if (! (parseInt(stanze[i]) > stanza)) error = true;
    })

    if (!error) {
        this.stanze.forEach((stanza,index) => {
        stanza -= stanze[index];
        });
    } else alert("Non ci sono abbastanza camere");
}

const updateData = (data) => {
    let today = null;
    let todayString = null;
    for (let i = 0; i < 30 ;i++){
        today = new Date();
        todayString = today.toISOString().slice(0,10); //DD/MM/YYYY  
        if (! todayString in data){
            addBooking(todayString)
        }
    }  
}

const addBooking = (date) => {
    if (! (date in data)){
        data[date] = new Rooms(100,70,30);
    }
}