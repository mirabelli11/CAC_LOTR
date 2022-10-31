function validarFormulario() {
    let nombre = document.forms["Contacto"]["firstname"].value;
    if (nombre == "") {
      alert("Por favor, completar el nombre");
      return false;
    }
    let mensaje = document.forms["Contacto"]["Mensaje"].value;
    if (mensaje == "") {
      alert("Por favor, completar el mensaje");
      return false;
    }
  }