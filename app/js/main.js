var request = new XMLHttpRequest();
   request.open("GET", "js/fdv2017.json", false);
   request.send(null)
   var my_JSON_object = JSON.parse(request.responseText);

let Vins = my_JSON_object;



console.log(Vins);