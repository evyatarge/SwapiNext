
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
