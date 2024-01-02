
function OnGeoOk(position)
{
    const lat = position.coords.latitude;
    const longi = position.coords.longitude;
    console.log(`you are ${lat} . ${longi}`);
}

function OnGeoError()
{
    alert("Cant find you");
}

navigator.geolocation.getCurrentPosition(OnGeoOk,OnGeoError);