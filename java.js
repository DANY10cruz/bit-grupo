let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido"); // Corregido: ID diferente
let nombrepreferido = document.getElementById("nombre-preferido");
let email = document.getElementById("email");
let edad = document.getElementById("edad");
let ciudad = document.getElementById("ciudad");
let Genero = document.getElementById("Genero");
let otro_genero = document.getElementById("otro_genero");
let expresiondGenero = document.getElementById("expresiondGenero");
let orientacionSexual = document.getElementById("orientacionSexual");
let atraRomantica = document.getElementById("atraccionRomantica");
let estadoVisibilidad = document.getElementById("estadoVisibilidad");
let procesoTransicion = document.getElementById("procesoTransicion");
let serviciosInteres = document.getElementById("serviciosInteres");
let tipoApoyo = document.getElementById("tipoApoyo");
let algunaNecesidad = document.getElementById("algunaNecesidad");
let comentarios = document.getElementById("comentarios");
let enviarFormulario = document.getElementById("formulario"); // No se usa, pero se declara

function botonEnviar() {
  let generoValor = Genero.value;
  let expresionValor = expresiondGenero.value;
  let orientacionValor = orientacionSexual.value;
  let atraccion = atraRomantica.value;

  generoValor = String(generoValor).trim().toLowerCase();
  expresionValor = String(expresionValor).trim().toLowerCase();
  orientacionValor = String(orientacionValor).trim().toLowerCase();
  atraccion = String(atraccion).trim().toLowerCase();

  console.log(nombre.value);
  console.log(apellido.value);
  console.log(nombrepreferido.value);
  console.log(email.value);
  console.log(edad.value);
  console.log(ciudad.value);
  console.log(Genero.value);
  console.log(otro_genero.value);
  console.log(expresiondGenero.value);
  console.log(orientacionSexual.value);
  console.log(atraRomantica.value);
  console.log(estadoVisibilidad.value);
  console.log(procesoTransicion.value);
  console.log(serviciosInteres.value); // Imprime el valor del select
  console.log(tipoApoyo.value);
  console.log(algunaNecesidad.value);
  console.log(comentarios.value);

  if (
    generoValor == "hombre" &&
    expresionValor == "masculina" &&
    orientacionValor == "otro" &&
    atraccion == "heterorromántico/a"
  ) {
    alert("Eres hombre con orientación Heterosexual");
  }
  if (
    generoValor == "mujer" &&
    expresionValor == "femenina" &&
    orientacionValor == "otro" &&
    atraccion == "heterorromántico/a"
  ) {
    alert("Eres mujer con orientación Heterosexual");
  }
  if (
    generoValor == "mujer" &&
    expresionValor == "femenina" &&
    orientacionValor == "lesbiana" &&
    atraccion == "homororromántico/a"
  ) {
    alert("Orientación sexual Lesbiana");
  }
  if (
    generoValor === "mujer" &&
    expresionValor === "femenina" &&
    orientacionValor === "bisexual" &&
    atraccion === "birromantico"
  ) {
    alert("Orientación sexual Bisexual");
  }
  if (
    generoValor === "mujer" &&
    expresionValor === "masculina" &&
    orientacionValor === "heterosexual" &&
    atraccion === "heterorromántico/a"
  ) {
    alert("Mujer cisgénero heterosexual con expresión de género masculina");
  }
  if (
    generoValor === "hombre" &&
    expresionValor === "masculina" &&
    orientacionValor === "gay" &&
    atraccion === "homororromántico/a"
  ) {
    alert("Orientación sexual Gay");
  }
  if (
    generoValor === "hombre" &&
    expresionValor === "masculina" &&
    orientacionValor === "bisexual" &&
    atraccion === "birromantico"
  ) {
    alert("Hombre cisgénero bisexual");
  }
  if (
    generoValor === "hombre" &&
    expresionValor === "femenina" &&
    orientacionValor === "lesbiana" &&
    atraccion === "homororromántico/a"
  ) {
    alert("Hombre cisgénero lesbiana ");
  }
  if (
    generoValor === "hombre" &&
    expresionValor === "femenina" &&
    orientacionValor === "heterosexual" &&
    atraccion === "heterorromántico/a" // Corregido: hoterorromantico a heterorromantico
  ) {
    alert("Hombre cisgénero heterosexual con expresión de género femenina");
  }
  if (
    generoValor === "hombre trans" && // Corregido: espacio en blanco
    expresionValor === "masculina" &&
    orientacionValor === "gay" &&
    atraccion === "homorromantico"
  ) {
    alert("Hombre transgénero gay");
  }
  if (
    generoValor === "no binario" && // Corregido: espacio en blanco
    expresionValor === "femenina" &&
    orientacionValor === "bisexual" &&
    atraccion === "birromantico"
  ) {
    alert("Persona no binaria bisexual con expresión de género femenina");
  } else {
    alert("Sino te identificas con el género, verifica bien las casillas. ");
  }
}
