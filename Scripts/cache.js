key = "c6423649-0f5c-40c4-9bba-ee114eba20af";
url = "ws.cipiaceinfo.it/";

//{data:room(class)}
let data = {};


function upload(valore) {
    console.log("Upload",valore)
    return new Promise((resolve,reject) => {
        try{
            fetch(url + 'set', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    key: 'c6423649-0f5c-40c4-9bba-ee114eba20af',
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
                    key: 'c6423649-0f5c-40c4-9bba-ee114eba20af',
                },
                body: JSON.stringify({
                    key: 'progettiHotel',
                }),
            }).then((response) => response.json()).
            then((r) => resolve(r.result));
        } catch {
            reject()
        }
    });     
  }