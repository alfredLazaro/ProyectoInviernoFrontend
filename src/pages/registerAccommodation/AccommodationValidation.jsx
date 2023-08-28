export function accommodationValidation(info, setters, files) {
  let validated = true;
  let allAlerts = "";
  let alert = "";

  // Mensajes de error
  let errors = {
    blankAlert: "Este campo no se puede llenar solamente con espacios",
    onlyLettersAlert: "Solo se permiten letras, comas y puntos en este campo",
    emptyAlert: "Este campo no se pude dejar vacío",
    negativeAlert: "Este campo solo permite números positivos",
    linkAlert: "Solo se permiten enlaces en este campo",
    timeOutAlert: "La hora de salida debe ser posterior a la de entrada",
    range100Alert: "Este campo solo permite números en el rango de 0 hasta 100",
    formatImagesAlert:
      "Solo se permiten imágenes con extensión: jpg, png y jpeg",
    maxImagesAlert: "Se supero el limite máximo de 5 imágenes",
    minImagesAlert: "Se debe registrar al menos 2 imágenes",
  };

  // Validar campos de texto
  alert = validateTextInput(info.name.value, errors);
  setters.nameAlert(alert);
  allAlerts += alert;

  alert = validateTextInput(info.locationName.value, errors);
  setters.locatNameAlert(alert);
  allAlerts += alert;

  alert = validateTextInput(info.details.value, errors);
  setters.detailsAlert(alert);
  allAlerts += alert;

  alert = validateTextInput(info.description.value, errors);
  setters.descripAlert(alert);
  allAlerts += alert;

  //Validar ubicacion (?)
  alert = "";
  const linkRegex = /^(http:\/\/|https:\/\/)[^\s]+$/i;
  if (info.locationMap.value === "") {
    alert = errors.emptyAlert;
  } else if (!linkRegex.test(info.locationMap.value)) {
    alert = errors.linkAlert;
  }
  setters.locatMapAlert(alert);
  allAlerts += alert;

  // Validar hora entrada
  alert = "";
  if (info.timeIn.value === "") {
    alert = errors.emptyAlert;
  }
  setters.timeInAlert(alert);
  allAlerts += alert;

  // Validar hora salida
  alert = "";
  if (info.timeOut.value === "") {
    alert = errors.emptyAlert;
  } else if (info.timeOut.value <= info.timeIn.value) {
    alert = errors.timeOutAlert;
  }
  setters.timeOutAlert(alert);
  allAlerts += alert;

  // Validar precio
  alert = "";
  if (info.price.value === "") {
    alert = errors.emptyAlert;
  } else if (parseInt(info.price.value) < 0) {
    alert = errors.negativeAlert;
  }
  setters.priceAlert(alert);
  allAlerts += alert;

  // Validar porcentaje reserva
  alert = "";
  if (info.prepay.value === "") {
    alert = errors.emptyAlert;
  } else if (parseInt(info.prepay.value) < 0) {
    alert = errors.negativeAlert;
  } else if (parseInt(info.prepay.value) > 100) {
    alert = errors.range100Alert;
  }
  setters.prepayAlert(alert);
  allAlerts += alert;

  // Validar imágenes
  alert = validateImages(files, errors);
  setters.filesAlert(alert);
  allAlerts += alert;

  if (allAlerts !== "") validated = false;

  return validated;
}

function validateTextInput(text, errors) {
  let alert = "";

  let regex = /^[ a-zA-ZáéíóúÁÉÍÓÚñÑ,.\n]+$/;
  if (text === "") {
    alert = errors.emptyAlert;
  } else if (text.trim() === "") {
    alert = errors.blankAlert;
  } else if (!regex.test(text.trim())) {
    alert = errors.onlyLettersAlert;
  }

  return alert;
}

function validateImages(files, errors) {
  let alert = "";
  if (files.length == 0) {
    alert = errors.emptyAlert;
  } else if (files.length < 2) {
    alert = errors.minImagesAlert;
  } else if (files.length > 5) {
    alert = errors.maxImagesAlert;
  } else {
    const fileExtensionRegex = /\.(jpg|png|jpeg)$/i;
    for (let i = 0; i < files.length && alert === ""; i++) {
      if (!fileExtensionRegex.test(files[i].name)) {
        alert = errors.formatImagesAlert;
      }
    }
  }
  return alert;
}
