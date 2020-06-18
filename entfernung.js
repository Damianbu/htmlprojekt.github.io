
	// convert degrees to radians
	Number.prototype.toRad = function() {  return this * Math.PI / 180; }
	// convert radians to degrees
	Number.prototype.toDeg = function() {  return this * 180/Math.PI; } 


function entfernungberechnen(la1,lo1,la2,lo2) {
	dist = 6378388 * Math.acos(Math.sin(la1.toRad()) * Math.sin(la2.toRad()) + Math.cos(la1.toRad()) * Math.cos(la2.toRad()) * Math.cos(lo2.toRad() - lo1.toRad()))
	return dist;
}

function richtungberechnen(la1, lo1, la2, lo2) {
        var dLat = la2 - la1;
        var dLon = lo2 - lo1;
        var y = Math.sin(dLon.toRad()) * Math.cos(la2.toRad());
        var x = Math.cos(la1.toRad()) * Math.sin(la2.toRad()) - Math.sin(la1.toRad()) * Math.cos(la2.toRad())*Math.cos(dLon.toRad());
        var brng = Math.atan2(y, x);
        return (brng.toDeg() + 360) % 360;
}

function entfernung_und_richtung_ausgeben(markernr,laengeaktuell, breiteaktuell) {
	document.getElementById("entfernung"+markernr).innerHTML=Math.floor(entfernungberechnen(breiteaktuell,laengeaktuell,breite[markernr],laenge[markernr]))+" m";
	document.getElementById("richtung"+markernr).innerHTML=Math.floor(richtungberechnen(breiteaktuell,laengeaktuell,breite[markernr],laenge[markernr]))+" °";
}