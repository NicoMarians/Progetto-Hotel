const updateData = (data) => {
    let today = null;
    let todayString = null;
    for (let i = 0; i < 30 ;i++){
        today = new Date();
        todayString = today.toISOString().slice(0,10); //DD/MM/YYYY  
        if (! todayString in data){
            data[todayString] = new Rooms(100,70,30);
        }
    }  
}

const addBooking = (date) => {
    if (! date in data){
        data[todayString] = new Rooms(100,70,30);
    }
}