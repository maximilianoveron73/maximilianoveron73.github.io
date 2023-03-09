
var texto = document.getElementById("demo");
var img =  document.getElementById("imagen");


img.onmouseenter =function(){
    img.style = "border:outset 5px cadetblue;"
}
img.onmouseleave =function(){
    img.style = "border:inset 5px cadetblue;"
}


document.getElementById("name").onmouseenter =function(){
    console.log("misdatos");
    texto.innerHTML = "Datos Personales"
}

document.getElementById("contact").onmouseenter =function(){
    console.log("miscontactos");
    texto.innerHTML = "Datos de Contactos"
}

document.getElementById("estudio").onmouseenter =function(){
    console.log("misestudios");
    texto.innerHTML = "Estudios Realizados"
}

document.getElementById("experiecia").onmouseenter =function(){
    console.log("misexperiencias");
    texto.innerHTML = "Experiencia Laboral"
}