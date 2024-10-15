key = "c6423649-0f5c-40c4-9bba-ee114eba20af";
url = "web.progettimolinari.it/";

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
            .then((data) => resolve());
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
                    key: 'seriea',
                }),
            }).then((response) => response.json()).
            then((r) => resolve(r.result));
        } catch {
            reject()
        }

  });
        
  }