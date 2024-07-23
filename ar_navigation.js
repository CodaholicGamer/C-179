let coordinates = {

}

$(document).ready(function(){
    get_coordinates();
});

function get_coordinates(){
    let searchparam = new URLSearchParams(window.location.search);
    if(searchparam.has('source') && searchparam.has('destination')){
        let source = searchparam.get('source');
        let destination = searchparam.get('destination');

        //SOURCE LAT AND LNG
        coordinates.source_lat = source.split(";")[0]
        coordinates.source_lng = source.split(";")[1]

        //DESTINATION LAT AND LNG
        coordinates.destination_lat = destination.split(";")[0]
        coordinates.destination_lng = destination.split(";")[1]

        //GETTING THE SOURCE LAT. LNG IN CONSOLE
        console.log(coordinates.source_lat);
        console.log(coordinates.source_lng);

        //GETTING THE DESTINATION LAT. LNG IN CONSOLE
        console.log(coordinates.destination_lat);
        console.log(coordinates.destination_lng);
    }
    else{
        alert("Coordinates not selected.");
        window.history.back();
    }
}