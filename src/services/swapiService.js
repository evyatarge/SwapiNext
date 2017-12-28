
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

export function  getCharactersData(){
    get('https://swapi.co/api/people').then(function(result) {
        result = JSON.parse(result);
        getPlanets(result);
    }, function(err) {
        console.log(err);
    });
}

export function  getPlanets(persons){
    var personsNames = getNames(persons.results);
    var data = [];
    for (let person=0; person<(persons.results).length; person++) {
        var planet;
        get(persons.results[person].homeworld).then(function(result) {
            planet = JSON.parse(result).name;
        }, function(err) {
            console.log(err); // Error: "It broke"
        });

        data.push({name: personsNames[person], homePlanet: planet});
    }
    return data;
}

export  function getNames(dataList){
    var names = [];

    for (var people in dataList) {
        if (dataList.hasOwnProperty(people)) {
            names.push(dataList[people].name);
        }
    }
    return names;
}