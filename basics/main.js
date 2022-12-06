var voorNaam = "Isis";
var tussenVoegsel = " van";
var achterNaam = " Hemert";

var completeNaam = voorNaam + tussenVoegsel + achterNaam;


voorNaam = "Isis";
tussenVoegsel = "van";
achterNaam = "Hemert";

//alert(completeNaam);

console.log(completeNaam);

if (voorNaam=="Isis")
{
    console.log("voorNaam is Isis");
}
else 
{
    console.log("voorNaam is NIET Isis");
}

document.getElementById("weekend").innerHTML = completeNaam;

function klikknop()
{
    document.getElementById("weekend").innerHTML += "<br>"+completeNaam;

}



