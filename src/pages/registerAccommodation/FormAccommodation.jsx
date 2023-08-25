import "./FormAccommodation.css";
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
import EstablishmentService from "../../services/EstablishmentService";
import { accommodationValidation } from "./AccommodationValidation";

function FormAccommodation() {
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

  const responsibleId = 1;

  function loadImages(e) {
    const loadedFiles = Array.from(e.target.files);
    setFiles(loadedFiles);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const info = e.target;

    let setters = {
      nameAlert: setNameAlert,
      locatNameAlert: setLocatNameAlert,
      detailsAlert: setDetailsAlert,
      descripAlert: setDescripAlert,
      locatMapAlert: setLocatMapAlert,
      timeInAlert: setTimeInAlert,
      timeOutAlert: setTimeOutAlert,
      priceAlert: setPriceAlert,
      prepayAlert: setPrepayAlert,
      filesAlert: setFilesAlert,
    };

    if (!accommodationValidation(info, setters, files)) {
      return;
    }

    let apiData = {
      info: info,
      files: files,
      responsibleId: responsibleId,
    };

    EstablishmentService.putData(apiData);
    setOpenConfirm(true);
  }

  function cancelForm(e) {
    e.preventDefault();
    setOpenCancel(true);
  }

  return (
    <div className="bodyForm">
      <div className="formContainer">
        <h1 className="pageTitle">Registro de nuevo alojamiento</h1>
        <form className="formPlace" onSubmit={handleSubmit}>
          <div style={{ textAlign: "center" }}>
            <h2 className="formTitle">Formulario de Registro</h2>
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
            <MainButton text={"Completar Registro"} />
            <OtherButton text={"Cancelar"} onClick={cancelForm} />
          </div>
        </form>
        <ConfirmPopup
          open={openConfirm}
          setOpen={setOpenConfirm}
          successActions={[
            EstablishmentService.registerAccommodation,
            EstablishmentService.uploadImages,
          ]}
        />
        <RejectPopup open={openCancel} setOpen={setOpenCancel} />
      </div>
    </div>
  );
}

export default FormAccommodation;