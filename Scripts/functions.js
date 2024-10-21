const setMaxDate = (date) => {

    // YYYY-MM-DD
    const arrDate = date.split("-");
    let year = parseInt(arrDate[0]);
    let month = parseInt(arrDate[1]);
    let day = parseInt(arrDate[2]);

    const controlloDate = isLeapYear(year) ? [31,29,31,30,31,30,31,31,30,31,30,31] : [31,28,31,30,31,30,31,31,30,31,30,31];


    day += 30;
    if (day > controlloDate[month - 1]) {
        day -= controlloDate[month - 1]
        month += 1;
        if (month > 12) {
            month -= 12; 
            year += 1;
        }
    }
    let newDate = new Date(parseInt(year),parseInt(month),parseInt(day)).toISOString().slice(0,10);
    return newDate;
}

const isLeapYear = (year) =>{
    let result; 

    if (year/400) result = true
    else if(year/100) result = false
    else if(year/4) result= true
    else result= false

    return result
 }