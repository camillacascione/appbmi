/* Calcoli per la app sul BMI */

function calcola(){
//identificare i dati del form
var peso=document.forms.bmi.peso.value;
var altezza=document.forms.bmi.altezza.value;
var sesso=document.forms.bmi.sesso.value;
if(sesso = "m"){
var totale=peso/(altezza*altezza);
/* Math.pow(base,exp)
 * Math.pow(altezza,2)*/
document.getElementById('calcola').innerHTML="BMI ="+totale;
}
else if(sesso="f"){
var totale = (peso/(altezza*altezza))*0.9;
document.getElementById('calcola').innerHTML="BMI ="+totale;
}
// verifico se l'utente è m o f
if(sesso='m'){
    // applico la formula bmi per maschi
    var res=;
    }
    else{
    // applico la formula bmi per femmine
    var res=;
    }
    var risultato=getElementById('risultato');
    risultato.InnerHTML="BMI = "+"res;

}

function annulla(){
document.getElementById('calcola').innerHTML=" ";
}
