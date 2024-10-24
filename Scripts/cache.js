let key = "c6423649-0f5c-40c4-9bba-ee114eba20af";
let url = "ws.cipiaceinfo.it/cache/";

let dati = [["Data","Singola","Doppia","Suite"]];
const defaultRooms = [100,50,30];


function upload(valore) {
    console.log("Upload",valore)
    return new Promise((resolve,reject) => {
        try{
            fetch(url + 'set', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    key: '4095a663-3e69-4699-94e7-225f722690bc',
                },
                body: JSON.stringify({
                    key: 'progettoHotel',
                    value: valore,  
                }),
            }).then((response) => response.json())
            .then((data) => resolve(data.r));
        } catch {
            reject();
        }
    });
  }
  
  function download() {
    return new Promise((resolve,reject) => {
        try{
            fetch(url + 'get', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    key: '4095a663-3e69-4699-94e7-225f722690bc',
                },
                body: JSON.stringify({
                    key: 'progettiHotel',
                }),
            }).then((r) => r.json()).
            then((r) => resolve(r.result));
        } catch {
            reject()
        }
    });     
  }