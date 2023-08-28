export function restaurantValidation(info, setters, files) {
  let validated = true;
  let allAlerts = "";
  let alert = "";

  // Mensajes de error
  let errors = {
    blankAlert: "Este campo no se puede llenar solamente con espacios",
    onlyLettersAlert: "Solo se permiten letras, comas y puntos en este campo",
    emptyAlert: "Este campo no se puede dejar vacío",
    negativeAlert: "Este campo solo permite números positivos",
    closingAlert: "La hora de cierre debe ser posterior a la de apertura",
    formatImagesAlert:
      "Solo se permiten imágenes con extensión: jpg, png y jpeg",
    maxImagesAlert: "Se supero el limite máximo de 5 imágenes",
    minImagesAlert: "Se debe registrar al menos 2 imágenes",
  };

  //Validar campos de texto
  alert = validateTextInput(info.name.value, errors);
  setters.nameAlert(alert);
  allAlerts += alert;

  alert = validateTextInput(info.locationName.value, errors);
  setters.locatNameAlert(alert);
  allAlerts += alert;

  alert = validateTextInput(info.cookingKind.value, errors);
  setters.cookingAlert(alert);
  allAlerts += alert;

  alert = validateTextInput(info.description.value, errors);
  setters.descripAlert(alert);
  allAlerts += alert;

  //Validar precio reserva
  alert = "";
  if (info.price.value === "") {
    alert = errors.emptyAlert;
  } else if (parseInt(info.price.value) < 0) {
    alert = errors.negativeAlert;
  }
  setters.priceAlert(alert);
  allAlerts += alert;

  //Validar hora de apertura y cierre
  alert = "";
  if (info.openingTime.value === "") {
    alert = errors.emptyAlert;
  }
  setters.openingAlert(alert);
  allAlerts += alert;

  alert = "";
  if (info.closingTime.value === "") {
    alert = errors.emptyAlert;
  } else if (info.openingTime.value >= info.closingTime.value) {
    alert = errors.closingAlert;
  }
  setters.closingAlert(alert);
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
