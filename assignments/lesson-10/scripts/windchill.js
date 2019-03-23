function adjustRating(rating) {
    document.getElementById("ratingvalue").innerHTML = rating;
}




var t = getElementById('currently');
var s = getElementById('windspeed');

/*t=(air average temperature)*/
/*s= windspeed in mph*/
var f=35.74 + (0.6215 * t) - (35.75 * Math.pow(s, 0.16)) + (0.4275 * t * Math.pow( s,0.16));

document.getElementById("windchill").innerHTML = f;
