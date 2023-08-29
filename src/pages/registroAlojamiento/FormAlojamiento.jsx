import React, { useState } from "react";
import TextField from "../../components/Forms/TextField";
import TextArea from "../../components/Forms/TextArea";
import TimeField from "../../components/Forms/TimeField";
import NumberField from "../../components/Forms/NumberField";
import FilesUpload from "../../components/Forms/FilesUpload";
import ConfirmPopup from "../../components/Forms/Popups/ConfirmPopup";
import RejectPopup from "../../components/Forms/Popups/RejectPopup";
import MainButton from "../../components/Forms/MainButton";
import OtherButton from "../../components/Forms/OtherButton";
import axios from "axios";

function FormAlojamiento() {
  const [data, setData] = useState({});

  // Archivos de imagen
  const [files, setFiles] = useState([]);

  // Manejo de errores en formulario
  const [nameAlert, setNameAlert] = useState("");
  const [locatNameAlert, setLocatNameAlert] = useState("");
  const [detailsAlert, setDetailsAlert] = useState("");
  const [descripAlert, setDescripAlert] = useState("");
  const [locatMapAlert, setLocatMapAlert] = useState("");
  const [timeInAlert, setTimeInAlert] = useState("");
  const [timeOutAlert, setTimeOutAlert] = useState("");
  const [priceAlert, setPriceAlert] = useState("");
  const [prepayAlert, setPrepayAlert] = useState("");
  const [filesAlert, setFilesAlert] = useState("");

  // Manejo Popups
  const [openConfirm, setOpenConfirm] = useState(false);
  const [openCancel, setOpenCancel] = useState(false);

  const BACK_URL = "http://localhost:8080/";

  const responsibleId = 1;

  function loadImages(e) {
    const loadedFiles = Array.from(e.target.files);
    setFiles(loadedFiles);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const form = e.target;
    setData(form);

    // Mostrar los valores de formulario
    /*const formData = new FormData(form);

        const formDataObject = {};
        formData.forEach((value, name) => {
            formDataObject[name] = value;
        });
        console.log(formDataObject);*/

    if (!validateData(form)) {
      return; //Sale de función
    }

    // Mostrar Popup de confirmacion
    setOpenConfirm(true);
  }

  async function registerAccomodation() {
    let form = data;
    let housingData = {
      responsiblePerson: {
        id: responsibleId,
      },
      description: form.description.value,
      openingTime: form.timeIn.value + ":00",
      closing_time: form.timeOut.value + ":00",
      name: form.name.value,
      price_accommodation: form.price.value,
      reservationPercentage: form.prepay.value,
      detailsAccommodation: form.details.value,
    };

    // Llamada a API para registro
    try {
      let API_URL = BACK_URL + "inf/alojamiento";
      await axios.post(API_URL, housingData).then((response) => {
        uploadImages(response.data.idEstablishment);
      });
    } catch (error) {
      console.log(error);
    }
  }

  function validateData(form) {
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
      range100Alert:
        "Este campo solo permite números en el rango de 0 hasta 100",
      formatImagesAlert:
        "Solo se permiten imágenes con extensión: jpg, png y jpeg",
      maxImagesAlert: "Se supero el limite máximo de 5 imágenes",
      minImagesAlert: "Se debe registrar al menos 2 imágenes",
    };

    // Validar campos de texto
    alert = validateTextInput(form.name.value, errors);
    setNameAlert(alert);
    allAlerts += alert;

    alert = validateTextInput(form.locationName.value, errors);
    setLocatNameAlert(alert);
    allAlerts += alert;

    alert = validateTextInput(form.details.value, errors);
    setDetailsAlert(alert);
    allAlerts += alert;

    alert = validateTextInput(form.description.value, errors);
    setDescripAlert(alert);
    allAlerts += alert;

    //Validar ubicacion (?)
    alert = "";
    const linkRegex = /^(http:\/\/|https:\/\/)[^\s]+$/i;
    if (form.locationMap.value === "") {
      alert = errors.emptyAlert;
    } else if (!linkRegex.test(form.locationMap.value)) {
      alert = errors.linkAlert;
    }
    setLocatMapAlert(alert);
    allAlerts += alert;

    // Validar hora entrada
    alert = "";
    if (form.timeIn.value === "") {
      alert = errors.emptyAlert;
    }
    setTimeInAlert(alert);
    allAlerts += alert;

    // Validar hora salida
    alert = "";
    if (form.timeOut.value === "") {
      alert = errors.emptyAlert;
    } else if (form.timeOut.value <= form.timeIn.value) {
      alert = errors.timeOutAlert;
    }
    setTimeOutAlert(alert);
    allAlerts += alert;

    // Validar precio
    alert = "";
    if (form.price.value === "") {
      alert = errors.emptyAlert;
    } else if (parseInt(form.price.value) < 0) {
      alert = errors.negativeAlert;
    }
    setPriceAlert(alert);
    allAlerts += alert;

    // Validar porcentaje reserva
    alert = "";
    if (form.prepay.value === "") {
      alert = errors.emptyAlert;
    } else if (parseInt(form.prepay.value) < 0) {
      alert = errors.negativeAlert;
    } else if (parseInt(form.prepay.value) > 100) {
      alert = errors.range100Alert;
    }
    setPrepayAlert(alert);
    allAlerts += alert;

    // Validar imágenes
    alert = validateImages(files, errors);
    setFilesAlert(alert);
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

  function cancelForm(e) {
    e.preventDefault();
    setOpenCancel(true);
  }

  async function uploadImages(idEstablishment) {
    const imageData = new FormData();
    for (const key of Object.keys(files)) {
      imageData.append("images", files[key]);
    }
    imageData.append("id_establishment", idEstablishment);
    try {
      let API_URL = BACK_URL + "image/fileSystem";
      await axios.post(API_URL, imageData).then((response) => {
        console.log(response.data);
        localStorage.setItem("idEstablishment", idEstablishment);
        localStorage.setItem("establishmentName", data.name.value);
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="bodyForm">
      <div className="formContainer">
        <h1 className="pageTitle">Registro de nuevo alojamiento</h1>
        <form className="formPlace" onSubmit={handleSubmit}>
          <div style={{ textAlign: "center" }}>
            <h2 className="formTitle">Formulario de Registro de Datos</h2>
          </div>
          <div className="row">
            <div className="col m-3">
              <TextField
                fieldName={"Nombre del Alojamiento"}
                inputName={"name"}
                placeholder={"Descripcion corta del Alojamiento"}
                alert={nameAlert}
                maxLength={30}
              />
              <TextField
                fieldName={"Nombre de la Ubicación"}
                inputName={"locationName"}
                placeholder={"Ciudad - País u otros datos de Alojamiento"}
                alert={locatNameAlert}
                maxLength={30}
              />
              <TextField
                fieldName={"Detalles del Alojamiento"}
                inputName={"details"}
                placeholder={
                  "Cantidad habitaciones, Baños, Huéspedes máximos permitidos"
                }
                alert={detailsAlert}
                maxLength={50}
              />
              <TextArea
                fieldName={"Descripcion del Alojamiento"}
                inputName={"description"}
                alert={descripAlert}
                maxLength={150}
              />
            </div>
            <div className="col m-3">
              <TextField
                fieldName={"Ubicacion en mapa"}
                inputName={"locationMap"}
                placeholder={"Enlace de la ubicación"}
                alert={locatMapAlert}
              />
              <div className="row">
                <div className="col">
                  <TimeField
                    fieldName={"Hora entrada"}
                    inputName={"timeIn"}
                    alert={timeInAlert}
                  />
                </div>
                <div className="col">
                  <TimeField
                    fieldName={"Hora salida"}
                    inputName={"timeOut"}
                    alert={timeOutAlert}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <NumberField
                    fieldName={"Precio de alojamiento($)"}
                    inputName={"price"}
                    alert={priceAlert}
                  />
                </div>
                <div className="col">
                  <NumberField
                    fieldName={"Porcentaje de reserva(%)"}
                    inputName={"prepay"}
                    alert={prepayAlert}
                  />
                </div>
              </div>
              <FilesUpload
                name={"Imágenes del Alojamiento"}
                onChange={loadImages}
                alert={filesAlert}
              />

              <section className="imageSection">
                <ul className="listImages">
                  {files.map((file) => {
                    return (
                      <li className="listElement" key={file.name}>
                        {file.name}
                      </li>
                    );
                  })}
                </ul>
              </section>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            <MainButton text={"Continuar Registro"} />
            <OtherButton text={"Cancelar"} onClick={cancelForm} />
          </div>
        </form>
        <ConfirmPopup
          open={openConfirm}
          setOpen={setOpenConfirm}
          successAction={registerAccomodation}
        />
        <RejectPopup open={openCancel} setOpen={setOpenCancel} />
      </div>
    </div>
  );
}

export default FormAlojamiento;
