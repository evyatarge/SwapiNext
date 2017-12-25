
export function  get(path){
    return new Promise(function(resolve, reject) {

        var req = new XMLHttpRequest();
        req.open("GET", path, true);
        req.send();

        req.onload = function() {
          if (this.readyState == 4 && this.status == 200) {
                var res = JSON.parse(req.responseText);
                resolve(req.response);
          }
          else {
            reject(Error(req.statusText));
          }
        };

        req.onerror = function() {
          reject(Error("Network Error"));
        };

  });
}

// function getSwapiElement(path){
//     var xhttp = new XMLHttpRequest();
//     xhttp.onreadystatechange = function(e) {
//         if (this.readyState == 4 && this.status == 200) {
//            // Typical action to be performed when the document is ready:
//            var res = JSON.parse(xhttp.responseText);
//            console.log("after change res = ");
//            console.log(res);
//            return res;
//         }
//     };
//     xhttp.open("GET", "https://swapi.co/api/"+path, true);
//     xhttp.send();
// }
