function aleatorio(minimo, maximo)
{
    var numero = Math.floor( Math.random() * (maximo - minimo +1) + minimo);
    return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;
var opciones = ["piedra", "papel", "tijera"];

// alert( opciones[1]);

var opcionusuario;
var opcionmaquina = aleatorio(0,2);

opcionusuario = prompt("Sharu te reta a Jugar \nPiedra: 0\nPapel: 1\nTijera:2",0);

// alert( "elegiste " + opcionusuario);

alert("Elegiste " + opciones[opcionusuario]);
alert("Sharu eligio " + opciones[opcionmaquina]);

if(opcionusuario == piedra ) {
    // alert("elegiste piedra");
    if(opcionmaquina == piedra){
        alert("empate 😱");
    }
    else if(opcionmaquina == papel){
        alert("perdiste 😭");
    }
    else if(opcionmaquina == tijera){
        alert("ganaste 🤩");
    }
}
else if(opcionusuario == papel) {
    // alert("elegiste papel");
    if(opcionmaquina == piedra){
        alert("ganaste 🤩");
    }
    else if(opcionmaquina == papel){
        alert("empate 😱");
    }
    else if(opcionmaquina == tijera){
        alert("perdiste 😭");
    }
}
else if(opcionusuario == tijera){
    // alert("elegiste tijera");
    if(opcionmaquina == piedra){
        alert("perdiste 😭");
    }
    else if(opcionmaquina == papel){
        alert("ganaste 🤩");
    }
    else if(opcionmaquina == tijera){
        alert("empate 😱");
    }
}
else {
    alert("elige bien sino te pego 😠")
}

